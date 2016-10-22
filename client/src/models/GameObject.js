class GameObject{
  constructor(whoArray){
    this.remainingWhos = whoArray
    this.answerWho = this.pickWho()
  }
  pickWho(){
    //randomly assigned chosen who based on remaining whos
    return this.remainingWhos[Math.floor(Math.random()*this.remainingWhos.length)]
  }
 
  XNOR(bool1, bool2){
    return (bool1 && bool2) || (!bool1 && !bool2)
  }
}

module.exports = GameObject;