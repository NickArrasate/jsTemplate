var maps = require('google-maps');
var myLat = randomX(lat1,lat2);
var myLng = randomY(lng1,lng2);

console.log(myLat, myLng);

initMap = function() {

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.4371, lng: -122.6367},
    scrollwheel: false,
    zoom: 10
  });

  console.log(map);
  var marker = new google.maps.Marker({
    position: {lat: myLat, lng: myLng},
    map: map,
    title: 'Hello World!'
  });
  console.log(marker);
  };
