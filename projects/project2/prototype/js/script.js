/**
 * Project 2 Prototype
 * Muriel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let fr = 12;

let bg = {
    h: 180,
    s: 50,
    b: 50
}

let noise = {
    amount: 1000,
    hue: 180,
    saturation: 0,
    brightness: 100,
    pointSize: 4,
    area: 0.15
}

let circles = {
    amount: 500,
    thickness: 2,
    h: 0,
    s: 50,
    b: 50,
    x: 0,
    y: 500,
    width: 50,
    height: 300,
    spacing: 10,
    minHeight: 300,
    maxHeight: 500,
}

function setup() {
    createCanvas(1000, 1000);
    colorMode(HSB);
}

function draw() {
    // draws background
    background(bg.h, bg.s, bg.b);
    frameRate(fr);

    // draws noise
    for (let i = 0; i < noise.amount; i++) {
        let x = randomGaussian(width/2, width*noise.area);
        let y = randomGaussian(height/2, width*noise.area);
        stroke(noise.hue, noise.saturation, noise.brightness);
        strokeWeight(noise.pointSize);
        point(x, y);
    }

    // draws series of ellipses
    let x = circles.x - circles.width/2;
    for (let cHeight = circles.height; cHeight <= circles.maxHeight; cHeight += circles.spacing) {
        push();
        noFill();
        strokeWeight(circles.thickness);
        stroke(circles.h, circles.s, circles.b);
        ellipse(x, circles.y, circles.width, cHeight);
        x += circles.spacing;
        pop();
    }
    for (let cHeight = circles.maxHeight; cHeight >= circles.minHeight; cHeight -= circles.spacing) {
        push();
        noFill();
        strokeWeight(circles.thickness);
        stroke(circles.h, circles.s, circles.b);
        ellipse(x, circles.y, circles.width, cHeight);
        x += circles.spacing;
        pop();
    }
    for (let cHeight = circles.height; cHeight <= circles.maxHeight; cHeight += circles.spacing) {
        push();
        noFill();
        strokeWeight(circles.thickness);
        stroke(circles.h, circles.s, circles.b);
        ellipse(x, circles.y, circles.width, cHeight);
        x += circles.spacing;
        pop();
    }
    for (let cHeight = circles.maxHeight; cHeight >= circles.minHeight; cHeight -= circles.spacing) {
        push();
        noFill();
        strokeWeight(circles.thickness);
        stroke(circles.h, circles.s, circles.b);
        ellipse(x, circles.y, circles.width, cHeight);
        x += circles.spacing;
        pop();
    }
    for (let cHeight = circles.height; cHeight <= circles.maxHeight; cHeight += circles.spacing) {
        push();
        noFill();
        strokeWeight(circles.thickness);
        stroke(circles.h, circles.s, circles.b);
        ellipse(x, circles.y, circles.width, cHeight);
        x += circles.spacing;
        pop();
    }
    for (let cHeight = circles.maxHeight; cHeight >= circles.minHeight; cHeight -= circles.spacing) {
        push();
        noFill();
        strokeWeight(circles.thickness);
        stroke(circles.h, circles.s, circles.b);
        ellipse(x, circles.y, circles.width, cHeight);
        x += circles.spacing;
        pop();
    }
}