const React = require ('react');
const ReactDom = require('react-dom')
const GameView = require ('./components/GameView');
const GameObject = require ('./models/GameObject');

window.onload = ()=>{
  ReactDom.render(
    <GameView gameObject={new GameObject()}/>,
    document.getElementById("game-body"))
}