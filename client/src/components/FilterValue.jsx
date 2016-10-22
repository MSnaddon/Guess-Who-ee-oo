const React = require('react');

const FilterValue = (props) =>{
  let featureValueOptions = props.remainingWhos
  .map( (whoObject) => { return whoObject[props.focusFeature] } )
  .filter( (feature, index, self) => { return self.indexOf(feature) === index } )
  
  console.log(featureValueOptions)

  return <div><h5>I am FilterValue</h5></div>
}


module.exports = FilterValue