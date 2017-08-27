var React = require('react');

function TrailList(props) {
  var trailArr = props.trailData;
  console.log(trailArr);
    return (
      <div className="row homepage-trails">
        <ul>
          {trailArr.map(function(curr, index) {
            if (index < 15) {
              return (
                <div key={curr.unique_id}>
                <li className="trail-box col-md-4">
                  <h2>{curr.name}</h2>
                  <p>{curr.activities[0].description}</p>
                </li>
                </div>
              )
            }
          })}
        </ul>
      </div>
    )
  }

module.exports = TrailList
