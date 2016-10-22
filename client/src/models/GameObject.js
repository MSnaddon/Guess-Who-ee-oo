class GameObject{
  constructor(whoArray){
    this.remainingWhos = whoArray
    this.answerWho = this.pickWho()
  }
  pickWho(){
    //randomly assigned chosen who based on remaining whos
    return this.remainingWhos[Math.floor(Math.random()*this.remainingWhos.length)]
  }
}

module.exports = GameObject;