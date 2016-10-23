const React = require('react');

const Display = (props)=>{
  let remainingDisplay = props.remainingWhos.map(function(whoObject, index){
    return (
      <div className="who-item-display" key={index}>

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