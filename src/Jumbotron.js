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

Jumbotron.propTypes = {
  jumboImage: PropTypes.string.isRequired,
  altTag: PropTypes.string,
  jumboText: PropTypes.string
}

module.exports = Jumbotron;
