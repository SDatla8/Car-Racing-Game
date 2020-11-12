class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();

      }
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200);
    car2=createSprite(130,200);
    car3=createSprite(160,200);
    car4=createSprite(190,200);
    cars=[car1,car2,car3,car4]
finished=false;
 car1.addImage("car1",car1Img);
 car2.addImage("car2",car2Img);
 car3.addImage("car3",car3Img);
 car4.addImage("car4",car4Img);
  }

  play(){
    form.hide();
    Player.getPlayerInfo();
player.getRank();
    if(allPlayers !== undefined){
      var index=0;
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
      var x=240;
      var y;
      var display_position = 130;
      for(var plr in allPlayers){
        index=index+1;
        x=x+290;
        y=displayHeight-allPlayers[plr].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;

        if(index===player.index){
          stroke(10);
          fill("lime");
          ellipse(x,y,60,60);
          cars[index-1].shapeColor="teal";
          camera.position.x=displayWidth/2;
          camera.position.y=cars[index-1].y;
        }

      
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null && finished!==true){
      player.distance +=50
      player.update();
    }
    if(player.distance>5150&&finished===false){
     Player.updateRank()
     player.rank=rank;
player.update();
finished=true;
    }
    drawSprites();
  }
  end(){
  camera.position.x=0;
  camera.position.y=0;
  textSize(50);
  Player.getPlayerInfo();
  for (var plr in allPlayers){
    if (allPlayers[plr].rank===1){
text("FIRST IS:  "+allPlayers[plr].name,20,50)
    }

    else if(allPlayers[plr].rank===2){
      text("SECOND IS:  "+allPlayers[plr].name,20,100) 
    }
    else if(allPlayers[plr].rank===3){
      text("THIRD IS:  "+allPlayers[plr].name,20,150) 
    }
    else{
      text("LAST IS:  "+allPlayers[plr].name,20,200) 
   
    }
      
  }
  }
}
