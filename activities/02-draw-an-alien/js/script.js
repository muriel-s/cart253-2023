/**
 * Alien Drawing
 * Muriel Smith
 * 
 * Muriel's drawing of an alien.
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
    // draws background
    createCanvas(640,480);
    background ("#d9b2bb");

    // draws the body of the alien
    rectMode(CENTER)
    noStroke();
    fill(245);
    rect(320,240,200,150,80,80,80,80);

    //draws the head of the alien
    ellipse(195,150,90,90);

    //draws the neck of the alien
    beginShape();
    vertex(238,137); //first anchor point
    bezierVertex(245,150,270,165,290,166);
    vertex(222,250);
    bezierVertex(220,230,210,195,185,193);
    endShape(CLOSE);

}


/**
 * Description of draw()
*/
function draw() {

}