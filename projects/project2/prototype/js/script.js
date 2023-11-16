/**
 * Project 2 Prototype
 * Muriel
 * 
 * 
 */

"use strict";

var coolville;
var deco1;
var deco2;
var deco3;
var deco4;
var starImg;

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
