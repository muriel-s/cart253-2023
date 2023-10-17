/**
 * Project 1
 * Muriel Smith
 * 
 * An RGB color-matching game.
 */

"use strict";

let targetColorBox = {
    x: 250,
    y: 125,
    width: 300,
    height: 150,
}
let targetColor = {
    r: undefined,
    g: undefined,
    b: undefined,
}

let userColorBox = {
    x: 750,
    y: 125,
    width: 300,
    height: 150,
}
let userColor = {
    r: 0,
    g: 0,
    b: 0,
}

// class used to build the R, G, & B circles
class Circle {
    constructor(x, y, r, g, b, size) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.g = g;
        this.b = b;
        this.size = size;
    }
}

// starting position for the first row of RGB circles
let tempX = 80;
let tempY = 250;

// these are the targets worth 5 points
let smallCirclesNumber = 45;
let smallCirclesDistance = 60;

// these are the targets worth 10 points
let mediumCirclesNumber = 30;
let mediumCirclesDistance = 95;

// these are the targets worth 20 points
let bigCirclesNumber = 12;
let bigCirclesDistance = 125;

let circles = [];
let totalCircles = 87;

let state = `title`;

let startButton = {
    x: 150,
    y: 750,
    width: 200,
    height: 100,
}

/**
 * Contains canvas setup
*/
function setup() {
    createCanvas(1000,1000);

    createRGBcircles();
    createTargetColor();
}

/**
 * Contains the states
*/
function draw() {
    background(0);

    if (state === `title`) {
        title();
    }
    else if (state === `game`) {
        game();
    }
    else if (state === `win`) {
        win();
    }
    else if (state === `failure`) {
        failure();
    }
}

function title() {
    // draws Start button
    push();
    fill(255, 0, 255, 100);
    ellipse(startButton.x, startButton.y, startButton.width, startButton.height);
    pop();

    // text styles
    push();
    noStroke();
    fill(225);
    textAlign(LEFT, TOP);
    textFont(`Roboto Mono`);
    textStyle(`Thin 100`);

    // title
    textSize(48);
    text(`RGB Color Match`, 450, 150);

    // instructions & start button
    textSize(26);
    text(`Try to match the color in the top left by mixing red, \ngreen, and blue light.`, 50, 300);
    text(`Clicking on the red buttons adds red to your color mix, \nclicking the green buttons adds green, and the blue \nbuttons add blue.`, 50, 380);
    text(`The lighter the color, the more you will have to add. \nBut be careful, because you can't make it darker again!`, 50, 500);
    text(`START`, 110, 738);
    pop();
}

// adds function to start button
function mousePressed() {
    let d = dist(mouseX, mouseY, startButton.x, startButton.y);
    if (d < startButton.width) {
        startGame();
    };
}
function startGame() {
    if (state === `title`) {
        state = `game`
    }
}

// contains actions for game
function game() {
    displayTargetColorBox();
    displayRGBcircles();
    displayUserColorBox();
    checkForWin();
    checkForFail();
    print(`target color is:`, targetColor.r, targetColor.g, targetColor.b);
    print(`current user color is:`, userColor.r, userColor.g, userColor.b);
}

// creates the RGB circles using Circle constructor, placing them into circles[] array
function createRGBcircles() {
    for (let i = 0; i < totalCircles; i++) {
        if (i < 15) {
        circles[i] = new Circle(tempX, tempY, 255, 0, 0, 20);
        tempX += smallCirclesDistance;
        }
        else if (i < 30) {
        circles[i] = new Circle(tempX, tempY, 0, 255, 0, 20);
        tempX += smallCirclesDistance;
        }
        else if (i < 45) {
        circles[i] = new Circle(tempX, tempY, 0, 0, 255, 20);
        tempX += smallCirclesDistance;
        }
        else if (i < 55) {
        circles[i] = new Circle(tempX, tempY, 255, 0, 0, 40);
        tempX += mediumCirclesDistance;
        }
        else if (i < 65) {
        circles[i] = new Circle(tempX, tempY, 0, 255, 0, 40);
        tempX += mediumCirclesDistance;
        }
        else if (i < 75) {
        circles[i] = new Circle(tempX, tempY, 0, 0, 255, 40);
        tempX += mediumCirclesDistance;
        }
        else if (i < 79) {
        circles[i] = new Circle(tempX, tempY, 255, 0, 0, 80);
        tempX += bigCirclesDistance;
        }
        else if (i < 83) {
        circles[i] = new Circle(tempX, tempY, 0, 255, 0, 80);
        tempX += bigCirclesDistance;
        }
        else if (i <= 87) {
        circles[i] = new Circle(tempX, tempY, 0, 0, 255, 80);
        tempX += bigCirclesDistance;
        }

        // sets the first X position of the small circles
        // and the distance between the rows of small circles
        if (i === 14 || i === 29) {
            tempX = 80;
            tempY += 50;
        }
        // sets the first X position of the medium circles
        // and the distance between the rows of medium circles
        if(i === 44 || i === 54 || i === 64) {
            tempX = 70;
            tempY += 80;
        }
        // sets the first X position of the big circles
        // and the distance between the rows of big circles
        if ( i === 74 || i === 78 || i === 82) {
            tempX = 310;
            tempY += 100;
        }
    }
}

// connects the created RGB circles to the function that displays them
function displayRGBcircles() {
    for (let circle of circles) {
        displayCircle(circle); 
    }
}

// displays the RGB circle objects as created
function displayCircle(circle) {
    push();
    noStroke();
    fill(circle.r, circle.g, circle.b);
    ellipse(circle.x, circle.y, circle.size);
    pop();
}

// makes the RGB buttons disappear when you click on them
// and adds to the RGB values of the user color
function mouseClicked() {
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        let d = dist(circles[i].x, circles[i].y, mouseX, mouseY);
        if (d < circle.size) {
            circles.splice(i, 0)
            if (circles[i].r === 255 && circles[i].size === 20) {
                circles[i].r = 0;
                userColor.r += 5;
            }
            if (circles[i].r === 255 && circles[i].size === 40) {
                circles[i].r = 0;
                userColor.r += 10;
            }
            if (circles[i].r === 255 && circles[i].size === 80) {
                circles[i].r = 0;
                userColor.r += 20;
            }
            if (circles[i].g === 255 && circles[i].size === 20) {
                circles[i].g = 0;
                userColor.g += 5;
            }
            if (circles[i].g === 255 && circles[i].size === 40) {
                circles[i].g = 0;
                userColor.g += 10;
            }
            if (circles[i].g === 255 && circles[i].size === 80) {
                circles[i].g = 0;
                userColor.g += 20;
            }
            if (circles[i].b === 255 && circles[i].size === 20) {
                circles[i].b = 0;
                userColor.b += 5;
            }
            if (circles[i].b === 255 && circles[i].size === 40) {
                circles[i].b = 0;
                userColor.b += 10;
            }
            if (circles[i].b === 255 && circles[i].size === 80) {
                circles[i].b = 0;
                userColor.b += 20;
            }
            break;
        }
    }
}

// sets the R, G, and B values of the target color to multiples of 5
function createTargetColor() {
    targetColor.r = floor(random(0, 255/5)) * 5;
    targetColor.g = floor(random(0, 255/5)) * 5;
    targetColor.b = floor(random(0, 255/5)) * 5;
    
}

function displayTargetColorBox() {
    stroke(255);
    strokeWeight(3);
    // displays the target color
    rectMode(CENTER);
    fill(targetColor.r, targetColor.g, targetColor.b); 
    rect(targetColorBox.x, targetColorBox.y, targetColorBox.width, targetColorBox.height); 
}

function displayUserColorBox() {
    stroke(255);
    strokeWeight(3);
    // sets the R, G, and B values of the user color to variables
    fill(userColor.r, userColor.g, userColor.b);
    rect(userColorBox.x, userColorBox.y, userColorBox.width, userColorBox.height);
}

// sets the range in which each value should be in to win the game
function isInTargetRange(userRGB, targetRGB) {
    if (userRGB < targetRGB + 20 && userRGB > targetRGB - 20) {
        return true;
    }
}

function checkForWin() {
    if (isInTargetRange(userColor.r, targetColor.r) && isInTargetRange(userColor.g, userColor.g) && isInTargetRange(userColor.b, userColor.b)) {
        state = `win`;
    }
}
function win() {
    // draws confetti
    for (let i = 0; i < 1000 ; i++) {
        let x = random(0, width);
        let y = random(0, height);
        stroke(random(100,255), random(100,255), random(100,255));
        strokeWeight(4);
        point(x, y);
    }
    // keeps the target color and user color onscreen so the player can admire their skills
    displayUserColorBox();
    displayTargetColorBox();
    // displays winning text
    push();
    noStroke();
    fill(225);
    textAlign(CENTER, CENTER);
    textFont(`Roboto Mono`);
    textStyle(`Thin 100`);
    textSize(100);
    text(`WAHOO!!!`, width/2, height/2);
    pop();   
}

function checkForFail() {
    if (userColor.r > targetColor.r+20 || userColor.g > targetColor.g+20 || userColor.b > targetColor.b+20) {
        state = `failure`
    }
}
function failure() {
    // displays losing text
    push();
    noStroke();
    fill(225, 50, 50);
    textAlign(CENTER, CENTER);
    textFont(`Roboto Mono`);
    textStyle(`Thin 100`);
    textSize(100);
    text(`YOU DIED`, width/2, height/2);
    pop();
}
