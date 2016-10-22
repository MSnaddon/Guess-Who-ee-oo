class GameObject{
  constructor(whoArray){
    this.remainingWhos = whoArray
    this.answerWho = this.pickWho()
  }
  pickWho(){

    return ""
  }

}

module.exports = GameObject;