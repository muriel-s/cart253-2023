class Title {
    constructor() {
        this.titleString = `Aura Generator`;
        this.introText = `Click anywhere to begin`;
        this.bg = {
            h: 0,
            s: 0,
            b: 0
        };
    }

    draw() {
        background(this.bg.h, this.bg.s, this.bg.b);
        this.displayTitle();
        this.displayIntroText();
    }

    displayTitle() {
        push();
        noStroke();
        textFont('Pixelify Sans');
        rectMode(CORNER);
        textAlign(CENTER, BOTTOM);
        textSize(72);
        // red offset
        fill(0, 100, 100);
        text(this.titleString, width/2 - 2, height/3);
        // cyan offset
        fill(180, 100, 100);
        text(this.titleString, width/2 + 2, height/3);
        // white text
        fill(100);
        text(this.titleString, width/2, height/3);
        pop();
    }

    displayIntroText() {
        push();
        noStroke();
        textFont('Pixelify Sans');
        rectMode(CORNER);
        textAlign(CENTER, BOTTOM);
        textSize(48);
        // red offset
        fill(0, 100, 100);
        text(this.introText, width/2 - 1, height/2);
        // cyan offset
        fill(180, 100, 100);
        text(this.introText, width/2 + 1, height/2);
        // white text
        fill(100);
        text(this.introText, width/2, height/2);
        pop();
    }

    mousePressed() {
        currentState = new Quiz();
    }
}