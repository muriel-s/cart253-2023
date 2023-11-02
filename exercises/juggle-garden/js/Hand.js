class Hand {

    constructor(x, y, elbowX, elbowY) {
        // position and size information for hand (start position)
        this.x = x;
        this.y = y;
        this.size = 30;
        // position and size information for arm
        this.armThickness = 10;
        // i want the "elbow" to be outside of the canvas and unmoving
        this.elbowX = elbowX;
        this.elbowY = elbowY;
        // color information
        this.handColor = {
            r: 230,
            g: 200,
            b: 180
        };
    }

    move() {
        this.x = mouseX;
        this.y = mouseY;
    }

    display() {
        // hand
        push();
        noStroke();
        fill(this.handColor.r, this.handColor.g, this.handColor.b);
        ellipse(this.x, this.y, this.size);
        pop();

        // arm
        push();
        strokeWeight(this.armThickness);
        stroke(this.handColor.r, this.handColor.g, this.handColor.b);
        line(this.elbowX, this.elbowY, this.x, this.y);
        pop();
    }
}