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
}

// frame properties
let frame = {
    h: 180,
    s: 0,
    b: 50,
    thickness: 200,
    minThickness: 50,
    width: 1000
}

// noise properties
let noise = {
    amount: 2000,
    hue: 180,
    saturation: 0,
    brightness: 100,
    pointSize: 2,
    area: 0.15
}

let interA;
let interB;
let interC;
let interD;
let interE;
let interF;
let interG;
let interH;
let interI;

function setup() {
    createCanvas(1000, 1000);
    colorMode(HSB);
    frameRate(fr);
}

function draw() {
    // draws background
    let backgroundColor = color(bg.h, bg.s, bg.b)
    background(backgroundColor);

    // draws frame
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
    }

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
    }

    // draws noise
    for (let i = 0; i < noise.amount; i++) {
        let x = randomGaussian(width/2, width*noise.area);
        let y = randomGaussian(height/2, width*noise.area);
        stroke(noise.hue, noise.saturation, noise.brightness);
        strokeWeight(noise.pointSize);
        point(x, y);
    }
}

function createInterColor(interLetter, lerpAmt) {
    let frameColor = color(frame.h, frame.s, frame.b);
    let backgroundColor = color(bg.h, bg.s, bg.b);
    interLetter = lerpColor(frameColor, backgroundColor, lerpAmt);
    // return interLetter;
    strokeWeight(lerp(frame.minThickness, frame.thickness, lerpAmt));
    stroke(interLetter);
    rect(width/2, height/2, frame.width);
}