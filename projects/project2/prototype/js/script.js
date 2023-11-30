/**
 * Project 2 Prototype
 * Muriel
 * 
 * Quiz test
 */

"use strict";

var coolville;
var starImg;

let currentState;

let QuizQuestions = [
    [`Do you jaywalk?`, `Only if the street is quiet.`, `It's like a game to me!`, `Never!`],
    [`How long does it take you to fall asleep?`, `I fall asleep when I decide to.`, `... Ten minutes?`, `It's a multi-hour process.`],
    [`What is your studying style?`, `I prefer to study in a group!`, `I like to study a little bit every day.`, `Usually at the last minute, in a rush...`],
    [`You're in the bathroom at a club and someone is crying with their friend about their recent breakup. What do you do?`, `Give them privacy.`, `Say something nice then leave.`, `Get into a deep conversation that ends with you complimenting each other before going back out to never meet again.`],
    [`You're meeting someone new, and they tell you their field of study - it sounds completely made up. What's your next question?`, `"So what jobs can you get with that?"`, `"I've never heard of that, what is it?"`, `"Do you enjoy it?"`, `"How did you even find out about that?"`],
    [`When you stand up too fast and get dizzy, how does it feel?`, `Ethereal.`, `Scary.`],
    [`Do you lie at self-checkout machines?`, `Only if I think I can get away with it.`, `I'll ring up parmesan as green beans. Who cares?`, `Never, it's not worth the risk!`, `Too much effort, I'd rather not.`],
    [`Someone brought donuts for the break room at work, but there's only one left!`, `Everyone had their chance, it's jungle rules now!`, `One donut is enough for me.`, `I'll take it home for my roommate, if no one else takes it by the end of the day.`],
    [`You want to ask someone out on a date! What do you do?`, `Ask them out, and if they say no, play it off like I'm inviting them to a group activity.`, `Ask them over text...`, `I ask them out on a date, obviously!`, `Yearn in silence...`],
    [`What kind of dreams do you most often have?`, `A lot of nonsense.`, `Adventures!`, `I dream about realistic scenarios.`, `Nightmares.`],
];

var answer1;
var answer2;
var answer3;
var answer4;

var selectedAnswers = [];

var trusting = 0;
var cautious = 0;
var instinctive = 0;
var thoughtful = 0;
var straightforward = 0;
var sophisticated = 0;
var sensitive = 0;
var hardy = 0;
var ambitious = 0;
var content = 0;
var earnest = 0;
var cool = 0;
var playful = 0;
var efficient = 0;
var relaxed = 0;
var excitable = 0;

function preload() {
    // load font
    coolville = loadFont('assets/fonts/Coolville.ttf');
    // load image for cursor icon
    starImg = loadImage('assets/images/star.png');
}

function setup() {
    createCanvas(1000, 1000);
    colorMode(HSB);
    frameRate(12);
    noCursor();
    console.table(QuizQuestions);

    currentState = new Title();
}

function draw() {
    currentState.draw();
    
    console.log(`trusting: ` + trusting);
    console.log(`cautious: ` + cautious);
    console.log(`instinctive: ` + instinctive);
    console.log(`thoughtful: ` + thoughtful);
    console.log(`straightforward: ` + straightforward);
    console.log(`sophisticated: ` + sophisticated);
    console.log(`sensitive: ` + sensitive);
    console.log(`hardy: ` + hardy);
    console.log(`ambitious: ` + ambitious);
    console.log(`content: ` + content);
    console.log(`earnest: ` + earnest);
    console.log(`cool: ` + cool);
    console.log(`playful: ` + playful);
    console.log(`efficient: ` + efficient);
    console.log(`relaxed: ` + relaxed);
    console.log(`excitable: ` + excitable);
}

function mousePressed() {
    currentState.mousePressed();
}
