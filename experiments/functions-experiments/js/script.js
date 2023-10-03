/**
 * Functions experiments
 * Muriel
 * 
 * 
 */

"use strict";

let circle = {
    x: 0,
    y: 250,
    size: 100,
    vx: 5,
    vy: 0,
    hue: 1,
}

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500);
    colorMode(HSB);
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    move();
    wrap();
    display();
}


function move() {
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
}


function wrap() {
    if (circle.x > width) {
        reset();
    }
}


function display() {
    fill(circle.hue, 80, 80);
    ellipse(circle.x, circle.y, circle.size);
}


function reset() {
    circle.x = 0;
    circle.hue ++;
    circle.vx = circle.vx + 1;
    circle.size = circle.size ++;
}


function mousePressed() {
    reset();
}