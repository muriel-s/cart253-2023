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

function setup() {
    createCanvas(600,600);

    // creates right hand
    rightHand = new Hand(width - width/10, height - height/10, width + 50, height + 50);
    // creates left hand
    leftHand = new Hand(width/10, height - height/10, -50, height + 50);

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

function draw() {
    background(garden.grasscolor.r, garden.grasscolor.g, garden.grasscolor.b);

    // displays flowers, shrinks them over time
    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        if (flower.alive) {
            flower.shrink();
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
                if (flower.alive) {
                    bee.tryToPollinate(flower);
                }
            }

            bee.display();
        }
    }

    // displays right hand
    rightHand.move();
    rightHand.display();

    // displays left hand
    leftHand.display();
}