var playerCarimg, playerCarimg2;
var game,
  form,
  gameState = 0;
var coinImg, TrackImg, oilCanImg, carFlipImg, formimg;
var score = 0;
var car1, car2;
var  swooshS;
var track,coinGrp, oilGrp,flipped;
var Score=0;
var myInterval,
  flag = 4;

function preload() {
  playerCarimg = loadImage("GCimg/car1.png");
  playerCarimg2 = loadImage("GCimg/car2.png");
  coinImg = loadImage("GCimg/CoinImg.png");
  TrackImg = loadImage("GCimg/track.jpg");
  oilCanImg = loadImage("GCimg/oilCan1.png");
  carFlipImg = loadImage("GCimg/carFlip.jpg");
  formimg = loadImage("GCimg/formimg4.jpg");
  swooshS = loadSound("sounds/swoosh.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new Game();
  game.start();
}


function draw() {
  background(formimg); 
  TrackImg.scale = 0.1; 
  if (gameState === 1) {
    game.play();
  }
}
