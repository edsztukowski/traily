var React = require('react');
var Jumbotron = require('./Jumbotron')

//Home includes
  //jumbotron Component
  //search bar Component
  //

function Home() {
  return (
    <div className="home-landing">
      <Jumbotron
        jumboText='Welcome to Trailsy'
        jumboImage='http://via.placeholder.com/1300x300'
        altTag='alt Text'
      />
      
    </div>
  )
}

module.exports = Home
