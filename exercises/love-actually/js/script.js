/**
 * Love, Actually
 * Muriel Smith
 * 
 * A game to help us choose which movie we're watching next.
 */

"use strict";

let user = {
    x: 0,
    y: 0,
    size: 50
}
let partner1 = {
    x: 245,
    y: 100,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    string: `Jacob`,
    onscreen: true
};
let partner2 = {
    x: 355,
    y: 100,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    string: `Muriel`,
    onscreen: true
};
let genre1 = {
    x: 100,
    y: 245,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    string: `horror`,
    onscreen: true
};
let genre2 = {
    x: 100,
    y: 355,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    string: `comedy`,
    onscreen: true
};
let genre3 = {
    x: 500,
    y: 245,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    string: `drama`,
    onscreen: true
};
let genre4 = {
    x: 500,
    y: 355,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    string: `thriller`,
    onscreen: true
};
let genre5 = {
    x: 150,
    y: 150,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    string: `romance`,
    onscreen: true
};
let genre6 = {
    x: 150,
    y: 450,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    string: `sci fi`,
    onscreen: true
};
let genre7 = {
    x: 450,
    y: 150,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    string: `fantasy`,
    onscreen: true
};
let genre8 = {
    x: 450,
    y: 450,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    string: `nonfiction`,
    onscreen: true
};
let watched = {
    x: 245,
    y: 500,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    string: `already watched`,
    onscreen: true
};
let notWatched = {
    x: 355,
    y: 500,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    string: `not watched`,
    onscreen: true
};

let state = `title`;

let partner = undefined;
let genre = undefined;
let watchedOrNot = undefined;

let objectsOffscreen = 0;

/**
 * SETUP
 * 
 * draws canvas and sets circles moving in random directions.
 */
function setup() {
    createCanvas(600,600);

    directionCircles();
}

/**
 * DRAW
 * 
 * contains the actions for each state.
 */
function draw() {
    background(0);

    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `ending`) {
        ending();
    }
    else if (state === `special ending`) {
        // specialEnding();
    };
}

// contains title display & actions
function title() {
    textSize(32);
    fill(255);
    textAlign(CENTER, BOTTOM);
    text(`let's choose a movie!`, width/2, height/2);

    textSize(16);
    textAlign(CENTER, TOP);
    text(`\nclick to begin`, width/2, height/2);
}

// changes state from title to simulation
function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
}

// contains simulation actions
function simulation() {
    moveCircles();
    bounceCircles();
    deleteTouchedCircles();
    displayCircles();
    displayUser();
    endSimulation();
}

// writes the direction of objects
function directionObject(circle) {
    circle.vx = random(-circle.speed, circle.speed);
    circle.vy = random(-circle.speed, circle.speed);
}

// sets each circle's direction
function directionCircles() {
    directionObject(partner1);
    directionObject(partner2);
    directionObject(genre1);
    directionObject(genre2);
    directionObject(genre3);
    directionObject(genre4);
    directionObject(genre5);
    directionObject(genre6);
    directionObject(genre7);
    directionObject(genre8);
    directionObject(watched);
    directionObject(notWatched);
}

// writes the movement of objects
function moveObject(circle) {
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
}

// sets each circle in movement
function moveCircles() {
    moveObject(partner1);
    moveObject(partner2);
    moveObject(genre1);
    moveObject(genre2);
    moveObject(genre3);
    moveObject(genre4);
    moveObject(genre5);
    moveObject(genre6);
    moveObject(genre7);
    moveObject(genre8);
    moveObject(watched);
    moveObject(notWatched);
}

// tells objects to bounce off edges of canvas
function bounceObject(circle) {
    if (circle.x < 0 || circle.x > width) {
        circle.vx = -circle.vx
    };
    if (circle.y < 0 || circle.y > height) {
        circle.vy = -circle.vy
    };
}

// sets each circle to bounce off canvas
function bounceCircles() {
    bounceObject(partner1);
    bounceObject(partner2);
    bounceObject(genre1);
    bounceObject(genre2);
    bounceObject(genre3);
    bounceObject(genre4);
    bounceObject(genre5);
    bounceObject(genre6);
    bounceObject(genre7);
    bounceObject(genre8);
    bounceObject(watched);
    bounceObject(notWatched);
}

// draws the object circles
function displayCircles() {
    noStroke();
    fill(80, 80, 255); 
    ellipse(partner1.x, partner1.y, partner1.size);
    ellipse(partner2.x, partner2.y, partner2.size);

    fill(255, 80, 80);
    ellipse(genre1.x, genre1.y, genre1.size);
    ellipse(genre2.x, genre2.y, genre2.size);
    ellipse(genre3.x, genre3.y, genre3.size);
    ellipse(genre4.x, genre4.y, genre4.size);
    ellipse(genre5.x, genre5.y, genre5.size);
    ellipse(genre6.x, genre6.y, genre6.size);
    ellipse(genre7.x, genre7.y, genre7.size);
    ellipse(genre8.x, genre8.y, genre8.size);

    fill(80, 255, 80);
    ellipse(watched.x, watched.y, watched.size);
    ellipse(notWatched.x, notWatched.y, notWatched.size);
}

// draws the user circle
function displayUser() {
    user.x = mouseX
    user.y = mouseY
    
    fill(255);
    ellipse(user.x, user.y, user.size);
}

// checks if an object is within canvas borders
function isOnscreen(circle) {
    let result = (circle.x > 0 && circle.x < width && circle.y > 0 && circle.y < height);
    return result;
}

// checks if an object is outside canvas borders
function isOffscreen(circle) {
    let result = (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height);
    return result;
}

// moves objects offscreen if they come in contact with the user,
// EXCEPT if they are the last of their group
function checkOverlap(circle, other, other2=0, other3=0, other4=0, other5=0, other6=0, other7=0) {
    let d = dist(circle.x, circle.y, user.x, user.y);
    if (d < circle.size/2 + user.size/2 && (isOnscreen(other) || isOnscreen(other2) || isOnscreen(other3) || isOnscreen(other4) || isOnscreen(other5) || isOnscreen(other6) || isOnscreen(other7))) {
        circle.x = 700;
        circle.y = 700;
        circle.onscreen = false;
        objectsOffscreen++;
        console.log(objectsOffscreen)
    }
}

// sets the circles to move offscreen if they come in contact with user
function deleteTouchedCircles() {
    checkOverlap(partner1, partner2);
    checkOverlap(partner2, partner1);
    checkOverlap(genre1, genre2, genre3, genre4, genre5, genre6, genre7, genre8);
    checkOverlap(genre2, genre1, genre3, genre4, genre5, genre6, genre7, genre8);
    checkOverlap(genre3, genre1, genre2, genre4, genre5, genre6, genre7, genre8);
    checkOverlap(genre4, genre1, genre2, genre3, genre5, genre6, genre7, genre8);
    checkOverlap(genre5, genre1, genre2, genre3, genre4, genre6, genre7, genre8);
    checkOverlap(genre6, genre1, genre2, genre3, genre4, genre5, genre7, genre8);
    checkOverlap(genre7, genre1, genre2, genre3, genre4, genre5, genre6, genre8);
    checkOverlap(genre8, genre1, genre2, genre3, genre4, genre5, genre6, genre7);
    checkOverlap(watched, notWatched);
    checkOverlap(notWatched, watched);
}

// checks if 9 out of the 12 objects are offscreen, sends state to ending
function endSimulation() {
    if (objectsOffscreen === 9) {
        state = `ending`;
    }
}

// contains ending actions
function ending() {
    checkWinners();
    resultText();
}

// checks which object from each group is left on screen at the end
function checkWinners() {
    if (partner1.onscreen) {
        partner = `Jacob`;
    } 
    else if (partner2.onscreen) {
        partner = `Muriel`;
    }

    if (genre1.onscreen) {
        genre = `horror`
    }
    else if (genre2.onscreen) {
        genre = `comedy`;
    }
    else if (genre3.onscreen) {
        genre = `drama`;
    }
    else if (genre4.onscreen) {
        genre = `thriller`;
    }
    else if (genre5.onscreen) {
        genre = `romance`;
    }
    else if (genre6.onscreen) {
        genre = `sci fi`;
    }
    else if (genre7.onscreen) {
        genre = `fantasy`;
    }
    else if (genre8.onscreen) {
        genre = `nonfiction`;
    }

    if (watched.onscreen) {
        watchedOrNot = `already watched`;
    } 
    else if (notWatched.onscreen) {
        watchedOrNot = `not watched yet`;
    }
}

// displays the result of the text in `ending`
function resultText() {
    textSize(16);
    fill(255);
    textAlign(LEFT, BOTTOM);
    text(`${partner} gets to choose \na ${genre} movie \nthat they have ${watchedOrNot}!`, width/3, height/2);
}
