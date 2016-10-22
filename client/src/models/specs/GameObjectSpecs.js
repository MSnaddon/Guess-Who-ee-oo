const assert = require('assert')
const GameObject = require('../GameObject')

const JsonData = [{
  name: "who",
  hat: true,
  scarf: true
},{
  name: "what",
  hat: true,
  scarf: false
}]


describe("The game", function(){
  let game;

  beforeEach(function(){
    game = new GameObject(JsonData);
  })

  it("should store a list of remaining candidates", function(){
    assert.equal(game.remainingWhos.length, 2);
  })

  it("should pick a winning candidate", function(){
    // console.log(game.answerWho)
    assert.ok(game.answerWho);
  })

})