/**
 * Project 2 Prototype
 * Muriel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
// framerate
let fr = 12;

// background color properties
let bg = {
    h: 180,
    s: 50,
    b: 50
};

// frame properties
let frame = {
    h: 0,
    s: 0,
    b: 50,
    thickness: 200,
    minThickness: 50,
    width: 1000
};
// frame blending
let interA;
let interB;
let interC;
let interD;
let interE;
let interF;
let interG;
let interH;
let interI;

// wave properties
let wave = {
    curveHeight: 50,
    curveWidth: 0.08,
    size: 10,
    alpha: 0.5
}

// noise properties
let noise = {
    amount: 1000,
    hue: 180,
    saturation: 0,
    brightness: 100,
    pointSize: 2,
    area: 0.15
};

let state = `quiz`; 

function setup() {
    createCanvas(1000, 1000);
    colorMode(HSB);
    frameRate(fr);
    noCursor();
}

function draw() {
    if (state === `quiz`) {
        quizBackground();
        cursorStar();
    }
    else if (state === `ending`) {
        drawFinalImage();
    }

}

function quizBackground() {
    background(0);
    // draws noise
    for (let i = 0; i < 200; i++) {
        let randomColor = color(random(0, 360), random(0, 100), random(0, 100));
        stroke(randomColor);
        strokeWeight(3);
        // top left corner
        let x = randomGaussian(0, width*0.15);
        let y = randomGaussian(0, width*0.15);
        point(x, y);
        // bottom left corner
        x = randomGaussian(0, width*0.1);
        y = randomGaussian(height, width*0.15);
        point(x, y);
        // top right corner
        x = randomGaussian(width, width*0.15);
        y = randomGaussian(0, width*0.1);
        point(x, y);
        // bottom right corner
        x = randomGaussian(width, width*0.15);
        y = randomGaussian(height, width*0.15);
        point(x, y);
    };
    // draws starlight trail
    for (let i = 0; i < 10; i++) {
        stroke(60, 80, 100);
        strokeWeight(2);
        // following mouse
        let x = random(mouseX, pmouseX);
        let y = random(mouseY + 5, pmouseY + 5);
        point(x, y);
    }
}

function cursorStar() {
    push();
    stroke(0);
    strokeWeight(1);
    fill(60, 80, 100);
    beginShape();
    vertex(mouseX, mouseY); // point 1
    vertex(mouseX + 5, mouseY + 10);
    vertex(mouseX + 15, mouseY + 10); // point 2
    vertex(mouseX + 7.5, mouseY + 17.5);
    vertex(mouseX + 12.5, mouseY + 30); // point 3
    vertex(mouseX, mouseY + 22.5);
    vertex(mouseX - 12.5, mouseY + 30); // point 4
    vertex(mouseX - 7.5, mouseY + 17.5);
    vertex(mouseX - 15, mouseY + 10); // point 5
    vertex(mouseX - 5, mouseY + 10);
    endShape(CLOSE);
    pop();
}

function drawFinalImage() {
    drawBackground();
    drawFrame();
    drawWave();
    drawCentralNoise();
}

function drawBackground() {
    let backgroundColor = color(bg.h, bg.s, bg.b)
    background(backgroundColor);
}

function drawFrame() {
    // sets parameters
    let frameColor = color(frame.h, frame.s, frame.b);
    noFill();
    rectMode(CENTER);
    // draws the blend from frame to bg
    createInterColor(interI, 0.9);
    createInterColor(interH, 0.8);
    createInterColor(interG, 0.7);
    createInterColor(interF, 0.6);
    createInterColor(interE, 0.5);
    createInterColor(interD, 0.4);
    createInterColor(interC, 0.3);
    createInterColor(interB, 0.2);
    createInterColor(interA, 0.1);
    // draws outer frame
    strokeWeight(frame.minThickness);
    stroke(frameColor);
    rect(width/2, height/2, frame.width);
}

function createInterColor(interLetter, lerpAmt) {
    let frameColor = color(frame.h, frame.s, frame.b);
    let backgroundColor = color(bg.h, bg.s, bg.b);
    interLetter = lerpColor(frameColor, backgroundColor, lerpAmt);
    strokeWeight(lerp(frame.minThickness, frame.thickness, lerpAmt));
    stroke(interLetter);
    rect(width/2, height/2, frame.width);
}

function drawWave() {
    push();
    noStroke();
    fill(frame.h, frame.s, frame.b, wave.alpha);
    beginShape();
    for (let i = 0; i < 1000; i++) {
        let x = i;
        let y = wave.curveHeight * sin(x * wave.curveWidth) + 500 + -wave.size;
        vertex(x, y);
    };
    for (let i = 1000; i > 0; i--) {
        let x = i;
        let y = wave.curveHeight * sin(x * wave.curveWidth) + 500 + wave.size;
        vertex(x, y);
    };
    endShape(CLOSE);
    pop();
}

function drawCentralNoise() {
    // draws base-layer of noise
    for (let i = 0; i < noise.amount; i++) {
        let x = randomGaussian(width/2, 1.5*width*noise.area);
        let y = randomGaussian(height/2, 1.5*width*noise.area);
        let hue = lerp(noise.hue, bg.h, 0.75);
        let saturation = lerp(noise.saturation, bg.s, 0.75);
        let brightness = lerp(noise.brightness, bg.b, 0.75);
        stroke(hue, saturation, brightness);
        strokeWeight(noise.pointSize);
        point(x, y);
    };
    // draws mid-layer of noise
    for (let i = 0; i < noise.amount; i++) {
        let x = randomGaussian(width/2, 1.5*width*noise.area);
        let y = randomGaussian(height/2, 1.5*width*noise.area);
        let hue = lerp(noise.hue, bg.h, 0.5);
        let saturation = lerp(noise.saturation, bg.s, 0.5);
        let brightness = lerp(noise.brightness, bg.b, 0.5);
        stroke(hue, saturation, brightness);
        strokeWeight(noise.pointSize);
        point(x, y);
    };
    // draws noise
    for (let i = 0; i < noise.amount; i++) {
        let x = randomGaussian(width/2, width*noise.area);
        let y = randomGaussian(height/2, width*noise.area);
        stroke(noise.hue, noise.saturation, noise.brightness);
        strokeWeight(noise.pointSize);
        point(x, y);
    };
}