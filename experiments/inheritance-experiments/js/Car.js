class Car extends Vehicle {
    constructor(x, y) {
        super(x, y);
        this.width = 50;
        this.height = 20;
        this.vx = 5;
        this.drunkenness = 0.2;
    }

    move() {
        this.veer();
        super.move();
    }

    veer() {
        let r = random();
        if (r < this.drunkenness) {
            this.vy = random(-5, 5);
        }
    }

    wrap() {
        super.wrap();

        if (this.y > height) {
            this.y -= 0;
        }
        else if (this.y < 0) {
            this.y += height;
        }
    }

    display() {
        push();
        fill(255, 50, 50);
        super.display();
        pop(); 
    }
}