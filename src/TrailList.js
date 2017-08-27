var React = require('react');

function TrailList(props) {
  var trailArr = props.trailData;
  console.log(trailArr);
    return (
      <div>
      <ul>
        {trailArr.map(function(curr, index) {
          return (
          <li key={index}>
            {curr.name}
          </li>
        )
        })}
        </ul>
      </div>
    )
  }

module.exports = TrailList
