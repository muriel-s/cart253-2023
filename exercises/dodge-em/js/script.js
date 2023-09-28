/**
 * Dodge em
 * Muriel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let anteater = {
    x: 0,
    y: 250,
    width: 781,
    height: 364,
    vx: 0,
    speed: 70,
    speedIncrease: 20
};

let termite = {
    x: 0,
    y: 0,
    width: 250,
    height: 115,
    fill: 255,
    vx: 0,
    vy: 0,
    maxSpeed: 50,
    ax: 0,
    ay: 0,
    acceleration: 10
};

let stopwatch = {
    textX: 200,
    textY: 200,
    textSize: 56,
    textFill: 0,
    fill: 240,
    x: 150,
    y: 120,
    width: 250,
    height: 220
};

let scoreboard = {
    textX: 700,
    textY: 200,
    textSize: 56,
    textFill: 0,
    fill: 240,
    x: 650,
    y: 120,
    width: 250,
    height: 220
};

let staticAmount = 5000;

let anteaterImg;
let termiteImg;

let score = 0;

function preload() {
    anteaterImg = loadImage('assets/images/anteater.png');
    termiteImg = loadImage('assets/images/termite.png');
}


function setup() {
    createCanvas(windowWidth, windowHeight);

    // starts the anteater at random height, avoiding the stopwatch
    anteater.y = random(2*stopwatch.height, height - anteater.height/2);
    // anteater.vx = anteater.speed;
}


function draw() {
    background(200);

    // draws static
    for (let i = 0; i < staticAmount ; i++) {
        let x = random(0, width);
        let y = random(0, height);
        stroke(random(0,155), random(0,155), random(0,155));
        strokeWeight(3);
        point(x, y);
    }

    // draws box around stopwatch
    fill(stopwatch.fill);
    rectMode(CORNER);
    rect(stopwatch.x, stopwatch.y, stopwatch.width, stopwatch.height);

    // draws box around scoreboard
    fill(scoreboard.fill);
    rectMode(CORNER);
    rect(scoreboard.x, scoreboard.y, scoreboard.width, scoreboard.height);

    // draws stopwatch
    let time = round(millis()/1000);
    noStroke();
    fill(stopwatch.textFill);
    textSize(stopwatch.textSize); 
    textFont('Verdana');
    text('Time: \n' + time, stopwatch.textX, stopwatch.textY);

    // draws scoreboard
    noStroke();
    fill(scoreboard.textFill);
    textSize(scoreboard.textSize); 
    textFont('Verdana');
    text('Score: \n' + score, scoreboard.textX, scoreboard.textY);

    // sets termite's speed in following the mouse
    if (mouseX > termite.x) {
        termite.ax = termite.acceleration;
    }
    else if (mouseX < termite.x) {
        termite.ax = -termite.acceleration;
    }
    if (mouseY > termite.y) {
        termite.ay = termite.acceleration;
    }
    else if (mouseY < termite.y) {
        termite.ay = -termite.acceleration;
    }

    // constrains the termite's speed in following the mouse
    termite.vx = termite.vx + termite.ax;
    termite.vx = constrain(termite.vx, -termite.maxSpeed, termite.maxSpeed);
    termite.vy = termite.vy + termite.ay;
    termite.vy = constrain(termite.vy, -termite.maxSpeed, termite.maxSpeed);

    // sets the termite in motion
    termite.x = termite.x + termite.vx;
    termite.y = termite.y + termite.vy;

    // sets anteater moving to the right
    anteater.x = anteater.x + anteater.speed;

    // makes anteater faster when score hits multiples of 10
    if (score <= 10) {
        anteater.speed = 70;
    }
    else if (score > 10 && score <= 20) {
        anteater.speed = 90;
    }
    else if (score > 20 && score <= 30) {
        anteater.speed = 110;
    }
    else {
        anteater.speed = 130;
    };

    // resets anteater back to far left
    if (anteater.x > width + anteater.width/2) {
        anteater.x = -anteater.width/2;
        anteater.y = random(2*stopwatch.height, height - anteater.height/2);
        score++;
    };

    // draws anteater
    image(anteaterImg, anteater.x, anteater.y, anteater.width, anteater.height);

    // draws termite
    image(termiteImg, termite.x, termite.y, termite.width, termite.height);

    // stops the loop when termite & anteater touch
    let d = dist(termite.x, termite.y, anteater.x, anteater.y);
    if (d < anteater.width/2 + termite.width/2 && d < anteater.height/2 + termite.height/2) {
        noLoop();
    };
}