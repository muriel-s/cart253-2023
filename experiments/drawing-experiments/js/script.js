/**
 * Drawing Experiments
 * Muriel Smith
 * 
 * little drawings to try out shapes and colors.
 * week 2 exercise.
 */

"use strict";

/**
 * draws two faces and a star
*/
function setup() {
    // creates canvas
    createCanvas(500,500);
    background(200);
 
    // draws a smiling face
    angleMode(DEGREES);
    stroke('#0000ff');
    strokeWeight(3);
    fill(152, 251, 152);
    ellipse(250,250,100,100);
    stroke('#0000ff');
    strokeWeight(8); // eyes
    point(230,240);
    point(270,240);
    noStroke();
    fill('#e53935');
    arc(250, 260, 50, 50, 350, 170, CHORD); // mouth
    
    // draws a surprised face
    angleMode(RADIANS);
    stroke('#0000ff');
    strokeWeight(3);
    fill(152, 251, 152);
    ellipse(400,300,100,100);
    stroke('#ffffff'); // white of eyes
    strokeWeight(20);
    point(385,290);
    point(415,290);
    stroke('#0000ff'); // pupils
    strokeWeight(5);
    point(385,290);
    point(415,290);
    noStroke();
    fill('#e53935');
    arc(400, 325, 40, 30, PI, 0, CHORD); // mouth

    // draws a star
    stroke('#000000');
    strokeWeight(2);
    fill(255,205,0);
    beginShape();
    vertex(128,90); // point 1
    vertex(140,140);
    vertex(175,135); // point 2
    vertex(150,165);
    vertex(170,210); // point 3
    vertex(130,175);
    vertex(95,220); // point 4
    vertex(110,165);
    vertex(75,140); // point 5
    vertex(115,140);
    endShape(CLOSE);

}


/**
 * Description of draw()
*/
function draw() {

}