var React = require('react');
var Jumbotron = require('./Jumbotron');

//Home includes
  //jumbotron Component
  //search bar Component
  //

function Home() {
  return (
    <div className="home-landing">
      <Jumbotron
        jumboText='Welcome to Trailsy'
        jumboImage={require('./images/traily-jumbo.jpeg')}
      />
    </div>
  )
}

module.exports = Home
