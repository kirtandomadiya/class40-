class Game {
    constructor (){
 }

 getState (){
     var getStateRef=database.ref("gameState");
     getStateRef.on("value",function(data){
         gameState=data.val();
     })
 }

 update(state){
     database.ref("/").update({
         gameState:state
     })
 }

 async start(){
    
     if(gameState===0){
         form=new Form();
         form.display();
         player=new Player();
         var playerCountRef = await database.ref("playerCount").once("value");
         if(playerCountRef.exists()){
             playerCount = playerCountRef.val();
            player.getCount();
         }
        

     }
     car1 =createSprite (100,200);
     car1.addImage("car1",car1img);
     car2 = createSprite (300,200);
     car2.addImage("car2",car2img);
     car3 = createSprite(500,200);
     car3.addImage("car3",car3img);
     car4 = createSprite (700,200);
     car4.addImage("car4",car4img);
     cars = [car1,car2,car3,car4];

 }
 play(){
     form.hide();
     textSize(15);
    
     Player.getPlayerInfo();
     player.getRank();
     if (allPlayers!==undefined){
        background("red");
        image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5);
        // var display_position = 130;
        //index of the array
        var index =0

        //x and y position of the car
        var x=150;
        var y;

         for (var plr in allPlayers){
        // display_position +=20;
index= index+1;
         //text (allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);}
         //position the cars a little away from each other in x direction
         x= x +200;
         //use data from the database to display the cars in y direction
         y = displayHeight-allPlayers[plr].distance;
         cars [index-1].x=x;
         cars [index-1].y=y;
         if (index===player.index){
             fill ("black");
             ellipse(x,y,60,60);

             cars [index-1].shapeColor="red";
             camera.position.x = displayWidth/2;
             camera.position.y = cars[index-1].y;

         }
         console.log(allPlayers[plr].distance);
         }
        }
        if (player.distance>3400){
            gameState=2;
player.rank=player.rank+1;
Player.updateRank(player.rank);
fill("black");
text (player.name+" rank is "+player.rank,displayWidth/2-200,y-200);

        }
if (keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance += 50;
    carsound.play();
    player.update();
}
drawSprites();
 }
}