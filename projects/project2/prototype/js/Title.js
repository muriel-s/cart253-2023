class Title {
    constructor() {
        this.titleString = `Muriel's fun little quiz`;
    }

    draw() {
        background(0); // later set a dark color-changing bg
        this.displayTitle();
    }

    displayTitle() {

    }

    mousePressed() {
        currentState = new Quiz();
    }
}