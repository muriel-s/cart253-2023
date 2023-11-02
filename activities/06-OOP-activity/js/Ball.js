class Ball {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.maxSpeed = 20;
        this.size = 50;
        this.active = true;
    }

    gravity(force) {
        // Adds the gravity force to the ball’s vertical downwards acceleration
        this.ay += force;
    }

    move() {
        // Adds the acceleration to the velocity for both x and y axes
        this.vx += this.ax;
        this.vy += this.ay;

        // Constrains the velocity based on the maximum speed of the ball
        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
        this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

        // Adds the velocity to the position to move the ball
        this.x += this.vx;
        this.y += this.vy;

        // Checks if the ball has gone off the canvas and deactivates it if it has
        if (this.y - this.size/2 > height ||
            this.x + this.size/2 < 0 ||
            this.x - this.size/2 > width) {
            this.active = false;
        }
    }

    bounce(paddle) {
        // checks if the ball has hit the top of the paddle
        if (this.x > paddle.x - paddle.width/2 && 
            this.x < paddle.x + paddle.width/2 &&
            this.y + this.size/2 > paddle.y - paddle.height/2 &&
            this.y - this.size/2 < paddle.y + paddle.height/2) { 
                // makes the ball move horizontally based on how close to the edge of the paddle it hits
                let dx = this.x - paddle.x;
                this.vx += map(dx, -paddle.width/2, paddle.width/2, -2, 2);

                // reverses its y velocity
                this.vy = -this.vy;
                // sets its y acceleration to 0
                this.ay = 0;
        }
    }

    display() {
        push();
        fill(100, 100, 200);
        noStroke();
        ellipse(this.x, this.y, this.size);
        pop();
    }
}