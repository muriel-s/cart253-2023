class Flower {

    constructor() {
        // position and size information
        this.x = random(0, width);
        this.y = random(0, height - height/5);
        this.size = random(20, 60);
        this.maxSize = this.size;
        this.shrinkRate = random(0.01, 0.1);
        this.growthRate = random(0.05, 0.5);
        this.stemLength = random(50, 70);
        this.stemThickness = 5;
        this.petalThickness = 10;
        this.maxPetalThickness = 10;
        // color information
        this.stemColor = {
            r: 50,
            g: 150,
            b: 50
        };
        this.petalColor = {
            r: random(100,255),
            g: random(100,255),
            b: random(100,255)
        };
        this.centreColor = {
            r: 50,
            g: 0,
            b: 0
        };
        this.alive = true;
        this.picked = false;
    }

    shrink() {
        this.size -= this.shrinkRate;
        this.petalThickness -= this.shrinkRate/10;

        if (this.size <= this.stemThickness || this.petalThickness <= 0) {
            this.alive = false;
        }
    }
    
    display() {
        // draws stem
        push();
        strokeWeight(this.stemThickness);
        stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
        line(this.x, this.y, this.x, this.y + this.stemLength);
        pop();
        // draws flower top
        push();
        strokeWeight(this.petalThickness);
        fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
        stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
        ellipse(this.x, this.y, this.size);
        pop();
    }

    pollinate() {
        this.size += this.growthRate;
        this.petalThickness += this.growthRate/10;

        this.size = constrain(this.size, 0, this.maxSize);
        this.petalThickness = constrain(this.petalThickness, 0, this.maxPetalThickness);
    }

    mousePressed(hand) {
        // checks if mouse is pressed over flower stem
        let d = dist(mouseX, mouseY, this.x, this.y + this.stemLength/2)
        if (d < hand.size/2) {
            // if yes, the flower has been picked
            this.addToLeftHand();
            this.picked = true;
            pickedFlowers++;
            console.log("num of picked flowers:"+pickedFlowers);
        }
    }

    addToLeftHand() {
        this.x = width/10;
        this.y = 9*height/10 - this.stemLength;
    }
}