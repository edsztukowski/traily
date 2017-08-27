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
                <li key={curr.unique_id} className="trail-box col-md-4">
                  {curr.name}
                </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }

module.exports = TrailList
