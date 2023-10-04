/**
 * Looking for Love
 * Muriel Smith
 * 
 */

"use strict";

let circle1 = {
    x: 200,
    y: 300,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5
};

let circle2 = {
    x: 400,
    y: 300,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5
};

let state = `title`


function setup() {
    createCanvas(600,600);

    // sets circles' movements to random directions
    circle1.vx = random(-circle1.speed, circle1.speed);
    circle1.vy = random(-circle1.speed, circle1.speed);
    circle2.vx = random(-circle2.speed, circle2.speed);
    circle2.vy = random(-circle2.speed, circle2.speed);
}

function draw() {
    background(0);

    // contains the actions for each state
    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `love`) {
        love();
    }
    else if (state === `sadness`) {
        sadness();
    };
}

// draws title
function title() {
    textSize(32);
    fill(255);
    textAlign(CENTER, BOTTOM);
    text(`love`, width/2, height/2);
}

// changes state from title to simulation
function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
}

// contains simulation actions
function simulation() {
    moveCircles();
    checkOffscreen();
    checkOverlap();
    displayCircles();
}

// sets circles in motion
function moveCircles() {
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;

    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;
}

// changes state to `sadness` if a circle runs off canvas
function checkOffscreen() {
    if (circleOffCanvas()) {
        state = `sadness`;
    };
}

// returns true/false if a circle has run off canvas
function circleOffCanvas() {
    let result = (circle1.x > width + circle1.size/2 || circle1.x < 0 - circle1.size/2 || circle1.y > height + circle1.size/2 || circle1.y < 0 - circle1.size/2 || circle2.x > width + circle2.size/2 || circle2.x < 0 - circle2.size/2 || circle2.y > height + circle2.size/2 || circle2.y < 0 - circle2.size/2);
    return result;
}

// changes state to `love` if circles overlap
function checkOverlap() {
    let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (d < circle1.size/2 + circle2.size/2) {
        state = `love`;
    };
}

// draws circles
function displayCircles() {
    ellipse(circle1.x, circle1.y, circle1.size);
    ellipse(circle2.x, circle2.y, circle2.size);
}

// displays happy ending text
function love() {
    textSize(32);
    fill(255);
    textAlign(CENTER, BOTTOM);
    text(`yay!`, width/2, height/2);
}

// displays sad ending text
function sadness() {
    textSize(32);
    fill(255);
    textAlign(CENTER, BOTTOM);
    text(`:(`, width/2, height/2);
}