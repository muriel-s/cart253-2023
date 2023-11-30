class Quiz {
    constructor() {
        // background color properties
        this.bg = {
            h: 0,
            s: 80,
            b: 0
        };
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
    }

    draw() {
        background(this.bg.h, this.bg.s, this.bg.b);
        this.loopBg();
        this.quizBackground();
        this.quizText();
        this.cursorStar();
    }

    loopBg() {
        // makes bg start off black and fade into color
        if (this.bg.b < 15) {
            this.bg.b = this.bg.b + 0.1;
        }
        // makes bg slowly change hue
        this.bg.h++;
        if (this.bg.h > 360) {
            this.bg.h = 0;
        }
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
            x = randomGaussian(0, width*0.15);
            y = randomGaussian(height, width*0.15);
            point(x, y);
            // ... in top right corner
            x = randomGaussian(width, width*0.15);
            y = randomGaussian(0, width*0.15);
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
        this.textColorChange(this.answer1Height);
        text(answer1, width/5, this.answer1Height, 3*width/4);
        // answer 2
        answer2 = QuizQuestions[this.currentQuestion][2];
        this.textColorChange(this.answer2Height);
        text(answer2, width/5, this.answer2Height, 3*width/4);
        // answer 3
        answer3 = QuizQuestions[this.currentQuestion][3];
        this.textColorChange(this.answer3Height);
        text(answer3, width/5, this.answer3Height, 3*width/4);
        // answer 4
        answer4 = QuizQuestions[this.currentQuestion][4];
        this.textColorChange(this.answer4Height);
        text(answer4, width/5, this.answer4Height, 3*width/4);
        pop();
    }

    // checks if an answer is currently selected by user
    isSelected(answerHeight) {
        if (mouseY > answerHeight - 25 && mouseY < answerHeight + 25) {
            return true;
        } else {
            return false;
        }
    }

    // changes the text color of the answers when selected
    textColorChange(answerHeight) {
        if (this.isSelected(answerHeight)) {
            fill(this.answerSelectColor);
        } else {
            fill(this.answerColor);
        }
    }

    // represents the cursor as a cute star
    cursorStar() {
        imageMode(CENTER);
        image(starImg, mouseX, mouseY);
    }

    // only switches to next question if mouse is pressed over an answer
    // adds selected answers to array holding them
    mousePressed() {
        if (this.isSelected(this.answer1Height)) {
            selectedAnswers.push(answer1);
            this.currentQuestion++;
        } else if (this.isSelected(this.answer2Height)) {
            selectedAnswers.push(answer2);
            this.currentQuestion++;
        } else if (this.isSelected(this.answer3Height)) {
            selectedAnswers.push(answer3);
            this.currentQuestion++;
        } else if (this.isSelected(this.answer4Height)) {
            selectedAnswers.push(answer4);
            this.currentQuestion++;
        };
        
        if (this.currentQuestion >= QuizQuestions.length) {
            currentState = new Ending();
        }
    }

    traits() {
        if (QuizQuestions[0][1] === selectedAnswers[0]) {
            trusting = trusting + 4;
            efficient = efficient + 2;
        } else if (QuizQuestions[0][2] === selectedAnswers[0]) {
            playful = playful + 4;
            instinctive = instinctive + 2;
        } else if (QuizQuestions[0][3] === selectedAnswers[0]) {
            cautious = cautious + 4;
            relaxed = relaxed + 2;
        };
        
        if (QuizQuestions[1][1] === selectedAnswers[1]) {
            relaxed = relaxed + 4;
            hardy = hardy + 2;
        } else if (QuizQuestions[1][2] === selectedAnswers[1]) {
            content = content + 2;
        } else if (QuizQuestions[1][3] === selectedAnswers[1]) {
            thoughtful = thoughtful + 2;
            playful = playful + 2;
        };

        if (QuizQuestions[2][1] === selectedAnswers[2]) {
            playful = playful + 4;
        } else if (QuizQuestions[2][2] === selectedAnswers[2]) {
            thoughtful = thoughtful + 4;
            efficient = efficient + 4;
        } else if (QuizQuestions[2][3] === selectedAnswers[2]) {
            instinctive = instinctive + 2;
            excitable = excitable + 2;
        };

        if (QuizQuestions[3][1] === selectedAnswers[3]) {
            thoughtful = thoughtful + 2;
            hardy = hardy + 2;
        } else if (QuizQuestions[3][2] === selectedAnswers[3]) {
            sophisticated = sophisticated + 4;
            sensitive = sensitive + 4;
        } else if (QuizQuestions[3][3] === selectedAnswers[3]) {
            instinctive = instinctive + 2;
            trusting = trusting + 4;
            earnest = earnest + 4;
        } else if (QuizQuestions[3][4] === selectedAnswers[3]) {
            cool = cool + 2;
        };

        if (QuizQuestions[4][1] === selectedAnswers[4]) {
            cautious = cautious + 4;
            sensitive = sensitive + 2;
        } else if (QuizQuestions[4][2] === selectedAnswers[4]) {
            straightforward = straightforward + 4;
        } else if (QuizQuestions[4][3] === selectedAnswers[4]) {
            thoughtful = thoughtful + 2;
            trusting = trusting + 4;
        } else if (QuizQuestions[4][4] === selectedAnswers[4]) {
            instinctive = instinctive + 2;
        };

        if (QuizQuestions[5][1] === selectedAnswers[5]) {
            playful = playful + 4;
            trusting = trusting + 2;
            relaxed = relaxed + 2;
        } else if (QuizQuestions[5][2] === selectedAnswers[5]) {
            thoughtful = thoughtful + 2;
            cautious = cautious + 2;
        };

        if (QuizQuestions[6][1] === selectedAnswers[6]) {
            thoughtful = thoughtful + 2;
        } else if (QuizQuestions[6][2] === selectedAnswers[6]) {
            instinctive = instinctive + 2;
            playful = playful + 2;
        } else if (QuizQuestions[6][3] === selectedAnswers[6]) {
            cautious = cautious + 2;
        } else if (QuizQuestions[6][4] === selectedAnswers[6]) {
            efficient = efficient + 2;
        };

        if (QuizQuestions[7][1] === selectedAnswers[7]) {
            instinctive = instinctive + 4;
        } else if (QuizQuestions[7][2] === selectedAnswers[7]) {
            content = content + 2;
            cautious = cautious + 2;
        } else if (QuizQuestions[7][3] === selectedAnswers[7]) {
            thoughtful = thoughtful + 2;
            sophisticated = sophisticated + 2;
        };

        if (QuizQuestions[8][1] === selectedAnswers[8]) {
            cool = cool + 2;
            sophisticated = sophisticated + 4;
        } else if (QuizQuestions[8][2] === selectedAnswers[8]) {
            thoughtful = thoughtful + 2;
        } else if (QuizQuestions[8][3] === selectedAnswers[8]) {
            trusting = trusting + 4;
            straightforward = straightforward + 4;
        } else if (QuizQuestions[8][4] === selectedAnswers[8]) {
            sensitive = sensitive + 2;
            cautious = cautious + 2;
        };

        if (QuizQuestions[9][1] === selectedAnswers[9]) {
            instinctive = instinctive + 2;
            playful = playful + 2;
        } else if (QuizQuestions[9][2] === selectedAnswers[9]) {
            trusting = trusting + 4;
            ambitious = ambitious + 2;
        } else if (QuizQuestions[9][3] === selectedAnswers[9]) {
            thoughtful = thoughtful + 2;
            content = content + 2;
        } else if (QuizQuestions[9][4] === selectedAnswers[9]) {
            cautious = cautious + 4;
        };
    }
}