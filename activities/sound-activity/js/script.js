/**
 * Sound Activity
 * Muriel
 */

"use strict";

let balls = [];
let notes = [`G3`, `A3`, `B3`, `C4`, `D4`, `E4`, `F4`];

function setup() {
    createCanvas(600,600);
    userStartAudio();
}

function draw() {
    background(0);

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        ball.move();
        ball.bounce();
        ball.display();
    } 
}

function mousePressed() {
    createBall(mouseX, mouseY);
}

function createBall(x, y) {
    let note = random(notes);
    let ball = new Ball(x, y, note);
    balls.push(ball);
}