class Ending {
    constructor() {
        // background color properties
        this.bg = {
            h: 360,
            s: 0,
            b: 0,
        };
        // frame properties
        this.frame = {
            h: 0,
            s: 0,
            b: 100,
        };
        this.frameThickness = 200;
        this.frameMinThickness = 50;
        // wave properties
        this.waveHeight = 50;
        this.waveWidth = 0.08;
        this.waveSize = 10;
        this.waveAlpha = 1;
        // noise properties
        this.noise = {
            h: 0,
            s: 0,
            b: 0,
        };
        this.noiseAmount = 1000;
        this.noisePointSize = 4;
        this.noiseArea = 0.05;
        // frame rate
        frameRate(12);
        console.log(selectedAnswers);
    }

    draw() {
        background(this.bg.h, this.bg.s, this.bg.b);
        this.drawFrame();
        this.drawWave();
        this.drawNoise();
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

    createInterColor(interLetter, lerpAmt) {
        let frameColor = color(this.frame.h, this.frame.s, this.frame.b);
        let backgroundColor = color(this.bg.h, this.bg.s, this.bg.b);
        interLetter = lerpColor(frameColor, backgroundColor, lerpAmt);
        strokeWeight(lerp(this.frameMinThickness, this.frameThickness, lerpAmt));
        stroke(interLetter);
        rect(width/2, height/2, this.frameWidth);
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
}