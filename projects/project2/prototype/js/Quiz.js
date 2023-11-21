class Quiz {
    constructor() {
        // text color properties
        this.questionColor = color(60, 58, 94);
        this.answerColor = 100;
        this.answerSelectColor = color(60, 58, 94);
        // text position properties
        this.questionHeight = height/4;
        this.answer1Height = 400;
        this.answer2Height = 525;
        this.answer3Height = 650;
        this.answer4Height = 775;
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
            let randomColor = color(random(0, 360), random(50, 100), random(50, 100));
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
        textSize(32);
        // question
        fill(this.questionColor);
        text(`Question question question question?`, width/5, this.questionHeight, 2*width/3);

        // answer 1
        if (mouseY > this.answer1Height - 25 && mouseY < this.answer1Height + 15) {
            fill(this.answerSelectColor);
        } else {
            fill(this.answerColor);
        }
        text(`Answer!`, width/5, this.answer1Height, 3*width/4);
        // answer 2
        if (mouseY > this.answer2Height - 25 && mouseY < this.answer2Height + 15) {
            fill(this.answerSelectColor);
        } else {
            fill(this.answerColor);
        }
        text(`Answer...`, width/5, this.answer2Height, 3*width/4);
        // answer 3
        if (mouseY > this.answer3Height - 25 && mouseY < this.answer3Height + 15) {
            fill(this.answerSelectColor);
        } else {
            fill(this.answerColor);
        }
        text(`Answer answer.`, width/5, this.answer3Height, 3*width/4);
        // answer 4
        if (mouseY > this.answer4Height - 25 && mouseY < this.answer4Height + 15) {
            fill(this.answerSelectColor);
        } else {
            fill(this.answerColor);
        }
        text(`Answer answer answer.`, width/5, this.answer4Height, 3*width/4);
        pop();
    }

    cursorStar() {
        imageMode(CENTER);
        image(starImg, mouseX, mouseY);
    }
}