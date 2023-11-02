class Bee {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 40;
        this.minSize = 10;
        this.maxSize = 40;
        this.vx = 0;
        this.vy = 0;
        this.speed = 5;
        this.shrinkRate = 0.05;
        this.growRate = 0.05;
        this.jitteriness = 0.1;
        this.alive = true;
    }

    shrink() {
        this.size -= this.shrinkRate;
        if (this.size < this.minSize) {
            this.alive = false;
        }
    }

    move() {
        let r = random(0,1);
        if (r < this.jitteriness) {
            this.vx = random(-this.speed, this.speed)
            this.vy = random(-this.speed, this.speed)
        }

        this.x += this.vx;
        this.y += this.vy;

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }

    display() {
        // wings
        push();
        fill(255, 255, 255);
        noStroke();
        ellipse(this.x - this.size/2, this.y, this.size/2);
        ellipse(this.x + this.size/2, this.y, this.size/2);
        pop();

        // body
        push();
        fill(255, 255, 50);
        noStroke();
        ellipse(this.x, this.y, this.size);
        pop();

        // eyes
        push();
        fill(0);
        noStroke();
        ellipse(this.x - this.size/10, this.y, this.size/10);
        ellipse(this.x + this.size/10, this.y, this.size/10);
        pop();
    }

    tryToPollinate(flower) {
        let d = dist(this.x, this.y, flower.x, flower.y);
        if (d < this.size/2 + flower.size/2 + flower.petalThickness) {
            this.grow();
            flower.pollinate();
        }
    }

    grow() {
        this.size += this.growRate;
        this.size = constrain(this.size, this.minSize, this.maxSize);
    }
}