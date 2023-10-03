/**
 * Functions experiments
 * Muriel
 * 
 * 
 */

"use strict";


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
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    // parallels(300, 50, 20, 1, 50, 10);
    // parallels(200, 150, 4, 2, 100, 20);
    // parallels(100, 250, 10, 3, 20, 30);
    parallels(random(100, 300),random(50, 250), random(4, 20), random(1,3), random(20, 100), random(10, 30));
}


function parallels(x, y, numLines, lineWidth, lineHeight, lineSpacing) {
    for (let i = 0; i < numLines; i++) {
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(x, y, lineWidth, lineHeight);
        x = x + lineSpacing; 
    }
}