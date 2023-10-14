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
    b: undefined
}

let gameArea = {
    leftWall: 50,
    rightWall: 950,
    topWall: 250,
    bottomWall: 950,
}

// these are the targets worth 5 points
let smallCirclesNumber = 15;
let redSmallCircles = [];
let greenSmallCircles = [];
let blueSmallCircles = [];

// these are the targets worth 10 points
let mediumCirclesNumber = 10;
let redMediumCircles = [];
let greenMediumCircles = [];
let blueMediumCircles = [];

// these are the targets worth 20 points
let bigCirclesNumber = 4;
let redBigCircles = [];
let greenBigCircles = [];
let blueBigCircles = [];

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
    displayRGBcircles()

}

function createRGBcircles() {
    // create the 5 points circles
    for (let i = 0; i < smallCirclesNumber; i++) {
        redSmallCircles[i] = createRedSmall(random(gameArea.leftWall, gameArea.rightWall), random(250, 330));
        greenSmallCircles[i] = createGreenSmall(random(gameArea.leftWall, gameArea.rightWall), random(250, 330));
        blueSmallCircles[i] = createBlueSmall(random(gameArea.leftWall, gameArea.rightWall), random(250, 330));
    }

    // create the 10 points circles
    for (let i = 0; i < mediumCirclesNumber; i++) {
        redMediumCircles[i] = createRedMedium(random(gameArea.leftWall, gameArea.rightWall), random(370, 620));
        greenMediumCircles[i] = createGreenMedium(random(gameArea.leftWall, gameArea.rightWall), random(380, 620));
        blueMediumCircles[i] = createBlueMedium(random(gameArea.leftWall, gameArea.rightWall), random(380, 620));
    }

    // create the 20 points circles
    for (let i = 0; i < bigCirclesNumber; i++) {
        redBigCircles[i] = createRedBig(random(gameArea.leftWall, gameArea.rightWall), random(690, 900));
        greenBigCircles[i] = createGreenBig(random(gameArea.leftWall, gameArea.rightWall), random(690, 900));
        blueBigCircles[i] = createBlueBig(random(gameArea.leftWall, gameArea.rightWall), random(690, 900));
    }

    function createRedSmall(x, y) {
        let redSmallCircles = {
            x: x,
            y: y,
            size: 20,
        };
        return redSmallCircles;
    }
    function createGreenSmall(x, y) {
        let greenSmallCircles = {
            x: x,
            y: y,
            size: 20,
        };
        return greenSmallCircles;
    }
    function createBlueSmall(x, y) {
        let blueSmallCircles = {
            x: x,
            y: y,
            size: 20,
        };
        return blueSmallCircles;
    }
    function createRedMedium(x, y) {
        let redMediumCircles = {
            x: x,
            y: y,
            size: 40,
        };
        return redMediumCircles;
    }
    function createGreenMedium(x, y) {
        let greenMediumCircles = {
            x: x,
            y: y,
            size: 40,
        };
        return greenMediumCircles;
    }
    function createBlueMedium(x, y) {
        let blueMediumCircles = {
            x: x,
            y: y,
            size: 40,
        };
        return blueMediumCircles;
    }
    function createRedBig(x, y) {
        let redBigCircles = {
            x: x,
            y: y,
            size: 80,
        };
        return redBigCircles;
    }
    function createGreenBig(x, y) {
        let greenBigCircles = {
            x: x,
            y: y,
            size: 80,
        };
        return greenBigCircles;
    }
    function createBlueBig(x, y) {
        let blueBigCircles = {
            x: x,
            y: y,
            size: 80,
        };
        return blueBigCircles;
    }
}

function displayRGBcircles() {
    for (let i = 0; i < redSmallCircles.length; i++) {
        displayRedSmall(redSmallCircles[i]);
    }
    for (let i = 0; i < redMediumCircles.length; i++) {
        displayRedMedium(redMediumCircles[i]);
    }
    for (let i = 0; i < redBigCircles.length; i++) {
        displayRedBig(redBigCircles[i]);
    }
    for (let i = 0; i < greenSmallCircles.length; i++) {
        displayGreenSmall(greenSmallCircles[i]);
    }
    for (let i = 0; i < greenMediumCircles.length; i++) {
        displayGreenMedium(greenMediumCircles[i]);
    }
    for (let i = 0; i < greenBigCircles.length; i++) {
        displayGreenBig(greenBigCircles[i]);
    }
    for (let i = 0; i < blueSmallCircles.length; i++) {
        displayBlueSmall(blueSmallCircles[i]);
    }
    for (let i = 0; i < blueMediumCircles.length; i++) {
        displayBlueMedium(blueMediumCircles[i]);
    }
    for (let i = 0; i < blueBigCircles.length; i++) {
        displayBlueBig(blueBigCircles[i]);
    }
}

function displayRedSmall(redSmallCircles) {
    push();
    noStroke();
    fill(255, 0, 0, 100);
    ellipse(redSmallCircles.x, redSmallCircles.y, redSmallCircles.size);
    pop();
}
function displayRedMedium(redMediumCircles) {
    push();
    noStroke();
    fill(255, 0, 0, 100);
    ellipse(redMediumCircles.x, redMediumCircles.y, redMediumCircles.size);
    pop();
}
function displayRedBig(redBigCircles) {
    push();
    noStroke();
    fill(255, 0, 0, 100);
    ellipse(redBigCircles.x, redBigCircles.y, redBigCircles.size);
    pop();
}

function displayGreenSmall(greenSmallCircles) {
    push();
    noStroke();
    fill(0, 255, 0, 100);
    ellipse(greenSmallCircles.x, greenSmallCircles.y, greenSmallCircles.size);
    pop();
}
function displayGreenMedium(greenMediumCircles) {
    push();
    noStroke();
    fill(0, 255, 0, 100);
    ellipse(greenMediumCircles.x, greenMediumCircles.y, greenMediumCircles.size);
    pop();
}
function displayGreenBig(greenBigCircles) {
    push();
    noStroke();
    fill(0, 255, 0, 100);
    ellipse(greenBigCircles.x, greenBigCircles.y, greenBigCircles.size);
    pop();
}

function displayBlueSmall(blueSmallCircles) {
    push();
    noStroke();
    fill(0, 0, 255, 100);
    ellipse(blueSmallCircles.x, blueSmallCircles.y, blueSmallCircles.size);
    pop();
}
function displayBlueMedium(blueMediumCircles) {
    push();
    noStroke();
    fill(0, 0, 255, 100);
    ellipse(blueMediumCircles.x, blueMediumCircles.y, blueMediumCircles.size);
    pop();
}
function displayBlueBig(blueBigCircles) {
    push();
    noStroke();
    fill(0, 0, 255, 100);
    ellipse(blueBigCircles.x, blueBigCircles.y, blueBigCircles.size);
    pop();
}

function displayTargetColorBox() {
    noStroke();
    targetColor.r = random(0, 255);
    targetColor.g = random(0, 255);
    targetColor.b = random(0, 255);

    rectMode(CENTER);
    rect(targetColorBox.x, targetColorBox.y, targetColorBox.width, targetColorBox.height); 
}