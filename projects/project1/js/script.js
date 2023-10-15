/**
 * Project 1
 * Muriel Smith
 * 
 * An RGB color-matching game.
 */

"use strict";

let user = {
    x: undefined,
    y: undefined,
    size: 20,
};

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
    r: undefined,
    g: undefined,
    b: undefined,
}

let gameArea = {
    leftWall: 50,
    rightWall: 950,
    topWall: 250,
    bottomWall: 950,
}

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

// these are the targets worth 5 points
let smallCirclesNumber = 45;
let tempX = 80;
let tempY = 250;
let smallCirclesDistance = 60;

// these are the targets worth 10 points
let mediumCirclesNumber = 30;
let mediumCirclesDistance = 95;

// these are the targets worth 20 points
let bigCirclesNumber = 12;
let bigCirclesDistance = 125;

let circles = [];
let totalCircles = 87;

/**
 * Description of setup
*/
function setup() {
    createCanvas(1000,1000);
    background(0);

    createRGBcircles();
    displayTargetColorBox();
}

/**
 * Description of draw()
*/
function draw() {
    displayRGBcircles();
    displayUserColorBox();
}

function createRGBcircles() {
    // creates the RGB circles
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

        // sets the starting X position of the small circles
        // and the distance between the rows of small circles
        if (i === 14 || i === 29) {
            tempX = 80;
            tempY += 50;
        }
        // sets the starting X position of the medium circles
        // and the distance between the rows of medium circles
        if(i === 44 || i === 54 || i === 64) {
            tempX = 70;
            tempY += 80;
        }
        // sets the starting X position of the big circles
        // and the distance between the rows of big circles
        if ( i === 74 || i === 78 || i === 82) {
            tempX = 310;
            tempY += 100;
        }
    }
}

function displayRGBcircles() {
    // connects the created RGB circles to its class
    for (let circle of circles) {
        displayCircle(circle); 
    }
}

function displayCircle(circle) {
    // displays the objects as created
    push();
    noStroke();
    fill(circle.r, circle.g, circle.b);
    ellipse(circle.x, circle.y, circle.size);
    pop();
}

function displayTargetColorBox() {
    stroke(255);
    strokeWeight(3);
    // sets the R, G, and B values of the target color to multiples of 5
    targetColor.r = floor(random(0, 255/5)) * 5;
    targetColor.g = floor(random(0, 255/5)) * 5;
    targetColor.b = floor(random(0, 255/5)) * 5;

    // displays the target color
    rectMode(CENTER);
    fill(targetColor.r, targetColor.g, targetColor.b); 
    rect(targetColorBox.x, targetColorBox.y, targetColorBox.width, targetColorBox.height); 
}

function displayUserColorBox() {
    stroke(255);
    strokeWeight(3);
    // sets the R, G, and B values of the user color to variables
    userColor.r = 0;
    userColor.g = 0;
    userColor.b = 0;

    fill(userColor.r, userColor.g, userColor.b);
    rect(userColorBox.x, userColorBox.y, userColorBox.width, userColorBox.height);
}

function mousePressed() {
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        let d = dist(mouseX, mouseY, circle.x, circle.y);
        if (d < circle.size / 2) {
            
        }
    }
}