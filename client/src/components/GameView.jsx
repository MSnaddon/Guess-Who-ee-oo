const React = require ("react");
const FilterFeature = require ('./FilterFeature')
const Display = require('./Display')

let GameView = React.createClass({
  getInitialState: function(){
    console.log("GameObject", this.props.gameObject);
    return { remaining: this.props.gameObject.remainingWhos }
  },
  handleFilterSubmit: function(){

    this.setState({remaining: this.props.gameObject.remainingWhos});
  },
  render: function(){
    return (
      <div>
        <h1>I am GameView</h1>
        <Display remainingWhos={this.state.remaining}/>
        <FilterFeature onSubmit={this.handleFilterSubmit} remainingWhos={this.state.remaining} />
      </div>
    )
  }
})


module.exports = GameView

//onSubmit={this.props.gameObject.submitQuery}
//remainingWho={this.props.gameObject.remaining}