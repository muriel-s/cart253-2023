/**
 * Project 2 Prototype
 * Muriel
 * 
 * 
 */

"use strict";

let coolville;
let deco1;
let deco2;
let deco3;
let deco4;
let starImg;

let currentState; 

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
    frameRate(12);
    noCursor();

    currentState = new Title();
}

function draw() {
    currentState.draw();
}

function mousePressed() {
    currentState.mousePressed();
}
