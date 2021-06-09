class Quiz {
  constructor(){
    this.index = null;
    this.answer= 0;
    this.name = null;
    
  }

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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();


    //write code to change the background color here
   
   
    

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here
   
    if(allContestants !== undefined){
      var display_position=130;
      fill("Blue");
      textSize(20);             
      text("NOTE: Contestant who answered correct are highlighted in green colour!",quizStart,130,230);
    }
      

         //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctANS = "2";
      if(correctANS=== allContestants[plr].answer)
      fill("Green")
      else
      fill("red");

  
    }
    
  }
}
