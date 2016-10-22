const React = require ('react');
const ReactDom = require('react-dom')
const GameView = require ('./components/GameView');
const GameObject = require ('./models/GameObject');


window.onload = ()=>{

  // TODO get information for Game via api and pass render as callback


  ReactDom.render(
    <GameView gameObject={new GameObject(require('./models/jsonData'))}/>,
    document.getElementById("game-body"))
}