var React = require('react');
var Jumbotron = require('./Jumbotron');
var Search = require('./Search')

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
    console.log('get coords fired')
    navigator.geolocation.getCurrentPosition(function(location) {
    this.setState(function() {
      return {
        lat: location.coords.latitude,
        long: location.coords.longitude
      }
    })
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
    </div>
  )
}
}

module.exports = Home
