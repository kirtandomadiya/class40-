class Form {
    constructor (){
        this.input = createInput("name");
        this.button = createButton('play');
        this.greeting=createElement("h3");
        this.reset = createButton('reset');
    }
    display(){
        var title=createElement('h2', 'Multiplayer Car RacingGame');
        title.position(displayWidth/2-70,0);
        
        this.input.position(displayWidth/2-40,displayHeight/2-25);
      
 this.button.position(displayWidth/2+30, displayHeight/2+25);
 this.reset.position(displayWidth-100,25);
  this.reset.mousePressed(()=>{ game.update(0);
    Player.updateRank(0);
player.updateCount(0);
})
     
  
  
  this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
      player.name = this.input.value();
      playerCount=playerCount+1;
      player.updateCount(playerCount);
      player.index = playerCount;
      player.update();
      this.greeting.html("hello"+player.name);
      this.greeting.position(displayWidth/2-70,displayHeight/4);
  })
  
    }
hide(){
    this.greeting.hide();
    
}
}