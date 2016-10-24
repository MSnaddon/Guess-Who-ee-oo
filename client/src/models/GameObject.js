class GameObject{
  constructor(whoArray){
    this.remainingWhos = whoArray
    this.answerWho = this.pickWho()

  }
  pickWho(){
    //randomly assigned chosen who based on remaining whos
    return this.remainingWhos[Math.floor(Math.random()*this.remainingWhos.length)]
  }
  makeGuess(guessObject){
    let correct = this.answerWho[guessObject.category] === guessObject.value;
    this.remainingWhos = this.remainingWhos.filter((who)=>{
      return correct === (who[guessObject.category] === guessObject.value)
    })
  }
}

module.exports = GameObject;