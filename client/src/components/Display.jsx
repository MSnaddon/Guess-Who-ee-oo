const React = require('react');

const Display = (props)=>{
  console.log(props)
  let remainingDisplay = props.remainingWhos.map(function(item, index){
    return (
      <div className="who-item-display" key={index}>
        <h4>{item.name}</h4>
      </div>
      )
  })
  console.log(remainingDisplay);
  return (
    <div id="remainingDisplay">
      {remainingDisplay}
    </div>
  )
}

module.exports = Display