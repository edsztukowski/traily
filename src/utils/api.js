
var axios = require('axios');

function fetchTrails() {
  var apiKey = 'oREBnMnaVjmshDRFyuhJ1z8wNM0Yp1AGBI8jsnpIdsP6Xr8R9m';
  var encodedURI = window.encodeURI('https://trailapi-trailapi.p.mashape.com/?limit=100&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Denver&q[country_cont]=United+States&q[state_cont]=Colorado&radius=25');

  return axios.get(encodedURI,{ 'headers': { 'X-Mashape-Key': apiKey }})
    .then(function(response){
      console.log(response.data);
    })
}


module.exports = {
  fetchTrails: fetchTrails,
};
