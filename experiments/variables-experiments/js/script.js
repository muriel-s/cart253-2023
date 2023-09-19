/**
 * Variables Experiments
 * Muriel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let backgroundShade = 0;

let circle = {
    x: 250,
    y: 250,
    size: 200,
    speed: 1.01
};

/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * Description of draw()
*/
function draw() {
    // background(backgroundShade);
    noFill();
    circle.size *= circle.speed;
    circle.y /= circle.speed;
    ellipse(circle.x, circle.y, circle.size*2);
    ellipse(circle.x, circle.y, circle.size*1.5);
    ellipse(circle.x, circle.y, circle.size);
    ellipse(circle.x, circle.y, circle.size/2);
}