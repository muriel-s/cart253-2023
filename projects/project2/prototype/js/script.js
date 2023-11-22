/**
 * Project 2 Prototype
 * Muriel
 * 
 * 
 */

"use strict";

var coolville;
var starImg;

let currentState;

let QuizQuestions = [
    [`Do you jaywalk?`, `Only if the street is quiet.`, `It's like a game to me!`, `Never!`],
    [`How long does it take you to fall asleep?`, `I fall asleep when I decide to.`, `... Ten minutes?`, `It's a multi-hour process.`],
    [`What is your studying style?`, `I prefer to study in a group!`, `I like to study a little bit every day.`, `Usually at the last minute, in a rush...`],
    [`You're in the bathroom at a club and someone is crying with their friend about their recent breakup. What do you do?`, `Give them privacy.`, `Say something nice then leave.`, `Get into a deep conversation that ends with you complimenting each other before going back out to never meet again.`]
];

function preload() {
    // load font
    coolville = loadFont('assets/fonts/Coolville.ttf');
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
