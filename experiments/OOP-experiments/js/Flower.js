class Flower {

    constructor(size, stemLength, petalColor) {
        // position and size information
        this.x = random(0, width);
        this.y = random(0, height);
        this.size = size;
        this.maxSize = size;
        this.stemLength = stemLength;
        this.stemThickness = 10;
        this.petalThickness = 10;
        this.maxPetalThickness = 10;
        // color information
        this.stemColor = {
            r: 50,
            g: 150,
            b: 50
        };
        this.petalColor = petalColor;
        this.centreColor = {
            r: 50,
            g: 0,
            b: 0
        };
        this.alive = true;
    }

    shrink() {
        let shrinkage = random(0, 0.1);
        this.size -= shrinkage;
        this.petalThickness -= shrinkage/10;

        if (this.size <= 0 || this.petalThickness <= 0) {
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
        let growth = random(0, 0.5);
        this.size += growth;
        this.petalThickness += growth/10;

        this.size = constrain (this.size, 0, this.maxSize);
        this.petalThickness = constrain(this.petalThickness, 0, this.maxPetalThickness);
    }

    // mousePressed() {
    //     let d = dist(this.x, this.y, mouseX, mouseY);
    //     if (d < this.size/2 + this.petalThickness) {
    //         this.stemLength += 10;
    //         this.y -= 10;
    //     }
    // }
}