class Ending {
    constructor() {
        // background color properties
        this.bg = {
            h: hardy,
            s: earnest,
            b: content,
        };
        // frame properties
        this.frame = {
            h: cool,
            s: trusting,
            b: cautious,
        };
        this.frameThickness = 200;
        this.frameMinThickness = 50;
        // wave properties
        this.waveHeight = playful;
        this.waveWidth = relaxed;
        this.waveSize = thoughtful;
        this.waveAlpha = sensitive;
        // noise properties
        this.noise = {
            h: efficient,
            s: instinctive,
            b: straightforward,
        };
        this.noiseAmount = excitable;
        this.noisePointSize = sophisticated;
        this.noiseArea = ambitious;
        // frame rate
        frameRate(12);
        console.log(selectedAnswers);

    }

    draw() {
        // this.rangeTraits();
        background(this.bg.h, this.bg.s, this.bg.b);
        this.drawFrame();
        this.drawWave();
        this.drawNoise();
    }

    createInterColor(interLetter, lerpAmt) {
        let frameColor = color(this.frame.h, this.frame.s, this.frame.b);
        let backgroundColor = color(this.bg.h, this.bg.s, this.bg.b);
        interLetter = lerpColor(frameColor, backgroundColor, lerpAmt);
        strokeWeight(lerp(this.frameMinThickness, this.frameThickness, lerpAmt));
        stroke(interLetter);
        rect(width/2, height/2, this.frameWidth);
    }

    drawFrame() {
        let interA;
        let interB;
        let interC;
        let interD;
        let interE;
        let interF;
        let interG;
        let interH;
        let interI;
        // sets parameters
        noFill();
        rectMode(CENTER);
        // draws the blend from frame to bg
        this.createInterColor(interI, 0.9);
        this.createInterColor(interH, 0.8);
        this.createInterColor(interG, 0.7);
        this.createInterColor(interF, 0.6);
        this.createInterColor(interE, 0.5);
        this.createInterColor(interD, 0.4);
        this.createInterColor(interC, 0.3);
        this.createInterColor(interB, 0.2);
        this.createInterColor(interA, 0.1);
        // draws outer frame
        strokeWeight(this.frameMinThickness);
        stroke(this.frame.h, this.frame.s, this.frame.b);
        rect(width/2, height/2, width);
    }

    drawWave() {
        push();
        noStroke();
        fill(this.frame.h, this.frame.s, this.frame.b, this.waveAlpha);
        beginShape();
        for (let i = 0; i < width; i++) {
            let x = i;
            let y = this.waveHeight * sin(x * this.waveWidth) + height/2 + -this.waveSize;
            vertex(x, y);
        };
        for (let i = width; i > 0; i--) {
            let x = i;
            let y = this.waveHeight * sin(x * this.waveWidth) + height/2 + this.waveSize;
            vertex(x, y);
        };
        endShape(CLOSE);
        pop();
    }

    drawNoise() {
        // draws base-layer of noise
        for (let i = 0; i < this.noiseAmount; i++) {
            let x = randomGaussian(width/2, 1.5*width*this.noiseArea);
            let y = randomGaussian(height/2, 1.5*width*this.noiseArea);
            let hue = lerp(this.noise.h, this.bg.h, 0.75);
            let saturation = lerp(this.noise.s, this.bg.s, 0.75);
            let brightness = lerp(this.noise.b, this.bg.b, 0.75);
            stroke(hue, saturation, brightness);
            strokeWeight(this.noisePointSize);
            point(x, y);
        };
        // draws mid-layer of noise
        for (let i = 0; i < this.noiseAmount; i++) {
            let x = randomGaussian(width/2, 1.5*width*this.noiseArea);
            let y = randomGaussian(height/2, 1.5*width*this.noiseArea);
            let hue = lerp(this.noise.h, this.bg.h, 0.5);
            let saturation = lerp(this.noise.s, this.bg.s, 0.5);
            let brightness = lerp(this.noise.b, this.bg.b, 0.5);
            stroke(hue, saturation, brightness);
            strokeWeight(this.noisePointSize);
            point(x, y);
        };
        // draws noise
        for (let i = 0; i < this.noiseAmount; i++) {
            let x = randomGaussian(width/2, width*this.noiseArea);
            let y = randomGaussian(height/2, width*this.noiseArea);
            stroke(this.noise.h, this.noise.s, this.noise.b);
            strokeWeight(this.noisePointSize);
            point(x, y);
        };
    }

    // rangeTraits() {
    //     trusting = map(trusting, 0, 22, 0, 100);
    //     cautious = map(cautious, 0, 22, 100, 0);
    //     instinctive = map(instinctive, 0, 16, 0, 100);
    //     thoughtful = map(thoughtful, 0, 18, 10, 100);
    //     straightforward = map(straightforward, 0, 8, 0, 100);
    //     sophisticated = map(sophisticated, 0, 12, 4, 1);
    //     sensitive = map(sensitive, 0, 6, 1, 0.5);
    //     hardy = map(hardy, 0, 4, 360, 0);
    //     ambitious = map(ambitious, 0, 2, 0.05, 0.25);
    //     content = map(content, 0, 6, 0, 100);
    //     earnest = map(earnest, 0, 4, 0, 100);
    //     cool = map(cool, 0, 4, 0, 360);
    //     playful = map(playful, 0, 18, 50, 200);
    //     efficient = map(efficient, 0, 10, 0, 360);
    //     relaxed = map(relaxed, 0, 8, 0.08, 0.02);
    //     excitable = map(excitable, 0, 2, 1000, 6000);
    // }

    mousePressed() {

    }
}