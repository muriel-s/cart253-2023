/**
 * Project 2
 * Muriel
 */
/**
 *  ATTRIBUTIONS
 * 
 * Tooltip workaround
 * https://stackoverflow.com/questions/68476226/how-can-i-create-a-tooltip-on-mouse-over-in-p5js
 * 
 * Music
 * https://pippinbarr.com/cart253/topics/sound/reintroducing-p5-sound.html
 * 
 * Quiz organization reference
 * https://docs.google.com/spreadsheets/d/18utO_lCpWQ7iXY9wpbtxXpgmzebEI2IRjADp6IrUKZ0/view#gid=422133115
 * 
 * Main inspiration
 * https://github.com/Nrosa01/pmd-quiz-online/tree/main
 * 
 * Organization of states
 * https://github.com/pippinbarr/cart253/tree/main/examples/structure/oop-states/js
 * 
 * 2D Array
 * https://www.freecodecamp.org/news/javascript-2d-arrays/
 * 
 * OOP and mousePressed()
 * https://pippinbarr.com/cart253/topics/object-oriented-programming/object-oriented-programming-and-p5-events.html
 * 
 * mousePressed restricted to area
 * https://stackoverflow.com/questions/40807945/mousepressed-within-certain-region-in-processing
 * 
 * Sine wave formula
 * https://p5js.org/reference/#/p5/sin
 * 
 * Creating visual noise
 * https://pippinbarr.com/cart253/activities/dodging-covid19.html
 * 
 * 
 */

"use strict";

// elements
var bgSong;
var starImg;
var eventSound;

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
    /* 21 */[`When someone makes a rude comment, what do you do?`, `Call them out!`, `Ask them to repeat it to make them feel bad.`, `Ignore it.`],
    /* 22 */[`At a restaurant, what do you order?`, `Something tasty.`, `Something financially responsible.`, `Something healthy.`, `Something I never eat.`],
    /* 23 */[`What is your biggest worry when you have a party coming up?`, `That I won't have fun.`, `That people won't like me...`, `That I'll mess up my sleep schedule!`],
    /* 24 */[`Do movies make you cry?`, `All the time!`, `A reasonable amount.`, `It's rare.`],
    /* 25 */[`Your friend stopped talking to you out of the blue. You think...`, `Are they okay?`, `What did I do?`, `They're probably busy.`],
    /* 26 */[`You've done something embarrassing! You...`, `Laugh it off!`, `Get frustrated and tear up.`, `Shake it off and cringe later.`],
    /* 27 */[`Do you follow the five-second rule?`, `I would eat a sandwich from the bottom of my bag.`, `Sure, I won't die.`, `Not worth it.`],
    /* 28 */[`Do you stick with your New Years resolutions?`, `For a week...`, `I did my best!`, `What resolutions?`],
    /* 29 */[`Your friend laughs super loud while you're walking down a busy, but quiet street.`, `Their laugh makes me laugh!`, `Oh no, people turned around to look at us...`],
    /* 30 */[`You got free tickets for a spa day! Are you going to go?`, `Yay! I can't wait to relax!`, `Sounds boring, I'll give them to someone else.`, `I'll invite my friend I haven't seen in ages!`],
    /* 31 */[`Do you spend more time planning things than actually doing them?`, `Yes.`, `No.`],
    /* 32 */[`You're at the end of a great first date. How do you say goodbye to them?`, `Play it cool.`, `Tell them I had a wonderful time.`, `Ask them if they're free next Friday.`],    
    /* 33 */[`When you walk with others, do you usually know the directions?`, `Of course!`, `I usually follow.`],
    /* 34 */[`Do you focus better in silence or with background noise?`, `In silence.`, `With background noise.`],
    /* 35 */[`If you could freeze time, what would you do with this power?`, `Sleep more!`, `Spend hours learning new skills.`, `Prank people.`, `Never hand in anything late again!`],
    /* 36 */[`Your waiter tells you not to touch your plate because it's hot.`, `I test that out for myself and burn my fingers.`, `I give it a minute.`],
    /* 37 */[`Do you make itineraries for vacations?`, `Always!`, `I have a general list of things to do.`, `Nah, I'm trying to relax.`],
    /* 38 */[`Your best friend shows you their bold new outfit, and it looks goofy. How do you react?`, `Make fun of them. They know me!`, `If they like it, I love it.`, `Offer to come with them next time they go shopping.`],
    /* 39 */[`What are you like in a fight with a loved one?`, `I do what I can to keep it calm.`, `Scared and sad...`, `I blow up.`, `Quiet and cold.`],
    /* 40 */[`Do you think mostly in pictures or in words?`, `In vivid 4D video, with smells.`, `In pictures.`, `In words.`, `What?`],
    /* 41 */[`What's most important to you in your ideal job?`, `Enough money to never worry about finances.`, `Enough free time to live my life.`, `Doing something I'm passionate about.`, `Doing something I find fun.`],
    /* 42 */[`Did you like studying in college?`, `I loved learning!`, `I mostly just tried to pass.`, `I was competitive about my grades.`],
    /* 43 */[`Whats more important to you in a relationship?`, `That they can make me laugh.`, `That I can make them laugh.`],
];

var answer1;
var answer2;
var answer3;
var answer4;

// empty array to store selected answers
var selectedAnswers = [];

// traits
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
    // load image for cursor icon
    starImg = loadImage('assets/images/star.png');
}

function setup() {
    createCanvas(1000, 1000);
    colorMode(HSB);
    frameRate(12);
    noCursor();
    console.table(QuizQuestions);

    // plays background music
    userStartAudio();
    bgSong.setVolume(0.6);
    bgSong.play();
    bgSong.loop();

    eventSound = new p5.PolySynth();

    currentState = new Title();
}

function draw() {
    currentState.draw();
}

function mousePressed() {
    currentState.mousePressed();
}
