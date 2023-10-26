/**
 * Age of Aquariums
 * Muriel Smith
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let school = [];
let schoolSize = 10;
let fishImages = [];

function preload() {
    // loads images for my fish and puts them in fishImages array
    fishImages[0] = loadImage(`assets/images/sea comb.png`);
    fishImages[1] = loadImage(`assets/images/sea-angel-facts.png`);
    fishImages[2] = loadImage(`assets/images/srimp.png`);

    // loads images for my user fish
    loadImage(`assets/images/anglerfish-lighton.png`);
    loadImage(`assets/images/anglerfish-lightoff.png`);
}

function setup() {
    createCanvas(1000,1000);

    for (let i = 0; i < schoolSize; i++) {
        let fish = createFish(random(0, width), random(0,height));
        school.push(fish);
    }
}

function createFish(x, y) {
    let fish = {
        x: x,
        y: y,
        vx: 0,
        vy: 0,
        speed: 2
    };
    return fish;
}

function draw() {
    background(0);

    for (let i = 0; i < school.length; i++) {
        moveFish(school[i]);
        displayFish(school[i]);
    }
}

function moveFish(fish) {
    let change = random(0,1);
    if (change < 0.05) {
        fish.vx = random(-fish.speed, fish.speed);
        fish.vy = random(-fish.speed, fish.speed);
    }

    fish.x = fish.x + fish.vx;
    fish.y = fish.y + fish.vy;

    fish.x = constrain(fish.x, 0, width);
    fish.y = constrain(fish.y, 0, height);
}

function displayFish(fish) {
    push();
    let displayImage = random(fishImages);
    image(displayImage, fish.x, fish.y); 
    pop();
}

function mousePressed() {
    let fish = createFish(mouseX, mouseY);
    school.push(fish);
}