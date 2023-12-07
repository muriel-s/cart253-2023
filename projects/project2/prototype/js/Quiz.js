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
        this.questionHeight = height/5;
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

        // show accumulation of points
        console.log(`trusting: ` + trusting);
        console.log(`cautious: ` + cautious);
        console.log(`instinctive: ` + instinctive);
        console.log(`thoughtful: ` + thoughtful);
        console.log(`straightforward: ` + straightforward);
        console.log(`sophisticated: ` + sophisticated);
        console.log(`sensitive: ` + sensitive);
        console.log(`hardy: ` + hardy);
        console.log(`ambitious: ` + ambitious);
        console.log(`content: ` + content);
        console.log(`earnest: ` + earnest);
        console.log(`cool: ` + cool);
        console.log(`playful: ` + playful);
        console.log(`efficient: ` + efficient);
        console.log(`relaxed: ` + relaxed);
        console.log(`excitable: ` + excitable);
    }

    loopBg() {
        // makes bg start off at 0% brightness and fade into 15% brightness
        if (this.bg.b < 15) {
            this.bg.b = this.bg.b + 0.1;
        };
        // makes bg slowly change hue in a loop
        this.bg.h++;
        if (this.bg.h > 360) {
            this.bg.h = 0;
        };
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
        };
    }

    // displays questions and answers
    quizText() {
        push();
        noStroke();
        textFont('Pixelify Sans');
        rectMode(CORNER);
        textAlign(LEFT, CENTER);
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
        };
    }

    // changes the text color of the answers when selected
    textColorChange(answerHeight) {
        if (this.isSelected(answerHeight)) {
            fill(this.answerSelectColor);
        } else {
            fill(this.answerColor);
        };
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
            this.answerSelectEvent(answer1);
        } else if (this.isSelected(this.answer2Height)) {
            this.answerSelectEvent(answer2);
        } else if (this.isSelected(this.answer3Height)) {
            this.answerSelectEvent(answer3);
        } else if (this.isSelected(this.answer4Height)) {
            this.answerSelectEvent(answer4);
        };
        
        if (this.currentQuestion >= QuizQuestions.length) {
            this.rangeTraits();
            currentState = new Ending();
        };
    }

    answerSelectEvent(answerNum) {
        eventSound.play(`B6`, 0.4, 0, 0.2);
        selectedAnswers.push(answerNum);
        this.traits();
        this.currentQuestion++;
    }

    traits() {
        if (this.currentQuestion === 0) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[0]) {
                trusting = trusting + 4;
                efficient = efficient + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[0]) {
                playful = playful + 4;
                instinctive = instinctive + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[0]) {
                cautious = cautious + 4;
                relaxed = relaxed + 2;
            };
        };
        
        if (this.currentQuestion === 1) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                relaxed = relaxed + 4;
                hardy = hardy + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                content = content + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 2;
                excitable = excitable + 2;
            };
        };
        
        if (this.currentQuestion === 2) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                playful = playful + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 4;
                efficient = efficient + 4;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 2;
                excitable = excitable + 2;
            };
        };

        if (this.currentQuestion === 3) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 2;
                hardy = hardy + 2;
                cool = cool + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                sophisticated = sophisticated + 4;
                sensitive = sensitive + 4;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 2;
                trusting = trusting + 4;
                earnest = earnest + 4;
            } else if (QuizQuestions[this.currentQuestion][4] === selectedAnswers[this.currentQuestion]) {
                cool = cool + 2;
            };
        };

        if (this.currentQuestion === 4) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                cautious = cautious + 4;
                sensitive = sensitive + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                straightforward = straightforward + 4;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 2;
                trusting = trusting + 4;
            } else if (QuizQuestions[this.currentQuestion][4] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 2;
            };
        };

        if (this.currentQuestion === 5) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                playful = playful + 4;
                trusting = trusting + 2;
                relaxed = relaxed + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 2;
                cautious = cautious + 2;
                excitable = excitable + 2;
            };
        };

        if (this.currentQuestion === 6) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 2;
                playful = playful + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                cautious = cautious + 2;
            } else if (QuizQuestions[this.currentQuestion][4] === selectedAnswers[this.currentQuestion]) {
                efficient = efficient + 2;
            };
        };

        if (this.currentQuestion === 7) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                content = content + 2;
                cautious = cautious + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 2;
                sophisticated = sophisticated + 2;
            };
        };

        if (this.currentQuestion === 8) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                cool = cool + 4;
                sophisticated = sophisticated + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                earnest = earnest + 4;
                straightforward = straightforward + 4;
            } else if (QuizQuestions[this.currentQuestion][4] === selectedAnswers[this.currentQuestion]) {
                sensitive = sensitive + 2;
                cautious = cautious + 2;
            };
        };

        if (this.currentQuestion === 9) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 2;
                playful = playful + 2;
                excitable = excitable + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                trusting = trusting + 4;
                ambitious = ambitious + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 2;
                content = content + 2;
            } else if (QuizQuestions[this.currentQuestion][4] === selectedAnswers[this.currentQuestion]) {
                cautious = cautious + 4;
            };
        };

        if (this.currentQuestion === 10) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                hardy = hardy + 2;
                straightforward = straightforward + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                trusting = trusting + 2;
                thoughtful = thoughtful + 2;
                sensitive = sensitive + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                sophisticated = sophisticated + 2;
            };
        };

        if (this.currentQuestion === 11) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                content = content + 4;
                efficient = efficient + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                trusting = trusting + 2;
                ambitious = ambitious + 2;
                playful = playful + 4;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 2;
            };
        };

        if (this.currentQuestion === 12) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                trusting = trusting + 4;
                sophisticated = sophisticated + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 4;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                cautious = cautious + 2;
                instinctive = instinctive + 2;
            } else if (QuizQuestions[this.currentQuestion][4] === selectedAnswers[this.currentQuestion]) {
                content = content + 4;
                cool = cool + 4;
            };
        };

        if (this.currentQuestion === 13) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                relaxed = relaxed + 2;
                playful = playful + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                earnest = earnest + 2;
                sophisticated = sophisticated + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 2;
                ambitious = ambitious + 4;
            };
        };

        if (this.currentQuestion === 14) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 2;
                ambitious = ambitious + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                straightforward = straightforward + 4;
                content = content + 4;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                cautious = cautious + 4;
                hardy = hardy + 2;
            } else if (QuizQuestions[this.currentQuestion][4] === selectedAnswers[this.currentQuestion]) {
                sensitive = sensitive + 4;
                excitable = excitable + 4;
            };
        };

        if (this.currentQuestion === 15) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                earnest = earnest + 4;
                sensitive = sensitive + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 2;
                playful = playful + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 2;
                hardy = hardy + 2;
            } else if (QuizQuestions[this.currentQuestion][4] === selectedAnswers[this.currentQuestion]) {
                straightforward = straightforward + 4;
                efficient = efficient + 2;
            };
        };

        if (this.currentQuestion === 16) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                trusting = trusting + 4;
                hardy = hardy + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                cautious = cautious + 4;
                sensitive = sensitive + 4;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 2;
                cool = cool + 2;
            };
        };

        if (this.currentQuestion === 17) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                trusting = trusting + 4;
                ambitious = ambitious + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                cautious = cautious + 2;
                excitable = excitable + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                relaxed = relaxed + 4;
                content = content + 2;
            };
        };

        if (this.currentQuestion === 18) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 4;
                earnest = earnest + 4;
                straightforward = straightforward + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 2;
                cool = cool + 4;
                sophisticated = sophisticated + 4;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                excitable = excitable + 4;
            };
        };

        if (this.currentQuestion === 19) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 4;
                excitable = excitable + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                trusting = trusting + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                relaxed = relaxed + 4;
                hardy = hardy + 4;
            };
        };

        if (this.currentQuestion === 20) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                ambitious = ambitious + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                content = content + 4;
                relaxed = relaxed + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                cool = cool + 4;
                efficient = efficient + 4;
            };
        };

        if (this.currentQuestion === 21) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 2;
                straightforward = straightforward + 4;
                earnest = earnest + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 2;
                sophisticated = sophisticated + 4;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                cautious = cautious + 2;
            };
        };

        if (this.currentQuestion === 22) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 4;
                content = content + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 2;
                efficient = efficient + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                cautious = cautious + 4;
            } else if (QuizQuestions[this.currentQuestion][4] === selectedAnswers[this.currentQuestion]) {
                trusting = trusting + 2;
                playful = playful + 2;
            };
        };

        if (this.currentQuestion === 23) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 2;
                playful = playful + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                earnest = earnest + 2;
                straightforward = straightforward + 2;
                cautious = cautious + 4;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                efficient = efficient + 4;
            };
        };

        if (this.currentQuestion === 24) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                excitable = excitable + 2;
                sensitive = sensitive + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                earnest = earnest + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                hardy = hardy + 4;
                cool = cool + 2;
            };
        };

        if (this.currentQuestion === 25) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                trusting = trusting + 2;
                sensitive = sensitive + 2;
                sophisticated = sophisticated + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                cautious = cautious + 2;
                straightforward = straightforward + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                relaxed = relaxed + 4;
                thoughtful = thoughtful + 2;
            };
        };

        if (this.currentQuestion === 26) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                hardy = hardy + 4;
                relaxed = relaxed + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                sensitive = sensitive + 2;
                excitable = excitable + 4;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                sophisticated = sophisticated + 4;
            };
        };

        if (this.currentQuestion === 27) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                efficient = efficient + 2;
                relaxed = relaxed + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                cautious = cautious + 2;
            };
        };

        if (this.currentQuestion === 28) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                ambitious = ambitious + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 4;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                content = content + 2;
            };
        };

        if (this.currentQuestion === 29) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                hardy = hardy + 4;
                sophisticated = sophisticated + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                cool = cool + 4;
                earnest = earnest + 2;
            };
        };

        if (this.currentQuestion === 30) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 2;
                relaxed = relaxed + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                ambitious = ambitious + 2;
                excitable = excitable + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 4;
            };
        };

        if (this.currentQuestion === 31) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                cautious = cautious + 4;
                ambitious = ambitious + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 4;
                content = content + 2;
                efficient = efficient + 2;
            };
        };

        if (this.currentQuestion === 32) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                cool = cool + 4;
                cautious = cautious + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                trusting = trusting + 4;
                sophisticated = sophisticated + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 4;
                straightforward = straightforward + 4;
                efficient = efficient + 2;
            };
        };

        if (this.currentQuestion === 33) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                efficient = efficient + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                relaxed = relaxed + 2;
                trusting = trusting + 2;
            };
        };

        if (this.currentQuestion === 34) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                relaxed = relaxed + 2;
                thoughtful = thoughtful + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                excitable = excitable + 2;
                playful = playful + 2;
            };
        };

        if (this.currentQuestion === 35) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 2;
                efficient = efficient + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                ambitious = ambitious + 4;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                playful = playful + 4;
            } else if (QuizQuestions[this.currentQuestion][4] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 2;
            };
        };

        if (this.currentQuestion === 36) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                instinctive = instinctive + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 4;
            };
        };

        if (this.currentQuestion === 37) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                ambitious = ambitious + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                content = content + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                relaxed = relaxed + 2;
                trusting = trusting + 2;
            };
        };

        if (this.currentQuestion === 38) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                straightforward = straightforward + 4;
                hardy = hardy + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                earnest = earnest + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 2;
                sophisticated = sophisticated + 4;
            };
        };

        if (this.currentQuestion === 39) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 4;
                hardy = hardy + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                cautious = cautious + 2;
                sensitive = sensitive + 4;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                excitable = excitable + 4;
                straightforward = straightforward + 4;
            } else if (QuizQuestions[this.currentQuestion][4] === selectedAnswers[this.currentQuestion]) {
                cool = cool + 4;
            };
        };

        if (this.currentQuestion === 40) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                sensitive = sensitive + 4;
                playful = playful + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                ambitious = ambitious + 2;
                excitable = excitable + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                thoughtful = thoughtful + 4;
                relaxed = relaxed + 2;
            } else if (QuizQuestions[this.currentQuestion][4] === selectedAnswers[this.currentQuestion]) {
                efficient = efficient + 2;
            };
        };

        if (this.currentQuestion === 41) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                efficient = efficient + 4;
                hardy = hardy + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                cool = cool + 4;
                relaxed = relaxed + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                earnest = earnest + 4;
                ambitious = ambitious + 2;
            } else if (QuizQuestions[this.currentQuestion][4] === selectedAnswers[this.currentQuestion]) {
                playful = playful + 4;
            };
        };

        if (this.currentQuestion === 42) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                earnest = earnest + 4;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                content = content + 2;
                efficient = efficient + 2;
            } else if (QuizQuestions[this.currentQuestion][3] === selectedAnswers[this.currentQuestion]) {
                ambitious = ambitious + 4;
            };
        };

        if (this.currentQuestion === 43) {
            if (QuizQuestions[this.currentQuestion][1] === selectedAnswers[this.currentQuestion]) {
                playful = playful + 2;
                cool = cool + 2;
            } else if (QuizQuestions[this.currentQuestion][2] === selectedAnswers[this.currentQuestion]) {
                earnest = earnest + 2;
                content = content + 2;
            };
        };
    }

    rangeTraits() {
        trusting = round(map(trusting, 0, 46, 0, 100));
        cautious = round(map(cautious, 0, 56, 100, 0));
        instinctive = round(map(instinctive, 0, 60, 0, 100));
        thoughtful = round(map(thoughtful, 0, 64, 10, 100));
        straightforward = round(map(straightforward, 0, 42, 0, 100));
        sophisticated = round(map(sophisticated, 0, 40, 4, 1), 1);
        sensitive = round(map(sensitive, 0, 34, 1, 0.5), 1);
        hardy = round(map(hardy, 0, 38, 360, 0));
        ambitious = round(map(ambitious, 0, 42, 0.05, 0.25), 2);
        content = round(map(content, 0, 36, 0, 100));
        earnest = round(map(earnest, 0, 38, 0, 100));
        cool = round(map(cool, 0, 44, 0, 360));
        playful = round(map(playful, 0, 42, 50, 200));
        efficient = round(map(efficient, 0, 42, 0, 360));
        relaxed = round(map(relaxed, 0, 42, 0.08, 0.02), 2);
        excitable = round(map(excitable, 0, 36, 1000, 6000));
    }
}