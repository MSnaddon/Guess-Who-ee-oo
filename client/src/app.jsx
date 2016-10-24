const React = require ('react');
const ReactDom = require('react-dom')
const GameView = require ('./components/GameView');
const GameObject = require ('./models/GameObject');
const apiRequester = require('./models/apiRequester')


window.onload = ()=>{


  //should this be ing GameView and the Whos loaded by a instance method??
  const renderWhoGame = function(progressEvent){
    let whoData = JSON.parse(progressEvent.target.response);
    console.log(whoData);
    ReactDom.render(
      <GameView gameObject={new GameObject(whoData)}/>,
      document.getElementById("game-body"))
  }

  // TODO get information for Game via api and pass render as callback
  const whoData = apiRequester("http://localhost:3000/api/whoGuess", renderWhoGame)


}

