/**
 * Project 2 Prototype
 * Muriel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

// framerate
let fr = 12;

// background color properties
let bg = {
    h: 180,
    s: 50,
    b: 50
}

// frame properties
let frame = {
    h: 0,
    s: 50,
    b: 50,
    thickness: 200,
    minThickness: 50,
    width: 1000
}

// noise properties
let noise = {
    amount: 2000,
    hue: 180,
    saturation: 0,
    brightness: 100,
    pointSize: 2,
    area: 0.15
}

// // circle pattern properties
// let circles = {
//     thickness: 1,
//     h: 180,
//     s: 100,
//     b: 100,
//     x: 0,
//     y: 0,
//     size: 0,
//     minSize: 250,
//     maxSize: 1000,
//     spacing: 0,
//     amount: 1,
//     variation: 20
// }

function setup() {
    createCanvas(1000, 1000);
    colorMode(HSB);
    frameRate(fr);
}

function draw() {
    // draws background
    let backgroundColor = color(bg.h, bg.s, bg.b)
    background(backgroundColor);

    // draws frame
    noFill();
    rectMode(CENTER);
    let frameColor = color(frame.h, frame.s, frame.b);
    
    let interA = lerpColor(frameColor, backgroundColor, 0.1);
    let interB = lerpColor(frameColor, backgroundColor, 0.2);
    let interC = lerpColor(frameColor, backgroundColor, 0.3);
    let interD = lerpColor(frameColor, backgroundColor, 0.4);
    let interE = lerpColor(frameColor, backgroundColor, 0.5);
    let interF = lerpColor(frameColor, backgroundColor, 0.6);
    
    strokeWeight(lerp(frame.minThickness, frame.thickness, 0.6));
    stroke(interF);
    rect(width/2, height/2, frame.width);

    strokeWeight(lerp(frame.minThickness, frame.thickness, 0.5));
    stroke(interE);
    rect(width/2, height/2, frame.width);

    strokeWeight(lerp(frame.minThickness, frame.thickness, 0.4));
    stroke(interD);
    rect(width/2, height/2, frame.width);

    strokeWeight(lerp(frame.minThickness, frame.thickness, 0.3));
    stroke(interC);
    rect(width/2, height/2, frame.width);

    strokeWeight(lerp(frame.minThickness, frame.thickness, 0.2));
    stroke(interB);
    rect(width/2, height/2, frame.width);

    strokeWeight(lerp(frame.minThickness, frame.thickness, 0.1));
    stroke(interA);
    rect(width/2, height/2, frame.width);

    strokeWeight(frame.minThickness);
    stroke(frameColor);
    rect(width/2, height/2, frame.width);


    // // draws ellipse pattern
    // circles.size = lerp(circles.minSize, circles.maxSize, 0.5);
    // circles.spacing = circles.thickness*20;
    // for (let i = 0; i < circles.amount; i++) {
    //     push();
    //     noFill();
    //     circles.x = width/2;
    //     circles.y = height/2;
    //     circles.size = randomGaussian(circles.size, circles.size/circles.variation);
    //     circles.size = constrain(circles.size, circles.minSize, circles.maxSize);
    //     // // back-level of ellipse
    //     // strokeWeight(3*circles.thickness);
    //     // let hue = lerp(circles.h, bg.h, 0,75);
    //     // let saturation = lerp(circles.s, bg.s, 0,75);
    //     // let brightness = lerp(circles.b, bg.b, 0,75);
    //     // stroke(hue, saturation, brightness);
    //     // ellipse(circles.x, circles.y, circles.size);
    //     // normal ellipse
    //     strokeWeight(circles.thickness);
    //     stroke(circles.h, circles.s, circles.b);
    //     ellipse(circles.x, circles.y, circles.size);
    //     pop();
    // }

    // draws base-layer of noise
    for (let i = 0; i < noise.amount; i++) {
        let x = randomGaussian(width/2, 1.5*width*noise.area);
        let y = randomGaussian(height/2, 1.5*width*noise.area);
        let hue = lerp(noise.hue, bg.h, 0.75);
        let saturation = lerp(noise.saturation, bg.s, 0.75);
        let brightness = lerp(noise.brightness, bg.b, 0.75);
        stroke(hue, saturation, brightness);
        strokeWeight(noise.pointSize);
        point(x, y);
    }

    // draws mid-layer of noise
    for (let i = 0; i < noise.amount; i++) {
        let x = randomGaussian(width/2, 1.5*width*noise.area);
        let y = randomGaussian(height/2, 1.5*width*noise.area);
        let hue = lerp(noise.hue, bg.h, 0.5);
        let saturation = lerp(noise.saturation, bg.s, 0.5);
        let brightness = lerp(noise.brightness, bg.b, 0.5);
        stroke(hue, saturation, brightness);
        strokeWeight(noise.pointSize);
        point(x, y);
    }

    // draws noise
    for (let i = 0; i < noise.amount; i++) {
        let x = randomGaussian(width/2, width*noise.area);
        let y = randomGaussian(height/2, width*noise.area);
        stroke(noise.hue, noise.saturation, noise.brightness);
        strokeWeight(noise.pointSize);
        point(x, y);
    }
}