var apikey = require("./../.env").apikey;

$(document).ready(function() {
  $('#travel_button').click(function(){
      $('.showWeather').empty();
      var x = randomX(lat1,lat2);
      var y = randomY(lng1,lng2);
      authenticate();
      console.log(x,y);
      initMap();
    });
  });
