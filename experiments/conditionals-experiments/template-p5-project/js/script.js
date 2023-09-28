/**
 * Conditionals experiments
 * Muriel Smith
 * 
 * This is my coding experimentation
 * file while I learn about conditionals.
 */

"use strict";

let caterpillar = {
    x: 100,
    y: 250,
    segmentSize: 50
}


function setup() {
    createCanvas(500, 500);
}


function draw() {
    background(0);
    noStroke();
    fill(100,200,100);

    // let x = caterpillar.x;
    // let numSegments = 5;
    // let segmentsDrawn = 0;

    // while (segmentsDrawn < numSegments) {
    //     ellipse(x, caterpillar.y, caterpillar.segmentSize);
    //     x = x + 40;
    //     segmentsDrawn++;
    // }

    let x = caterpillar.x;
    let numSegments = 10;

    for (let segmentsDrawn = 0; segmentsDrawn < numSegments; segmentsDrawn++) {
        ellipse(x, caterpillar.y, caterpillar.segmentSize);
        x = x+ 40;
    }

}