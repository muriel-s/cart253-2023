/**
 * Juggling Activity
 * Muriel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let paddle;

let gravityForce = 0.005;

let balls = [];
let numBalls = 3;

function setup() {
    createCanvas(800,800);

    // creates paddle
    paddle = new Paddle(200, 20);

    // creates balls
    for (let i = 0; i < numBalls; i++) {
        let ball = new Ball(random(0,width), random(0,height));
        balls.push(ball);
    }
}

function draw() {
    background(0);

    paddle.move();
    paddle.display();

    // displays balls if they are active
    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        if (ball.active) {
            ball.gravity(gravityForce);
            ball.move();
            ball.bounce(paddle);
            ball.display();
        }
    }

}