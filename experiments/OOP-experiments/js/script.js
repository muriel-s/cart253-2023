/**
 * OOP experiments
 * Muriel Smith
 * 
 * Learning about Object-Oriented Programming
 */

"use strict";

let garden = {
    flowers: [],
    bees: [],
    numFlowers: 50,
    numBees: 10,
    grasscolor: {
        r: 120,
        g: 180,
        b: 120
    }
};

function setup() {
    createCanvas(600,600);

    // creates flowers
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

    // sort flower array by Y so that flowers higher up (further) are behind flowers in front
    garden.flowers.sort(sortByY);

    // creates bees
    for (let i = 0; i < garden.numBees; i++) {
        let bee = new Bee(random(0, width), random(0, height));
        garden.bees.push(bee);
    }
}

function sortByY(flower1, flower2) {
    return flower1.y - flower2.y;
}

function draw() {
    background(garden.grasscolor.r, garden.grasscolor.g, garden.grasscolor.b);

    // displays flowers, shrinks them over time
    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        if (flower.alive) {
            flower.shrink();
            flower.display();
        }
    }

    // displays bees that are alive, lets them move and shrink over time
    for (let i = 0; i < garden.bees.length; i++) {
        let bee = garden.bees[i];
        if (bee.alive) {
            bee.shrink();
            bee.move();
            
            for (let j = 0; j < garden.flowers.length; j++) {
                let flower = garden.flowers[j];
                if (flower.alive) {
                    bee.tryToPollinate(flower);
                }
            }

            bee.display();
        }
    }
}

// function mousePressed() {
//     for (let i = 0; i < garden.flowers.length; i++) {
//         let flower = garden.flowers[i];
//         flower.mousePressed();
//     }
// }