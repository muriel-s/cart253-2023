/**
 * I like to move it (exercise)
 * Muriel
 * 
 * a pigeon walks across an endless sidewalk. days and nights pass, but he keeps putting one foot in front of the other.
 * move the cursor up and down to make the sun rise and set around him, or move the cursor left to right to see his weight shift from one leg to the other.
 */

"use strict";

let sky = {
    hue: 210,
    saturation: 75,
    brightness: 75,
    nightHue: 250,
    nightBrightness: 25,
    daytimeHue: 210,
    daytimeBrightness: 85
}

let sidewalk = {
    hue: 0,
    saturation: 0,
    brightness: 20,
    lowBrightness: 20,
    highBrightness: 50
}

let pigeonColor = {
    hue: 260,
    saturation: 5,
    brightness: 20,
    lowBrightness: 20,
    highBrightness: 75
}

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

let orange = {
    hue: 30,
    saturation: 90,
    brightness: 20
}

let foot1Position = pigeon.x-pigeon.width/4;
let foot2Position = pigeon.x+pigeon.width/4;
let legsSpeed = 2;

/**
 * Creates the canvas.
*/
function setup() {
    createCanvas(500,500);
    colorMode(HSB);
}


/**
 * Creates the sky, sidewalk, sun, and bird.
*/
function draw() {
    
    // draws sky
    sky.brightness = map(mouseY, height, 0, sky.nightBrightness, sky.daytimeHue, true);
    sky.hue = map(mouseY, height, 0, sky.nightHue, sky.daytimeHue, true);
    background(sky.hue, sky.saturation, sky.brightness);

    // draws sun
    sun.x += sun.speed;

    if (sun.x > width+50) {
        sun.x = -50;
    }

    sun.y = 0 + mouseY;
    sun.y = constrain(sun.y, -15, 375);
    sun.size = map(mouseY, -15, 375, 60, 45, true);
    sun.hue = map(mouseY, 0, 400, 50, 20, true);
    sun.brightness = map(mouseY, 0, 400, 85, 55, true);
    fill(sun.hue, 95, sun.brightness);
    noStroke();
    ellipse(sun.x, sun.y, sun.size);
    
    // draws sidewalk
    sidewalk.brightness = map(mouseY, height, 0, sidewalk.lowBrightness, sidewalk.highBrightness, true);
    fill(sidewalk.hue, sidewalk.saturation, sidewalk.brightness);
    rect(0, height/2 + height/4, width, height/4);

    // sets pigeon's size variations
    pigeon.width += mouseX;
    pigeon.width = map(mouseX, 0, width, 140, 145);
    pigeon.height += mouseX;
    pigeon.height = map(mouseX, 0, width, 124, 129);

    // draws pigeon's beak
    pigeonColor.brightness = map(mouseY, height, 0, pigeonColor.lowBrightness, pigeonColor.highBrightness, true);
    fill(orange.hue, orange.saturation, pigeonColor.brightness);
    triangle(pigeon.x-pigeon.width/1.75, pigeon.y-pigeon.height/2, pigeon.x-pigeon.width/1.75, pigeon.y-pigeon.height/2.75, pigeon.x-pigeon.width/1.125, pigeon.y-pigeon.height/2.45);
    
    // draws pigeon's body
    fill(pigeonColor.hue, pigeonColor.saturation, pigeonColor.brightness);
    ellipse(pigeon.x, pigeon.y, pigeon.width, pigeon.height);
    
    // draws pigeon's head
    ellipse(pigeon.x-pigeon.width/2, pigeon.y-pigeon.height/2, 65);
    
    // draws pigeon's eye
    fill(0);
    ellipse(pigeon.x-pigeon.width/1.75, pigeon.y-pigeon.height/2, 5);

    // each leg moves from start position to end, then immediately returns
    // with both legs identical, this gives the appearance of a walk cycle

    // sets movement for backwards-moving leg
    foot1Position += legsSpeed
    if (foot1Position > pigeon.x+pigeon.width/4) {
        foot1Position = pigeon.x-pigeon.width/4;
    }
    
    // sets movement for forwards-moving leg
    foot2Position -= legsSpeed
    if (foot2Position < pigeon.x-pigeon.width/4) {
        foot2Position = pigeon.x+pigeon.width/4;
    }
    
    // draws legs
    stroke(orange.hue, orange.saturation, pigeonColor.brightness);
    strokeWeight(5);
    line(legsAnchorPoint.x, legsAnchorPoint.y, foot1Position, 374); // leg 1
    line(legsAnchorPoint.x, legsAnchorPoint.y, foot2Position, 374); // leg 2

}