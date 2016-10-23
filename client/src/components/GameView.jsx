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
      <div id="game-container">
        <div id="game-header">
          <h1> Guess Who-ee-oo</h1>
          <FilterFeature onSubmit={this.handleFilterSubmit} remainingWhos={this.state.remaining} />
        </div>
        <div>
          <Display remainingWhos={this.state.remaining}/>
          <audio src="./music/Doctor_Who.mp3" type="audio/mpeg" autoPlay loop/>
        </div>
      </div>
    )
  }
})


module.exports = GameView

//onSubmit={this.props.gameObject.submitQuery}
//remainingWho={this.props.gameObject.remaining}