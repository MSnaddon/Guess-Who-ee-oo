const assert = require('assert')
const GameObject = require('../GameObject')

let JsonData = [{
  name: "12th",
  hat: "Yes",
  scarf: "Yes",
},{
  name: "11th",
  hat: "Yes",
  scarf: "No"
},{
  name: "10th",
  hat: "No",
  scarf: "No"
}]


describe("The game", function(){
  let game;

  beforeEach(function(){
    game = new GameObject(JsonData);
  })

  it("should store a list of remaining candidates", function(){
    assert.equal(game.remainingWhos.length, 3);
  })

  it("should pick a winning candidate", function(){
    // console.log(game.answerWho)
    assert.ok(game.answerWho);
  })

  it("should filter true from a correct guess",function(){
    game.answerWho = {
      name: "10th",
      hat: "No",
      scarf: "No"
    }
    game.makeGuess({category: "hat", value: "Yes"})
    assert.equal(game.remainingWhos.length, 1)
  })

})