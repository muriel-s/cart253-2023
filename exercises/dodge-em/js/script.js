/**
 * Dodge em
 * Muriel
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let covid19 = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 100,
};

let covid19Fill = {
    r: 255,
    g: 50,
    b: 50
};

let user = {
    x: 0,
    y: 0,
    size: 200,
    fill: 255,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    acceleration: 0
};

let staticAmount = 5000;



function preload() {

}



function setup() {
    createCanvas(windowWidth, windowHeight);

    covid19.y = random(0, height);
    covid19.vx = covid19.speed;
}



function draw() {
    background(0);

    // draws static
    for (let i = 0; i < staticAmount ; i++) {
        let x = random(0, width);
        let y = random(0, height);
        stroke(random(0,155), random(0,155), random(0,155));
        strokeWeight(3);
        point(x, y);
    }

    user.x = mouseX;
    user.y = mouseY;

    // sets covid19 movement to right
    covid19.x = covid19.x + covid19.vx;

    // resets covid19 to left
    if (covid19.x > width) {
        covid19.x = 0;
        covid19.y = random(0, height);
    };

    // draws covid19
    fill(covid19Fill.r, covid19Fill.g, covid19Fill.b);
    noStroke();
    ellipse(covid19.x, covid19.y, covid19.size);

    // draws user
    fill(user.fill);
    ellipse(user.x, user.y, user.size);

    // stops the loop when user & covid19 touch
    let d = dist(user.x, user.y, covid19.x, covid19.y);
    if (d < covid19.size/2 + user.size/2) {
        noLoop();
    };
}