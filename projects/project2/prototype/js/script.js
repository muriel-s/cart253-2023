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

// noise properties
let noise = {
    amount: 2000,
    hue: 180,
    saturation: 0,
    brightness: 100,
    pointSize: 2,
    area: 0.15
}

// circle pattern properties
let circles = {
    thickness: 1,
    h: 180,
    s: 100,
    b: 100,
    x: 0,
    y: 0,
    size: 0,
    minSize: 250,
    maxSize: 1000,
    spacing: 0,
    amount: 1,
    variation: 20
}

// // line pattern properties
// let lines = {
//     thickness: 2,
//     h: 180,
//     s: 100,
//     b: 100,
//     x: 0,
//     y: 0,
//     height: 0,
//     minHeight: 500,
//     maxHeight: 1000,
//     spacing: 0,
//     variation: 10
// }

function setup() {
    createCanvas(1000, 1000);
    colorMode(HSB);
    frameRate(fr);
}

function draw() {
    // draws background
    background(bg.h, bg.s, bg.b);

    // // draws medium ellipse pattern
    // circles.size = lerp(circles.minSize, circles.maxSize, 0.5);
    // circles.spacing = circles.thickness*20;
    // for (let i = 0; i < circles.amount; i++) {
    //     push();
    //     noFill();
    //     strokeWeight(2*circles.thickness);
    //     let hue = lerp(circles.h, bg.h, 0,5);
    //     let saturation = lerp(circles.s, bg.s, 0,5);
    //     let brightness = lerp(circles.b, bg.b, 0,5);
    //     stroke(hue, saturation, brightness);
    //     circles.x = width/2;
    //     circles.y = height/2;
    //     circles.size = randomGaussian(circles.size, circles.size/circles.variation);
    //     circles.size = constrain(circles.size, circles.minSize, circles.maxSize);
    //     ellipse(circles.x, circles.y, circles.size);
    //     pop();
    // }

    // draws ellipse pattern
    circles.size = lerp(circles.minSize, circles.maxSize, 0.5);
    circles.spacing = circles.thickness*20;
    for (let i = 0; i < circles.amount; i++) {
        push();
        noFill();
        circles.x = width/2;
        circles.y = height/2;
        circles.size = randomGaussian(circles.size, circles.size/circles.variation);
        circles.size = constrain(circles.size, circles.minSize, circles.maxSize);
        strokeWeight(3*circles.thickness);
        let hue = lerp(circles.h, bg.h, 0,75);
        let saturation = lerp(circles.s, bg.s, 0,75);
        let brightness = lerp(circles.b, bg.b, 0,75);
        stroke(hue, saturation, brightness);
        ellipse(circles.x, circles.y, circles.size);
        strokeWeight(circles.thickness);
        stroke(circles.h, circles.s, circles.b);
        ellipse(circles.x, circles.y, circles.size);
        pop();
    }

    // // draws lines
    // lines.height = lerp(lines.minHeight, lines.maxHeight, 0.5); 
    // lines.spacing = lines.thickness*2;
    // for (lines.x = 0; lines.x <= width; lines.x += lines.spacing) {
    //     push();
    //     noFill();
    //     strokeCap(ROUND);
    //     strokeWeight(lines.thickness);
    //     stroke(lines.h, lines.s, lines.b);
    //     lines.y = constrain(lines.y, lines.minHeight, lines.maxHeight);
    //     line(lines.x, height, lines.x, lines.y);
    //     lines.y = randomGaussian(lines.height, lines.height/lines.variation);
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