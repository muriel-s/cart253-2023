/**
 * Arrays Experiments
 * Muriel Smith
 * 
 * ways that youtube's automated captions have interpreted Pippin saying "arrays":
 * 1. a raise
 * 2. erase
 * 3. arrays
 * 4. the raise
 * 5. 
 * 
 * ways that youtubes captions have interpreted Pippin saying "barks":
 * 1. bachs
 * 2. bikes
 * 3. backs
 */

"use strict";

let circle = {
    x: 0,
    y: 0,
    size: 100,
    trail: [],
    trailSize: 20
};

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);

    circle.x = mouseX;
    circle.y = mouseY;

    for (let i = 0; i < circle.trail.length; i++) {
        let position = circle.trail[i];
        ellipse(position.x, position.y, circle.size);
    }

    ellipse(circle.x, circle.y, circle.size);

    let newTrailPosition = {
        x: circle.x,
        y: circle.y
    };
    circle.trail.push(newTrailPosition);

    if (circle.trail.length > circle.trailSize) {
        circle.trail.shift();
    }
}