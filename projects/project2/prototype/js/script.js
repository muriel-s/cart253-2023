/**
 * Project 2 Prototype
 * Muriel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let background = {
    h: 180,
    s: 50,
    b: 50
}

let noise = {
    amount: 1000,
    hue: 180,
    saturation: 100,
    brightness: 100,
    pointSize: 1,
}

function setup() {
    createCanvas(1000, 1000);
    colorMode(HSB);
}

function draw() {
    // draws background
    background(background.h, background.s, background.b);

    // draws noise
    for (let i = 0; i < noise.amount; i++) {
        let x = random(0, width);
        let y = random(0, height);
        stroke(noise.hue, noise.saturation, noise.brightness);
        strokeWeight(noise.pointSize);
        point(x, y);
    }
}