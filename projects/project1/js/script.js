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
    size: 100,
};

let targetColorBox = {
    x: 250,
    y: 150,
    width: 300,
    height: 200,
}

let targetColor = {
    r: undefined,
    g: undefined,
    b: undefined
}

let userColorBox = {
    x: 750,
    y: 150,
    width: 300,
    height: 200,
}

let userColor = {
    r: undefined,
    g: undefined,
    b: undefined
}

let gameArea = {
    leftWall: 50,
    rightWall: 950,
    topWall: 250,
    bottomWall: 950,
}

let number5points = 15;
let red5points = [];
let green5points = [];
let blue5points = [];

let number10points = 10;
let red10points = [];
let green10points = [];
let blue10points = [];

let number20points = 4;
let red20points = [];
let green20points = [];
let blue20points = [];

/**
 * Description of setup
*/
function setup() {
    createCanvas(1000,1000);
    background(0);

    // create the red5 circles
    for (let i = 0; i < number5points; i++) {
        red5points[i] = createRed5(random(gameArea.leftWall, gameArea.rightWall), random(gameArea.topWall, gameArea.bottomWall));
    }

    // create the red10 circles
    for (let i = 0; i < number10points; i++) {
        red10points[i] = createRed10(random(gameArea.leftWall, gameArea.rightWall), random(gameArea.topWall, gameArea.bottomWall));
    }

    // create the green5 circles
    for (let i = 0; i < number5points; i++) {
        green5points[i] = createGreen5(random(gameArea.leftWall, gameArea.rightWall), random(gameArea.topWall, gameArea.bottomWall));
    }

    // create the blue5 circles
    for (let i = 0; i < number5points; i++) {
        blue5points[i] = createBlue5(random(gameArea.leftWall, gameArea.rightWall), random(gameArea.topWall, gameArea.bottomWall));
    }
}

function createRed5(x, y) {
    let red5points = {
        x: x,
        y: y,
        size: 20,
    };
    return red5points;
}

function createRed10(x, y) {
    let red10points = {
        x: x,
        y: y,
        size: 40,
    };
    return red10points;
}

function createGreen5(x, y) {
    let green5points = {
        x: x,
        y: y,
        size: 20,
    };
    return green5points;
}

function createBlue5(x, y) {
    let blue5points = {
        x: x,
        y: y,
        size: 20,
    };
    return blue5points;
}

/**
 * Description of draw()
*/
function draw() {
    for (let i = 0; i < red5points.length; i++) {
        displayRed5(red5points[i]);
    }
    for (let i = 0; i < red10points.length; i++) {
        displayRed10(red10points[i]);
    }
    for (let i = 0; i < green5points.length; i++) {
        displayGreen5(green5points[i]);
    }
    for (let i = 0; i < blue5points.length; i++) {
        displayBlue5(blue5points[i]);
    }
}

function displayRed5(red5points) {
    push();
    noStroke();
    fill(255, 0, 0, 100);
    ellipse(red5points.x, red5points.y, red5points.size);
    pop();
}

function displayRed10(red10points) {
    push();
    noStroke();
    fill(255, 0, 0, 100);
    ellipse(red10points.x, red10points.y, red10points.size);
    pop();
}

function displayGreen5(green5points) {
    push();
    noStroke();
    fill(0, 255, 0, 100);
    ellipse(green5points.x, green5points.y, green5points.size);
    pop();
}

function displayBlue5(blue5points) {
    push();
    noStroke();
    fill(0, 0, 255, 100);
    ellipse(blue5points.x, blue5points.y, blue5points.size);
    pop();
}