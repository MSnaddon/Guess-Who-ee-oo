const React = require('react');

const Display = (props)=>{
  let remainingDisplay = props.remainingWhos.map(function(item, index){
    return (
      <div className="who-item-display" key={index}>
        <h4>{item.name}</h4>
        <ul>
          <li>Hat : {item.hat}</li>
          <li>Scarf : {item.scarf}</li>
          <li>Attitude : {item.attitude}</li>
        </ul>
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