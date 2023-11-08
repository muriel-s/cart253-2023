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

// noise properties
let noise = {
    amount: 1000,
    hue: 180,
    saturation: 0,
    brightness: 100,
    pointSize: 4,
    area: 0.15
}

// line pattern properties
let lines = {
    thickness: 1,
    h: 180,
    s: 100,
    b: 100,
    x: 0,
    y: 0,
    height: 0,
    minHeight: 250,
    maxHeight: 1000,
    spacing: 0,
}

function setup() {
    createCanvas(1000, 1000);
    colorMode(HSB);
    frameRate(fr);
}

function draw() {
    // draws background
    background(bg.h, bg.s, bg.b);

    // draws lines
    lines.height = lerp(lines.minHeight, lines.maxHeight, 0.5); 
    lines.spacing = lines.thickness*2;
    for (lines.x = 0; lines.x < width; lines.x += lines.spacing) {
        push();
        noFill();
        strokeCap(ROUND);
        strokeWeight(lines.thickness);
        stroke(lines.h, lines.s, lines.b);
        lines.y = randomGaussian(lines.height, lines.height/10);
        lines.y = constrain(lines.y, lines.minHeight, lines.maxHeight);
        line(lines.x, height, lines.x, lines.y);
        pop();
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