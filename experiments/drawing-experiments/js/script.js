/**
 * Drawing Experiments
 * Muriel Smith
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500);
    background(200,200,200);
    
    ellipseMode(CENTER);
    stroke('#0000ff');
    strokeWeight(3);
    fill(152, 251, 152);
    ellipse(250,250,100,100);

    stroke('#0000ff');
    strokeWeight(5);
    point(230,240);
    point(270,240);
    strokeWeight(3);
    fill('#e53935');
    arc(250, 260, 50, 40, 0, PI, CHORD);
    
    ellipseMode(CENTER);
    stroke('#0000ff');
    strokeWeight(3);
    fill(152, 251, 152);
    ellipse(400,300,100,100);
    stroke('#ffffff');
    strokeWeight(20);
    point(385,290);
    point(415,290);
    stroke('#0000ff');
    strokeWeight(5);
    point(385,290);
    point(415,290);
    strokeWeight(3);
    fill('#e53935');
    arc(400, 330, 40, 40, PI, 0, CHORD)

    stroke('#000000');
    fill(255,205,0);
    beginShape();
    vertex(128,90);
    vertex(140,140);
    vertex(175,135);
    vertex(150,165);
    vertex(170,210);
    vertex(130,175);
    vertex(95,220);
    vertex(110,165);
    vertex(75,140);
    vertex(115,140);
    endShape(CLOSE);

}


/**
 * Description of draw()
*/
function draw() {

}