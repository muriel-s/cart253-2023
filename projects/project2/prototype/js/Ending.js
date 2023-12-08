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
        this.frameThickness = 300;
        this.frameMinThickness = 75;
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
        // helpful info
        console.log(selectedAnswers);
        console.log(`frame saturation: ` + trusting);
        console.log(`frame brightness: ` + cautious);
        console.log(`noise saturation: ` + instinctive);
        console.log(`wave size: ` + thoughtful);
        console.log(`noise brightness: ` + straightforward);
        console.log(`noise point size: ` + sophisticated);
        console.log(`wave alpha: ` + sensitive);
        console.log(`background hue: ` + hardy);
        console.log(`noise area: ` + ambitious);
        console.log(`background brightness: ` + content);
        console.log(`background saturation: ` + earnest);
        console.log(`frame hue: ` + cool);
        console.log(`wave height: ` + playful);
        console.log(`noise hue: ` + efficient);
        console.log(`wave width: ` + relaxed);
        console.log(`noise amount: ` + excitable);
    }

    draw() {
        background(this.bg.h, this.bg.s, this.bg.b);
        this.drawFrame();
        this.drawNoise();

        this.tooltip();
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
        // draws wave behind noise, in front of back layers noise
        this.drawWave();
        // draws noise
        for (let i = 0; i < this.noiseAmount; i++) {
            let x = randomGaussian(width/2, width*this.noiseArea);
            let y = randomGaussian(height/2, width*this.noiseArea);
            stroke(this.noise.h, this.noise.s, this.noise.b);
            strokeWeight(this.noisePointSize);
            point(x, y);
        };
    }

    tooltip() {
        let tooltip = `click to save as PNG`;
        let w = textWidth(tooltip);
        push();
        fill(0, 0, 80);
        stroke(0, 0, 40);
        strokeWeight(1);
        rectMode(CORNER);
        rect(mouseX, mouseY, w*2, 30);
        textAlign(LEFT, TOP);
        textFont('Pixelify Sans');
        textSize(20);
        noStroke();
        fill(0);
        text(tooltip, mouseX + 5, mouseY + 5);
        pop();
    }

    mousePressed() {
        saveCanvas(`aura`, `png`);
    }
}