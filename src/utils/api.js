
var axios = require('axios');

function fetchTrails(city, state) {
  var apiKey = 'oREBnMnaVjmshDRFyuhJ1z8wNM0Yp1AGBI8jsnpIdsP6Xr8R9m';
  var encodedURI = window.encodeURI('https://trailapi-trailapi.p.mashape.com/?limit=100&q[activities_activity_type_name_eq]=hiking&q[city_cont]=' + city + '&q[country_cont]=United+States&q[state_cont]=' + state + '&radius=25');

  return axios.get(encodedURI,{ 'headers': { 'X-Mashape-Key': apiKey }})
    .then(function(response){
      console.log(response.data);
    })
}

function fetchTrailsLocation(lat, lon) {
  var apiKey = 'oREBnMnaVjmshDRFyuhJ1z8wNM0Yp1AGBI8jsnpIdsP6Xr8R9m';
  var encodedURI = window.encodeURI('https://trailapi-trailapi.p.mashape.com/?lat=' + lat + '?limit=25&lon=' + lon + '&q[activities_activity_type_name_eq]=hiking&q[country_cont]=United+States&radius=10');

  return axios.get(encodedURI,{ 'headers': { 'X-Mashape-Key': apiKey }})
    .then(function(response){
      return response.data.places;
    })
}


module.exports = {
  fetchTrails: fetchTrails,
  fetchTrailsLocation: fetchTrailsLocation
};
