class Vehicle {
    constructor(x, y, vx) {
        this.x = x;
        this.y = y;
        this.width = undefined;
        this.height = undefined;
        this.vx = 0;
        this.vy = 0;
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    wrap() {
        if (this.x > width) {
            this.x -= width;
        }
    }

    display() {
        push();
        rectMode(CENTER);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}