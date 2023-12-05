/**
 * Project 2 Prototype
 * Muriel
 * 
 * Quiz test
 */

"use strict";

var bgSong;
var coolville;
var starImg;

let currentState;

let QuizQuestions = [
    /* 0 */[`Do you jaywalk?`, `Only if the street is quiet.`, `It's like a game to me!`, `Never!`],
    /* 1 */[`How long does it take you to fall asleep?`, `I fall asleep when I decide to.`, `... Ten minutes?`, `It's a multi-hour process.`],
    /* 2 */[`What is your studying style?`, `I prefer to study in a group!`, `I like to study a little bit every day.`, `Usually at the last minute, in a rush...`],
    /* 3 */[`You're in the bathroom at a club and someone is crying with their friend about their recent breakup. What do you do?`, `Give them privacy.`, `Say something nice then leave.`, `Get into a deep conversation that ends with you complimenting each other before going back out to never meet again.`],
    /* 4 */[`You're meeting someone new, and they tell you their field of study - it sounds completely made up. What's your next question?`, `"So what jobs can you get with that?"`, `"I've never heard of that, what is it?"`, `"Do you enjoy it?"`, `"How did you even find out about that?"`],
    /* 5 */[`When you stand up too fast and get dizzy, how does it feel?`, `Ethereal.`, `Scary.`],
    /* 6 */[`Do you lie at self-checkout machines?`, `Only if I think I can get away with it.`, `I'll ring up parmesan as green beans. Who cares?`, `Never, it's not worth the risk!`, `Too much effort, I'd rather not.`],
    /* 7 */[`Someone brought donuts for the break room at work, but there's only one left!`, `Everyone had their chance, it's jungle rules now!`, `One donut is enough for me.`, `I'll take it home for my roommate, if no one else takes it by the end of the day.`],
    /* 8 */[`You want to ask someone out on a date! What do you do?`, `Ask them out, and if they say no, play it off like I'm inviting them to a group activity.`, `Ask them over text...`, `I ask them out on a date, obviously!`, `Yearn in silence...`],
    /* 9 */[`What kind of dreams do you most often have?`, `A lot of nonsense.`, `Adventures!`, `I dream about realistic scenarios.`, `Nightmares.`],
    /* 10 */[`Someone on the bus is stinking up the place. What do you do?`, `Figure out who it is and sit away from them.`, `Try to ignore it. Some people are less fortunate than me...`, `I'm annoyed. It's rude to smell in a small space!`],
    /* 11 */[`How often do you try a new recipe?`, `Almost never.`, `Whenever I have the time and energy!`, `Every now and then.`],
    /* 12 */[`You're in a class with nobody you know. Do you make friends?`, `Of course!`, `I'll try to make a friend or two.`, `Only by accident.`, `I'll be friendly, but I don't need more friends.`],
    /* 13 */[`What do you look at most on the Internet?`, `Funny stuff.`, `What my friends are up to!`, `I like to learn new things on the Internet.`],
    /* 14 */[`How old do you feel?`, `Like I was just a kid yesterday!`, `I feel like my age.`, `I feel way older than my real age.`, `I don't know, it changes all the time!`],
    /* 15 */[`Do you like astrology?`, `Yeah!`, `It's fun, but I'm not sure I believe it.`, `Not my thing.`, `I think it's a waste of time.`],
    /* 16 */[`Can you forgive someone that hurt you?`, `Yes.`, `No.`, `Forgive, but not forget.`],
    /* 17 */[`It's the first day of school! How do you feel?`, `Excited!`, `Anxious.`, `Fine.`],
    /* 18 */[`Have you ever realized after the fact that you made a conversation all about you?`, `Yes.`, `No.`, `Now I am...`],
    /* 19 */[`Do you think you could keep calm if you were getting covered with bees?`, `No chance.`, `Only for so long...`, `Yes.`],
    /* 20 */[`Are you competitive?`, `Yes.`, `No.`, `Only against myself.`],
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
    // load music
    bgSong = loadSound(`assets/sounds/aura-generator-music.m4a`);
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

    userStartAudio();
    bgSong.play();
    bgSong.loop();

    currentState = new Title();
}

function draw() {
    currentState.draw();
}

function mousePressed() {
    currentState.mousePressed();
}
