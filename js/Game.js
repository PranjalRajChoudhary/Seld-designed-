class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    updateState(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      player = new Player();

      form = new Form();
      form.display();

        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }

    }

    play(){
      
       // form.hide();
      Player.getPlayerInfo();
  
     
      var rand = Math.round(random(1,4));
      var index = 0;
      var x;

       for(var plr in allPlayers){

        index += 1;
        
        database.ref('players/player'+index+'/x').on("value",(data)=>{
          allPlayersA[index-1].x = data.val();
        })
        database.ref('players/player'+index+'/y').on("value",(data)=>{
          allPlayersA[index-1].y = data.val();
        })

        if(index === player.index){

          if(keyDown("right")){
            allPlayersA[index - 1].x += 5;
            player.positionX += 5;

            player.update();
          }
          if(keyDown("left")){
            allPlayersA[index - 1].x -= 5;

           player.positionX -= 5;
          player.update();
          }
          if(keyDown("up")){
            allPlayersA[index - 1].y -= 5;

            player.positionY -= 5;
            player.update();
          }
          if(keyDown("down")){
            allPlayersA[index - 1].y += 5;

            player.positionY += 5;
            player.update();
          }
          if(keyDown("space")){
            var bullet = createSprite(allPlayersA[index - 1].x,allPlayersA[index - 1].y,5,5);
            bullet.setVelocity(5,0);
            database.ref('weapon').set({
              x : bullet.x,
              y : bullet.y,
              velocityX : 5
            })

          }

          missile = createSprite(5,5,5,5);
          
          database.ref('weapon/x').on("value",(data)=>{
            missile.x = data.val();
          })
          database.ref('weapon/y').on("value",(data)=>{
            missile.y = data.val();
          })
          database.ref('weapon/velocityX').on("value",(data)=>{
            missile.velocityX= data.val();
          })
        }
  
        }
  

}
  }
