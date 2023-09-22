/**
 * I like to move it (exercise)
 * Muriel
 * 
 * a pigeon walks across an endless sidewalk. days and nights pass, but he keeps putting one foot in front of the other.
 * move the mouse up and down to make the sun rise and set around him, or move left to right to see his weight shift from one leg to the other.
 */

"use strict";

let sky = {
    hue: 210,
    brightness: 75,
    nightHue: 250,
    nightBrightness: 25,
    daytimeHue: 210,
    daytimeBrightness: 85
}

let sidewalkBrightness;
let pigeonBrightness;

let sun = {
    x: -50,
    y: 375,
    speed: 1,
    size: 45,
    hue: 20,
    brightness: 35
}

let legsAnchorPoint = {
    x: 250,
    y: 312
}; // by anchor point I mean the vertex that doesn't move

let pigeon = {
    x: 250,
    y: 250,
    width: 140,
    height: 124
}; 

let leg1Position = pigeon.x-pigeon.width/4;
let leg2Position = pigeon.x+pigeon.width/4;


/**
 * Creates the canvas.
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
    sky.brightness = map(mouseY, 0, height, sky.nightBrightness, sky.daytimeHue, true);
    sky.hue = map(mouseY, 0, height, sky.nightHue, sky.daytimeHue, true);
    background(sky.hue, 75, sky.brightness);

    // draws sun
    sun.x += sun.speed;
    if (sun.x > 550) {
        sun.x = -50;
    }
    sun.y = height - mouseY;
    sun.y = constrain(sun.y, -15, 375);
    sun.size = map(mouseY, -15, 375, 45, 60, true);
    sun.hue = map(mouseY, 0, 400, 20, 50, true);
    sun.brightness = map(mouseY, 0, 400, 55, 85, true);
    fill(sun.hue, 95, sun.brightness);
    noStroke();
    ellipse(sun.x, sun.y, sun.size);
    
    // draws sidewalk
    sidewalkBrightness = map(mouseY, 0, height, 20, 50, true);
    fill(0, 0, sidewalkBrightness);
    rect(0, height/2 + height/4, width, height/4);

    // sets pigeon's size variations
    pigeon.width += mouseX;
    pigeon.width = map(mouseX, 0, width, 140, 145);
    pigeon.height += mouseX;
    pigeon.height = map(mouseX, 0, width, 124, 129);

    // draws pigeon's beak
    pigeonBrightness = map(mouseY, 0, height, 25, 60, true);
    fill(30, 90, pigeonBrightness);
    triangle(pigeon.x-pigeon.width/1.75, pigeon.y-pigeon.height/2, pigeon.x-pigeon.width/1.75, pigeon.y-pigeon.height/2.75, pigeon.x-pigeon.width/1.125, pigeon.y-pigeon.height/2.45);
    // draws pigeon's body
    fill(260, 5, pigeonBrightness);
    ellipse(pigeon.x, pigeon.y, pigeon.width, pigeon.height);
    // draws pigeon's head
    ellipse(pigeon.x-pigeon.width/2, pigeon.y-pigeon.height/2, 65);
    // draws pigeon's eye
    fill(0);
    ellipse(pigeon.x-pigeon.width/1.75, pigeon.y-pigeon.height/2, 5);
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