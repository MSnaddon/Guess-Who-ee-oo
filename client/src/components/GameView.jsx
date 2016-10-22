const React = require ("react");
const Filter = require ('./Filter')
const Display = require('./Display')

const GameView = React.createClass({
  render: ()=>{
    return (
      <div>
        <h1>I am GameView</h1>
        <Display />
        <Filter />
      </div>
    )
  }
})


module.exports = GameView

//onSubmit={this.props.gameObject.submitQuery}
//remainingWho={this.props.gameObject.remaining}