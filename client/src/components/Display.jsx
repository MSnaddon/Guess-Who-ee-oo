const React = require('react');

const Display = (props)=>{
  let remainingDisplay = props.remainingWhos.map(function(whoObject, index){
    return (
      <div className="who-item-display" key={index}>
        <h4>{whoObject.name}</h4>

        <img src={"./images/" + whoObject.img}/>
      </div>
      )
  })

  return (
    <div id="remaining-display">
      {remainingDisplay}
    </div>
  )
}

module.exports = Display