var React = require('react');
var Jumbotron = require('./Jumbotron');
var Search = require('./Search')

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    }
  }

render() {
  return (
    <div className="home-landing">
      <Jumbotron
        jumboText='Welcome to Trailsy'
        jumboImage={require('./images/traily-jumbo.jpeg')}
        altTag='Hiking in the forest'
      />
      <Search />
    </div>
  )
}
}

module.exports = Home
