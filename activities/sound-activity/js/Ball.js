class Ball {

    constructor(x, y, note) {
        this.x = x;
        this.y = y;
        this.size = 50;
        // color properties
        this.fill = {
            r: random(200,255),
            g: random(200,255),
            b: random(200,255),
        };
        // movement properties
        this.speed = 3;
        this.vx = random(-this.speed, this.speed);
        this.vy = random(-this.speed, this.speed);
        // oscillator properties
        this.oscillator = new p5.Oscillator;
        this.nearFreq = randomGaussian(220);
        this.farFreq = randomGaussian(440);
        this.amp = amp(0.2);
        // synth properties
        this.note = note;
        this.synth = new p5.PolySynth;
    }

    move() {
        // sets ball in motion
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        // checks distance between ball and center of canvas
        let d = dist(this.x, this.y, width/2, height/2);
        // calculate maximum distance between the ball and the center of the canvas
        let maxDist = dist(0, 0, width/2, height/2);
        // maps ball frequency to ball's proximity to center of canvas
        let newFreq = map(d, 0, maxDist, this.nearFreq, this.farFreq);
        this.oscillator.freq(newFreq);
    }

    bounce() {
        // checks if ball is off canvas, reverses velocity if so
        // and plays synth note while bouncing
        if (this.x < 0 + this.size/2 || this.x > width - this.size/2) {
            this.vx = -this.vx;
            this.synth.playNote(0.1, 0, 0.2);
        };
        if (this.y < 0 + this.size/2 || this.y > height - this.size/2) {
            this.vy = -this.vy;
            this.synth.playNote(0.1, 0, 0.2);
        }
    }

    display() {
        // display ball as circle
        push();
        fill(this.fill.r, this.fill.g, this.fill.b);
        noStroke();
        ellipse(this.x, this.y, this.size);
        pop();
        // start the oscillator
        this.oscillator.start();
    }
}