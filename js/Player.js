class Player{
constructor(){
this.name=null
this.index=null
}
getCount(){
    var gameCounteRef  = database.ref('playerCount');
    gameCounteRef.on("value",function(data){
       playerCount = data.val();
    })
   
} 
updateCount(Count){
    database.ref('/').update({
      playerCount:Count
    });
  }


}