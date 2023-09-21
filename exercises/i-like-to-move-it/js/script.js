/**
 * I like to move it (exercise)
 * Muriel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let backgroundHue;
let backgroundBrightness;
let sidewalkBrightness;
let pigeonBrightness;

let nightSky = 25;
let daytimeSky = 85;

let legsAnchorPoint = {
    x: 250,
    y: 312
};

let pigeon = {
    x: 250,
    y: 250,
    width: 140,
    height: 124
}; 

let leg1Position = pigeon.x-pigeon.width/4;
let leg2Position = pigeon.x+pigeon.width/4;


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
    // draws sky
    backgroundBrightness = map(mouseY, 0, height, nightSky, daytimeSky, true);
    backgroundHue = map(mouseY, 0, height, 250, 210, true);
    background(backgroundHue, 75, backgroundBrightness);
    
    // draws sidewalk
    noStroke();
    sidewalkBrightness = map(mouseY, 0, height, 20, 50, true);
    fill(0, 0, sidewalkBrightness);
    rect(0, height/2 + height/4, width, height/4);

    // draws pigeon
    pigeonBrightness = map(mouseY, 0, height, 25, 60, true);
    fill(30, 90, pigeonBrightness);
    triangle(pigeon.x-pigeon.width/1.75, pigeon.y-pigeon.height/2, pigeon.x-pigeon.width/1.75, pigeon.y-pigeon.height/2.75, pigeon.x-pigeon.width/1.125, pigeon.y-pigeon.height/2.45); // beak 

    fill(260, 5, pigeonBrightness);
    ellipse(pigeon.x, pigeon.y, pigeon.width, pigeon.height); // body
    ellipse(pigeon.x-pigeon.width/2, pigeon.y-pigeon.height/2, 65); // head
    
    fill(0);
    ellipse(pigeon.x-pigeon.width/1.75, pigeon.y-pigeon.height/2, 5); // eye
    
    // draws legs
    stroke(30, 90, pigeonBrightness);
    strokeWeight(5);
    leg1Position += 2
    if (leg1Position > pigeon.x+pigeon.width/4) {
        leg1Position = pigeon.x-pigeon.width/4;
    }
    leg2Position -= 2
    if (leg2Position < pigeon.x-pigeon.width/4) {
        leg2Position = pigeon.x+pigeon.width/4;
    }

    line(legsAnchorPoint.x, legsAnchorPoint.y, leg2Position, 374); // leg 2
    line(legsAnchorPoint.x, legsAnchorPoint.y, leg1Position, 374); // leg 1
}