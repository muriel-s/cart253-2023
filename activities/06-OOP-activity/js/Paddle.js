class Paddle {

    constructor(w, h) {
        this.width = w;
        this.height = h;
        this.x = 0;
        this.y = height - this.height/2;
    }

    move() {
        // tracks the paddle horizontally to the mouse position
        this.x = mouseX;
    }

    display() {
        push();
        fill(200, 100, 200);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop(); 
    }
}