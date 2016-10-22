const React = require ("react");
const Filter = require ('./Filter')
const Display = require('./Display')

let GameView = React.createClass({
  getInitialState: function(){
    console.log(this.props.gameObject);
    return {remaining: this.props.gameObject.remainingWhos}
  },
  render: function(){
    return (
      <div>
        <h1>I am GameView</h1>
        <Display remainingWhos={this.state.remaining}/>
        <Filter />
      </div>
    )
  }
})


module.exports = GameView

//onSubmit={this.props.gameObject.submitQuery}
//remainingWho={this.props.gameObject.remaining}