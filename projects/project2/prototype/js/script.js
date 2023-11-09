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
};
// noise properties
let noise = {
    amount: 1000,
    hue: 180,
    saturation: 0,
    brightness: 100,
    pointSize: 2,
    area: 0.15
};
let coolville;
let deco1;
let deco2;
let deco3;
let deco4;
let starImg;
let state = `quiz`; 

function preload() {
    // load font
    coolville = loadFont('assets/fonts/Coolville.ttf');
    // load images for decorations
    deco1 = loadImage('assets/images/deco1.png');
    deco2 = loadImage('assets/images/deco2.png');
    deco3 = loadImage('assets/images/deco3.png');
    deco4 = loadImage('assets/images/deco4.png');

    // load image for cursor icon
    starImg = loadImage('assets/images/star.png');
}

function setup() {
    createCanvas(1000, 1000);
    colorMode(HSB);
    frameRate(fr);
    noCursor();
}

function draw() {
    if (state === `quiz`) {
        quizBackground();
        quizText();
        cursorStar();
    }
    else if (state === `ending`) {
        drawFinalImage();
    }

}

function quizBackground() {
    background(0);
    // draws noise ...
    for (let i = 0; i < 200; i++) {
        let randomColor = color(random(0, 360), random(0, 100), random(0, 100));
        stroke(randomColor);
        strokeWeight(3);
        // ... in top left corner
        let x = randomGaussian(0, width*0.15);
        let y = randomGaussian(0, width*0.15);
        point(x, y);
        // ... in bottom left corner
        x = randomGaussian(0, width*0.1);
        y = randomGaussian(height, width*0.15);
        point(x, y);
        // ... in top right corner
        x = randomGaussian(width, width*0.15);
        y = randomGaussian(0, width*0.1);
        point(x, y);
        // ... and in bottom right corner
        x = randomGaussian(width, width*0.15);
        y = randomGaussian(height, width*0.15);
        point(x, y);
    };
    // places star decorations
    push();
    imageMode(CENTER);
    image(deco1, 100, 200);
    image(deco2, 800, 700);
    image(deco3, 900, 300);
    image(deco4, 300, 900);
    pop();

    // draws starlight trail following mouse
    for (let i = 0; i < 10; i++) {
        stroke(60, 80, 100);
        strokeWeight(2);
        let x = random(mouseX, pmouseX);
        let y = random(mouseY + 5, pmouseY + 5);
        point(x, y);
    }
}

function quizText() {
    push();
    noStroke();
    textFont('Pixelify Sans');
    rectMode(CORNER);
    textAlign(LEFT, BOTTOM);
    fill(100);
    textSize(32);
    text(`Question question question question?`, width/5, height/3, 2*width/3);
    text(`Answer!`, width/5, 500, 3*width/4);
    text(`Answer...`, width/5, 600, 3*width/4);
    text(`Answer answer.`, width/5, 700, 3*width/4);
}

function cursorStar() {
    imageMode(CENTER);
    image(starImg, mouseX, mouseY);
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