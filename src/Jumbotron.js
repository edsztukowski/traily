var React = require('react');
var PropTypes = require('prop-types');

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <img src={props.jumboImage} alt={props.altTag} />
      <h1>{props.jumboText}</h1>
    </div>
  )
}



module.exports = Jumbotron;
