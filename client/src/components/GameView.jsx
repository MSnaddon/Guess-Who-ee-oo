const React = require ("react");
const Filter = require ('./Filter')
const Display = require('./Display')

const GameView = React.createClass({
  render: ()=>{
    return (
      <div>
        <Display remainingWho={this.props.gameObject.remaining}/>
        <Filter onSubmit={this.props.gameObject.submitQuery}/>
      </div>
    )
  }
})


module.exports = GameView