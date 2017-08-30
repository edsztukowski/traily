var React = require('react');
var PropTypes = require('prop-types');
var Search = require('./Search');

function Jumbotron(props) {
  return (
    <div className="jumbo">
      <img src={props.jumboImage} alt={props.altTag} />
      <div className="search-container">
        <h1>{props.jumboText}</h1>
        {props.children}
      </div>
    </div>
  )
}

Jumbotron.propTypes = {
  jumboImage: PropTypes.string.isRequired,
  altTag: PropTypes.string,
  jumboText: PropTypes.string
}

module.exports = Jumbotron;
