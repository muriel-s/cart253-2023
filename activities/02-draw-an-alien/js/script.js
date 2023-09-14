/**
 * Alien Drawing
 * Muriel Smith
 * 
 * Muriel's drawing of an alien.
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    //draws background
    createCanvas(640,480);
    background ("#d9b2bb");
   
    //draws the tail of the alien
    noStroke();
    fill(220);
    beginShape();
    vertex(350,200); //first anchor point
    bezierVertex(355,80, 415,60, 430,110); //second anchor point
    bezierVertex(470,100, 480,120, 470,150); //third anchor point
    bezierVertex(490,150, 550,190, 420,240); //fourth anchor point
    endShape(CLOSE);
   
    //draws the back leg of the alien
    stroke("#eb8334");
    strokeWeight(7);
    line(320,310,350,380);
    line(350,380,320,410);
    line(320,410,290,410);
    line(320,410,295,420);
    line(320,410,307,425);

    //draws the front leg of the alien
    stroke("#eb8334");
    strokeWeight(7);
    line(370,305,420,370);
    line(420,370,390,420);
    line(390,420,355,415);
    line(390,420,360,430);
    line(390,420,377,435);

    //draws the body of the alien
    noStroke();
    circle(320,310,70);
    rectMode(CENTER);
    fill(245);
    rect(320,240,200,150,80,80,80,80);
    circle(390,200,100);
    circle(370,305,80);

    //draws the wing of the alien
    fill(220);
    beginShape();
    vertex(290,200);
    bezierVertex(500,100, 340,380, 280,270);
    bezierVertex(340,280, 340,190, 290,200);
    endShape();

    //draws the beak of the alien
    fill("#eb8334");
    triangle(152,150, 125,165, 156,170);

    //draws the crown thing
    fill(220);
    beginShape();
    vertex(180,110); //first anchor point
    bezierVertex(175,60, 215,60, 210,90); //second anchor point
    bezierVertex(225,75, 245,85, 235,105); //third anchor point
    bezierVertex(250,95, 280,110, 240,135); //fourth anchor point
    endShape(CLOSE);

    //draws the head of the alien
    noStroke();
    fill(245);
    ellipse(195,150,90,90);
    
    //draws the eye
    stroke(0);
    strokeWeight(10);
    point(180,145);

    //draws the neck of the alien
    noStroke();
    beginShape();
    vertex(238,137); //first anchor point
    bezierVertex(245,150,270,165,290,166);
    vertex(222,250);
    bezierVertex(220,230,210,195,185,193);
    endShape(CLOSE);


}


/**
 * Description of draw()
*/
function draw() {

}