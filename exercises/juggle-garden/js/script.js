/**
 * Title of Project
 * Muriel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let rightHand;
let leftHand;

let garden = {
    flowers: [],
    bees: [],
    numFlowers: 50,
    numBees: 10,
    grasscolor: {
        r: 120,
        g: 180,
        b: 120
    }
};

let pickedFlowers = 0;

let state = `simulation`;

/*
creates elements
**/
function setup() {
    createCanvas(600,600);

    // creates right hand
    let handX = width - width/10;
    let handY = height - height/10;
    let elbowX = width + 50;
    let elbowY = height + 50;
    rightHand = new Hand(handX, handY, elbowX, elbowY);
    // creates left hand
    let handLX = width/10;
    let handLY = height - height/10;
    let elbowLX = -50;
    let elbowLY = height + 50;
    leftHand = new Hand(handLX, handLY, elbowLX, elbowLY);

    // creates flowers
    for (let i = 0; i < garden.numFlowers; i++) {
        let flower = new Flower();
        garden.flowers.push(flower);
    }
    // sort flower array by Y so that flowers higher up (further) are behind flowers in front
    garden.flowers.sort(sortByY);

    // creates bees
    for (let i = 0; i < garden.numBees; i++) {
        let bee = new Bee();
        garden.bees.push(bee);
    }
}

function sortByY(flower1, flower2) {
    return flower1.y - flower2.y;
}

/*
contains states
**/
function draw() {
    background(garden.grasscolor.r, garden.grasscolor.g, garden.grasscolor.b);

    if (state === `simulation`) {
        simulation();
    }
    else if (state === `win`) {
        win();
    }
    else if (state === `lose`) {
        lose();
    }
    
}

function simulation() {
    displayElements();
    checkForWin();
    checkForLose();
}

function win() {
    displayPickedFlowers();
    leftHand.display();
    displayWinText();
}

function lose() {
    leftHand.display();
    rightHand.display();
    displayPickedFlowers();
    displayAngryBee();
    displayLoseText();
}

function displayElements() {
    // displays flowers
    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        if (flower.alive && !flower.picked) {
            // if flowers are alive & not picked, they shrink
            flower.shrink();
            flower.display();
        }
        else if (flower.alive && flower.picked) {
            // if flowers are picked, they stop shrinking
            flower.display();
        }
    }

    // displays bees that are alive, lets them move and shrink over time
    for (let i = 0; i < garden.bees.length; i++) {
        let bee = garden.bees[i];
        if (bee.alive) {
            bee.shrink();
            bee.move();
            
            for (let j = 0; j < garden.flowers.length; j++) {
                let flower = garden.flowers[j];
                if (flower.alive && !flower.picked) {
                    bee.tryToPollinate(flower);
                }
            }

            bee.display();
            bee.tryToSting(rightHand);
        }
    }

    // displays right hand
    rightHand.move();
    rightHand.display();

    // displays left hand
    leftHand.display();
}

function mousePressed() {
    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        flower.mousePressed(rightHand);
    }
}

function checkForWin() {
    if (pickedFlowers >= 10) {
        state = `win`;
    }
}

function checkForLose() {
    if (rightHand.stung) {
        state = `lose`;
    }
}

function displayPickedFlowers() {
    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        if (flower.alive && flower.picked) {
            flower.display();
        }
    }
}

function displayAngryBee() {
    for (let i = 0; i < garden.bees.length; i++) {
        let bee = garden.bees[i];
        if (bee.angry) {
            bee.move();
            bee.display();
        }
    }
}

function displayWinText() {
    push();
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text(`You picked flowers without getting stung!`, width/2, height/2);
    pop();
}

function displayLoseText() {
    push();
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text(`Yeeowch! You got stung!`, width/2, height/2);
    pop();
}