/**
 * Functions experiments
 * Muriel
 * 
 * This is my basic HSB colorpicker made while watching the Functions lectures.
 */

"use strict";

let bg = {
    hue: 0,
    saturation: 50,
    brightness: 50,
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    colorMode(HSB);
}


function draw() {
    background(bg.hue, bg.saturation, bg.brightness);

    displayHSBvalues();
    displayInstructions();
}

function displayHSBvalues() {
    fill(255);
    textFont('Roboto Mono');
    textStyle('Regular 400');
    textSize(32);
    textAlign(CENTER,CENTER);
    text(`H: ${bg.hue}  S: ${bg.saturation}  B: ${bg.brightness}\n`, width/2, height/2);
}

function displayInstructions() {
    textStyle('Thin 100');
    textSize(16);
    textAlign(LEFT,TOP);
    text(`directions:\na + z keys change hue ("H")\ns + x keys change saturation ("S")\nd + c keys change brightness ("B")`, 50, 50); 
}


function keyPressed() {
    if (key === `a`) {
        changeHue(10);
    }
    else if (key === `z`) {
        changeHue(-10);
    }
    else if (key === `s`) {
        changeSaturation(5);
    }
    else if (key === `x`) {
        changeSaturation(-5);
    }
    else if (key === `d`) {
        changeBrightness(5);
    }
    else if (key === `c`) {
        changeBrightness(-5);
    }
}

function changeHue(increment) {
    bg.hue = bg.hue + increment;
    bg.hue = constrain(bg.hue, 0, 360);
}

function changeSaturation(increment) {
    bg.saturation = bg.saturation + increment;
    bg.saturation = constrain(bg.saturation, 0, 100);
}

function changeBrightness(increment) {
    bg.brightness = bg.brightness + increment;
    bg.brightness = constrain(bg.brightness, 0, 100);
}