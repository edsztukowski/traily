var React = require('react');
var Jumbotron = require('./Jumbotron');
var Search = require('./Search');
var api = require('./utils/api');
var TrailList = require('./TrailList')

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trailData: [],
      lat: '',
      long: ''
    }
    this.getCoords = this.getCoords.bind(this);

  }

  getCoords = function() {
    navigator.geolocation.getCurrentPosition(function(location) {
    this.setState(function() {
      return {
        lat: location.coords.latitude,
        long: location.coords.longitude
      }
    })
    api.fetchTrailsLocation(this.state.lat, this.state.long)
    .then(function (response) {
      this.setState(function () {
        return {
          trailData: response,
        }
      })
    }.bind(this))
  }.bind(this));

  }

  componentDidMount() {
    this.getCoords();
  }

render() {
  return (
    <div className="home-landing">
      <Jumbotron
        jumboText='Welcome to Trailsy'
        jumboImage={require('./images/traily-jumbo.jpeg')}
        altTag='Hiking in the forest'
      />
      <Search  />
      <TrailList trailData={this.state.trailData} />
    </div>
  )
}
}

module.exports = Home
