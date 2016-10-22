const React = require ('react');
const ReactDom = require('react-dom')
const GameView = require ('./components/GameView');
const GameObject = require ('./models/GameObject');

window.onload = ()=>{

  // TODO get information for Game via api and pass render as callback
  let JsonData = [{
    name: "12th",
    hat: "Yes",
    scarf: "Yes",
    attitude: "badass"
  },{
    name: "11th",
    hat: "Yes",
    scarf: "No"
  },{
    name: "10th",
    hat: "No",
    scarf: "No"
  }]

  ReactDom.render(
    <GameView gameObject={new GameObject(JsonData)}/>,
    document.getElementById("game-body"))
}