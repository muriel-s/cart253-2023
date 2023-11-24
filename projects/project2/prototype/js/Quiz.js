class Quiz {
    constructor() {
        // text color properties
        this.questionColor = color(60, 58, 94);
        this.answerColor = 100;
        this.answerSelectColor = color(60, 58, 94);
        // text Y position properties
        this.questionHeight = height/4;
        this.answer1Height = 400;
        this.answer2Height = 525;
        this.answer3Height = 650;
        this.answer4Height = 775;
        // checking current question
        this.currentQuestion = 0;

        frameRate(12);
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

    // displays questions and answers
    quizText() {
        push();
        noStroke();
        textFont('Pixelify Sans');
        rectMode(CORNER);
        textAlign(LEFT, BOTTOM);
        textSize(32);
        // question
        fill(this.questionColor);
        text(QuizQuestions[this.currentQuestion][0], width/5, this.questionHeight, 2*width/3);

        // answer 1
        answer1 = QuizQuestions[this.currentQuestion][1];
        this.textColorChange(this.answer1Height, answer1);
        text(answer1, width/5, this.answer1Height, 3*width/4);
        // answer 2
        answer2 = QuizQuestions[this.currentQuestion][2];
        this.textColorChange(this.answer2Height, answer2);
        text(answer2, width/5, this.answer2Height, 3*width/4);
        // answer 3
        answer3 = QuizQuestions[this.currentQuestion][3];
        this.textColorChange(this.answer3Height, answer3);
        text(answer3, width/5, this.answer3Height, 3*width/4);
        // answer 4
        answer4 = QuizQuestions[this.currentQuestion][4];
        this.textColorChange(this.answer4Height, answer4);
        text(answer4, width/5, this.answer4Height, 3*width/4);
        pop();
    }

    // changes the text color of the answers when the mouse hovers over them
    textColorChange(answerHeight, answerNum) {
        if (mouseY > answerHeight - 25 && mouseY < answerHeight + 25) {
            fill(this.answerSelectColor);
            if (mousePressed) {
                selectedAnswers.push(answerNum);
            };
        } else {
            fill(this.answerColor);
        }
    }

    // represents the cursor as a cute star
    cursorStar() {
        imageMode(CENTER);
        image(starImg, mouseX, mouseY);
    }

    mousePressed() {
        // switches over to next question ...
        this.currentQuestion++;
        // ... until questions run out ...
        if (this.currentQuestion >= QuizQuestions.length) {
            // ... then Quiz ends
            currentState = new Ending();
        }
    }
}