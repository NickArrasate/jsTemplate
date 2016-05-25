var apikey = require("./../.env").apikey;



// var x = 45.5177
// var y = -122.6788
$(document).ready(function() {
  $('#travel_button').click(function(){
      $('.showWeather').empty();
      var x = randomX(45.4323,45.6532);
      var y = randomY(-122.8367,-122.4700);
      authenticate();
      console.log(x,y);
    });
  });
