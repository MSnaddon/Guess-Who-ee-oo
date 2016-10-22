class GameObject{
  constructor(whoArray){
    console.log("game being made")
    this.remainingWhos = whoArray
    this.answerWho = this.pickWho()
  }
  pickWho(){

    return this.remainingWhos[Math.floor(Math.random()*this.remainingWhos.length)]
  }

}

module.exports = GameObject;