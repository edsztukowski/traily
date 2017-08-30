var React = require('react');

function TrailList(props) {
  var trailArr = props.trailData;
  console.log(trailArr);
    return (
      <div className="row homepage-trails">
        <ul>
          {trailArr.map(function(curr, index) {
            function decodeHtml(html) {
                var txt = document.createElement("textarea");
                txt.innerHTML = html;
                return txt.value;
            }
            if (index < 15) {
              return (
                <div key={curr.unique_id}>
                <li className="trail-box col-md-4">
                  <h2>{curr.name}</h2>
                  <p>{decodeHtml(curr.activities[0].description).replace(/<br\s*\/?>/gi,'')}</p>
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
