class Quiz {
    constructor() {

    }

    draw() {
        background(0);
        this.quizBackground();
        this.quizText();
        this.cursorStar();
    }

    quizBackground() {
        // draws noise ...
        for (let i = 0; i < 200; i++) {
            let randomColor = color(random(0, 360), random(0, 100), random(0, 100));
            stroke(randomColor);
            strokeWeight(3);
            // ... in top left corner
            let x = randomGaussian(0, width*0.15);
            let y = randomGaussian(0, width*0.15);
            point(x, y);
            // ... in bottom left corner
            x = randomGaussian(0, width*0.1);
            y = randomGaussian(height, width*0.15);
            point(x, y);
            // ... in top right corner
            x = randomGaussian(width, width*0.15);
            y = randomGaussian(0, width*0.1);
            point(x, y);
            // ... and in bottom right corner
            x = randomGaussian(width, width*0.15);
            y = randomGaussian(height, width*0.15);
            point(x, y);
        };
        // places star decorations
        push();
        tint(50, 40, 100, 50);
        imageMode(CENTER);
        image(deco1, 100, 200);
        image(deco2, 800, 700);
        image(deco3, 900, 300);
        image(deco4, 300, 900);
        pop();
    
        // draws starlight trail following mouse
        for (let i = 0; i < 10; i++) {
            stroke(60, 80, 100);
            strokeWeight(2);
            let x = random(mouseX, pmouseX);
            let y = random(mouseY + 5, pmouseY + 5);
            point(x, y);
        }
    }

    quizText() {
        push();
        noStroke();
        textFont('Pixelify Sans');
        rectMode(CORNER);
        textAlign(LEFT, BOTTOM);
        fill(100);
        textSize(32);
        text(`Question question question question?`, width/5, height/3, 2*width/3);
        text(`Answer!`, width/5, 500, 3*width/4);
        text(`Answer...`, width/5, 600, 3*width/4);
        text(`Answer answer.`, width/5, 700, 3*width/4);
    }

    cursorStar() {
        imageMode(CENTER);
        image(starImg, mouseX, mouseY);
    }
}