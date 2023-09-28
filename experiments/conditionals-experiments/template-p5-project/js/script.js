/**
 * Conditionals experiments
 * Muriel Smith
 * 
 * This is my sandbox
 * file while I learn about conditionals.
 */

"use strict";


function setup() {
    createCanvas(500,500);
}


function draw() {
    background(0);

    push();
    fill(255,50,50);
    stroke(80,255,255);
    strokeWeight(10);
    rect(100,100, 100,100);
    pop();

    push(); 
    fill(50,50,255);
    rect(300,100, 100,100);
    pop();
}
