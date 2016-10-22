class GameObject{
  constructor(whoArray){
    this.remainingWhos = whoArray
    this.answerWho = this.pickWho()
    console.log(this.answerWho)
  }
  pickWho(){
    //randomly assigned chosen who based on remaining whos
    return this.remainingWhos[Math.floor(Math.random()*this.remainingWhos.length)]
  }
  makeGuess(guessObject){
    let correct = this.answerWho[guessObject.category] === guessObject.value;
    this.remainingWhos = this.remainingWhos.filter((who)=>{
      return this.XNOR(correct, who[guessObject.category] === guessObject.value)
    })
    console.log (this.remainingWhos)

  }
  XNOR(bool1, bool2){
    return (bool1 && bool2) || (!bool1 && !bool2)
  }
}

module.exports = GameObject;