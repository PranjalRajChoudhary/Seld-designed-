var database;
var form,player,game;
var gameState = 1,playerCount;
var allPlayers = [];
var playerA1,playerA2;
var playerB1,playerB2;
var allPlayersA;
var Spr;
var missile;

function preload(){
  MillitaryImg  = loadImage("Millitar image.jpg");
}

  function setup(){
  database = firebase.database();
  
  createCanvas(1490,700);

   game = new Game();
   game.getState();
   game.start();

   playerA1 = createSprite(50,250,20,20);
   playerA1.shapeColor = "blue";

   playerA2 = createSprite(50,350,20,20);

   playerA2.shapeColor = "blue";

   allPlayersA = [playerA1,playerA2]

   playerB1 = createSprite(50,450,20,20);
   playerB1.shapeColor = "red";

   playerB2 = createSprite(50,550,20,20);
   playerB2.shapeColor = "red";
   
    

}

function draw(){
  background("white")

 // console.log(playerCount);

  if(playerCount === 2){
   game.updateState(1);
  }

  game.getState();

  if(gameState === 1){
    clear();
  game.play();
 // drawSprites();
  }
 

drawSprites();
  
}
