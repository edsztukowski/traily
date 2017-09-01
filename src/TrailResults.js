var React = require('react');
var queryString = require('query-string');
var api = require('./utils/api');

class TrailResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    }
  }

  componentDidMount() {
    var search = queryString.parse(this.props.location.search)
    console.log(search)
    api.fetchTrails(search.city, search.state)
  }

  render() {
    return (
      <div>Test!</div>
    )
  }
}

module.exports = TrailResults
