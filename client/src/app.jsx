const React = require ('react');
const ReactDom = require('react-dom')
const GameView = require ('./components/GameView');
const GameObject = require ('./models/GameObject');

window.onload = ()=>{

  // TODO get information for Game via api and pass render as callback
  let JsonData = [{
    name: "12th",
    hat: true,
    scarf: true
  },{
    name: "11th",
    hat: true,
    scarf: false
  },{
    name: "10th",
    hat: false,
    scarf: false
  }]

  ReactDom.render(
    <GameView gameObject={new GameObject(JsonData)}/>,
    document.getElementById("game-body"))
}