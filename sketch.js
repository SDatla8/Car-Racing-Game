var canvas, backgroundImage;
var cars;
var finished;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var rank=0;
var car1;
var car2;
var car3;
var car4;
var car1Img,car2Img,car3Img,car4Img
var form, player, game;
var startbg;
var track;

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}
function preload(){
car1Img=loadImage("images/car1.png");
car2Img=loadImage("images/car2.png");
car3Img=loadImage("images/car3.png");
car4Img=loadImage("images/car4.png");
startbg=loadImage("images/startbg.png");
track=loadImage("images/track.jpg");
}

function draw(){
  if(gameState===0){
    background(startbg); 
  }
  else if(gameState===2){
    background("turquoise")
  }
  if(playerCount === 4 && rank===0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2 && rank===4){
    game.end();
  }
  if(rank===4){
    game.update(2);

  }
}

