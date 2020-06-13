class Player {
    constructor(){
    this.name = null;
    this.distance = 0;
    this.index = null;
    this.rank = null;
    }
    getCount(){
        var playerCountRef=database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        })
    }
    updateCount (count){
        database.ref("/").update({
            playerCount:count

        })
    }
    update (){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }

    static getPlayerInfo(){
        var playerInfoRef=database.ref("players");
        playerInfoRef.on("value",(data)=>{
            allPlayers=data.val();
        })
        }
        getRank (){
            var playerRankRef = database.ref("CarsAtEnd");
            playerRankRef.on("value",(data)=>{
                this.rank=data.val();
            
            })
        }
static updateRank(rank){
    database.ref("/").update({
        CarsAtEnd:rank
    })
}
}