var React = require('react');
var Jumbotron = require('./Jumbotron');
var api = require('./utils/api')

//Home includes
  //jumbotron Component
  //search bar Component
  //

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    }
  }

  componentDidMount() {
    api.fetchTrails()
  }

render() {
  return (
    <div className="home-landing">
      <Jumbotron
        jumboText='Welcome to Trailsy'
        jumboImage={require('./images/traily-jumbo.jpeg')}
        altTag='Hiking in the forest'
      />
    </div>
  )
}
}

module.exports = Home
