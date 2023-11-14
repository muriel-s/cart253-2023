/**
 * Sound Experiments
 * Muriel
 * 
 * Sandbox (soundbox?) to help me follow along with lectures on p5.sound.
 */

"use strict";

let mic;
let ghost = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    image: undefined
};

function preload() {
    ghost.image = loadImage(`assets/images/clown.png`);
}

function setup() {
    createCanvas(600,600);
    userStartAudio();

    mic = new p5.AudioIn();
    mic.start();

    ghost.x = width/2;
    ghost.y = height/2;
}

function draw() {
    background(0);
    // widthRuler();
    // heightRuler();

    let micLevel = mic.getLevel();
    push();
    textSize(32);
    fill(255);
    textAlign(LEFT, CENTER);
    text(micLevel, 100, 100);
    pop();

    ghost.x = ghost.x + random(-1, 1);
    ghost.y = ghost.y + random(-1, 1);

    if (micLevel > 0.6) {
        ghost.vx = 10;
    }

    ghost.x = ghost.x + ghost.vx;
    ghost.y = ghost.y + ghost.vy;

    push();
    imageMode(CENTER);
    tint(255, 50);
    image(ghost.image, ghost.x, ghost.y);
    pop();

}

function mousePressed() {
    mic.stop();
}

function widthRuler() {
    // draws markers along X axis
    push();
    stroke(127);
    strokeWeight(1);
    // draws 1/8 width marker
    line(width/8, 285, width/8, 315);
    // draws 1/4 width marker
    line(width/4, 275, width/4, 325);
    // draws 3/8 width marker
    line(3*width/8, 285, 3*width/8, 315);
    // draws 1/2 width marker
    line(width/2, 275, width/2, 325);
    // draws 5/8 width marker
    line(5*width/8, 285, 5*width/8, 315);
    // draws 3/4 width marker
    line(3*width/4, 275, 3*width/4, 325);
    // draws 7/8 width marker
    line(7*width/8, 285, 7*width/8, 315);
    pop();  
}

function heightRuler() {
    push();
    stroke(127);
    strokeWeight(1);
    // draws 1/8 height marker
    line(285, height/8, 315, height/8);
    // draws 1/4 height marker
    line(275, height/4, 325, height/4);
    // draws 3/8 height marker
    line(285, 3*height/8, 315, 3*height/8);
    // draws 1/2 height marker
    line(275, height/2, 325, height/2);
    // draws 5/8 height marker
    line(285, 5*height/8, 315, 5*height/8);
    // draws 3/4 height marker
    line(275, 3*height/4, 325, 3*height/4);
    // draws 7/8 height marker
    line(285, 7*height/8, 315, 7*height/8);
    pop();
}