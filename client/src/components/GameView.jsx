const React = require ("react");
const FilterFeature = require ('./FilterFeature')
const Display = require('./Display')

let GameView = React.createClass({
  getInitialState: function(){
    return { remaining: this.props.gameObject.remainingWhos }
  },
  handleFilterSubmit: function(guessObject){
    this.props.gameObject.makeGuess(guessObject)
    this.setState({remaining: this.props.gameObject.remainingWhos});
  },
  render: function(){
    return (
      <div>
        <Display remainingWhos={this.state.remaining}/>
        <FilterFeature onSubmit={this.handleFilterSubmit} remainingWhos={this.state.remaining} />
      </div>
    )
  }
})


module.exports = GameView

//onSubmit={this.props.gameObject.submitQuery}
//remainingWho={this.props.gameObject.remaining}