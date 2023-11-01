/**
 * OOP experiments
 * Muriel Smith
 * 
 * Learning about Object-Oriented Programming
 */

"use strict";

let garden = {
    flowers: [],
    numFlowers: 50,
    grasscolor: {
        r: 120,
        g: 180,
        b: 120
    }
};

function setup() {
    createCanvas(600,600);

    for (let i = 0; i < garden.numFlowers; i++) {
        let size = random(25, 75);
        let stemLength = random(50, 100);
        let petalColor = {
            r: random(100,255),
            g: random(100,255),
            b: random(100,255)
        };
        let flower = new Flower(size, stemLength, petalColor);
        garden.flowers.push(flower);
    }

    garden.flowers.sort(sortByY);
}

function sortByY(flower1, flower2) {
    return flower1.y - flower2.y;
}

function draw() {
    background(garden.grasscolor.r, garden.grasscolor.g, garden.grasscolor.b);

    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        if (flower.alive) {
            flower.shrink();
            flower.display();
        }
    }
}

// function mousePressed() {
//     for (let i = 0; i < garden.flowers.length; i++) {
//         let flower = garden.flowers[i];
//         flower.mousePressed();
//     }
// }