/**
 * Age of Aquariums
 * Muriel Smith
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let fishImages = [];
let school = [];
let schoolNumber = 20;
let displayImage;

let seaComb;
let seaAngel;
let shrimp;

let user = {
    image: undefined,
    x: 500,
    y: 500,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    maxSpeed: 3,
    acceleration: 0.5,
    lightOn: false
}
let anglerfishLightOff;
let anglerfishLightOn;
let anglerfishLightOffLeft;
let anglerfishLightOnLeft;

function preload() {
    // loads images for my fish in default state and puts them in fishImages array
    fishImages[0] = loadImage(`assets/images/sea comb dark.png`);
    fishImages[1] = loadImage(`assets/images/sea-angel dark.png`);
    fishImages[2] = loadImage(`assets/images/srimp dark.png`);

    // loads images for my fish when they're lit up
    seaComb = loadImage(`assets/images/sea comb.png`);
    seaAngel = loadImage(`assets/images/sea-angel-facts.png`);
    shrimp = loadImage(`assets/images/srimp.png`);

    // loads images for my user fish
    anglerfishLightOn = loadImage(`assets/images/anglerfish-lighton.png`);
    anglerfishLightOff = loadImage(`assets/images/anglerfish-lightoff.png`);
    anglerfishLightOnLeft = loadImage(`assets/images/anglerfish-lighton L.png`);
    anglerfishLightOffLeft = loadImage(`assets/images/anglerfish-lightoff L.png`);
}

function setup() {
    createCanvas(1000,1000);

    // creates the fish elements
    for (let i = 0; i < schoolNumber; i++) {
        let fish = createFish(random(0, width), random(0,height));
        school.push(fish);
    }
}

function createFish(x, y) {
    let fish = {
        image: random(fishImages),
        x: x,
        y: y,
        vx: 0,
        vy: 0,
        speed: 0,
        tx: 0,
        ty: 0,
    };
    return fish;
}

function draw() {
    background(0);

    // displays and moves the fish elements
    for (let i = 0; i < school.length; i++) {
        moveFish(school[i]);
        displayFish(school[i]);
    };
    displayUser();
    moveUser();
}

function displayUser() {
    // makes the anglerfish light up when mouse is pressed
    // and makes the anglerfish face left when moving left
    if (mouseIsPressed === true && mouseX > user.x) {
        user.image = anglerfishLightOn;
        user.lightOn = true;
    } else if (mouseIsPressed === false && mouseX > user.x) {
        user.image = anglerfishLightOff;
    } else if (mouseIsPressed === true && mouseX < user.x) {
        user.image = anglerfishLightOnLeft;
        user.lightOn = true;
    } else if (mouseIsPressed === false && mouseX < user.x) {
        user.image = anglerfishLightOffLeft;
    }
    push();
    imageMode(CENTER);
    image(user.image, user.x, user.y);
    pop();
}

function moveUser() {
    user.vx += user.ax;
    user.vx = constrain(user.vx, -user.maxSpeed, user.maxSpeed);
    user.x += user.vx;
    if (user.x < mouseX) {
        user.ax = user.acceleration;
    } else if (user.x > mouseX) {
        user.ax = -user.acceleration;
    };
    user.vy += user.ay;
    user.vy = constrain(user.vy, -user.maxSpeed, user.maxSpeed);
    user.y += user.vy;
    if (user.y < mouseY) {
        user.ay = user.acceleration;
    } else if (user.y > mouseY) {
        user.ay = -user.acceleration
    };

    user.x = constrain(user.x, 0, width);
    user.y = constrain(user.y, 0, height);
}

function moveFish(fish) {
    // makes the fish change directions at random
    let change = random(0,1);

    if (fish.image === fishImages[0] || fish.image === seaComb) {
        // makes sea combs slow + change directions rarely & keeps them higher up
        fish.speed = 1;
        fish.y = constrain(fish.y, 0, 2*height/3);
        if (change < 0.02) {
            fish.vx = random(-fish.speed, fish.speed);
            fish.vy = random(-fish.speed, fish.speed);
        }
    } else if (fish.image === fishImages[1] || fish.image === seaAngel) {
        // keeps sea angels off the ocean floor
        fish.speed = 2;
        fish.y = constrain(fish.y, 0, 3*height/4);
        if (change < 0.05) {
            fish.vx = random(-fish.speed, fish.speed);
            fish.vy = random(-fish.speed, fish.speed);
        }
    } else if (fish.image === fishImages[2] || fish.image === shrimp) {
        // makes shrimp fast + change directions often, & keeps them on ocean floor
        fish.speed = 5;
        fish.y = constrain(fish.y, 3*height/4, height);
        if (change < 0.1) {
            fish.vx = random(-fish.speed, fish.speed);
            fish.vy = random(-fish.speed, fish.speed);
        }
    }
    // sets fish in movement
    fish.x = fish.x + fish.vx;
    fish.y = fish.y + fish.vy;
    // constrains fish to width of aquarium
    fish.x = constrain(fish.x, 0, width);
}

function displayFish(fish) {
    // makes my fish light up when mouse is pressed
    push();
    if (mouseIsPressed) {
        if (fish.image === fishImages[0]) {
            fish.image = seaComb;
        } else if (fish.image === fishImages[1]) {
            fish.image = seaAngel;
        } else if (fish.image === fishImages[2]) {
            fish.image = shrimp;
        }
    } else {
        if (fish.image === seaComb) {
            fish.image = fishImages[0];
        } else if (fish.image === seaAngel) {
            fish.image = fishImages[1];
        } else if (fish.image === shrimp) {
            fish.image = fishImages[2];
        }
    }
    imageMode(CENTER);
    image(fish.image, fish.x, fish.y); 
    pop();
}


// creates a new fish to eat when mouse is pressed!!!
function mousePressed() {
    let fish = createFish(random(0, width), random(0, height));
    school.push(fish);
}