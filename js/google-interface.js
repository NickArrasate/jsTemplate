


var lng1 = -122.8367;
var lng2 = -122.4700;
var lat1 = 45.4323;
var lat2 = 45.6532;

randomX = function(max,min){
  x = (Math.random() * (max-min) + min);
  return x.toPrecision(6);
};

randomY = function(max,min){
  y = (Math.random() * (max-min) + min);
  return y.toPrecision(7);
};

 authenticate = function(){
 $.get('https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + x + "," + y + '&heading=100&pitch=0&scale=2&key=' + apikey).then(function(response, status, xhr){
  var checkLength = response.split("");
   console.log(checkLength.length);
   if(checkLength.length == 5243){
     checkLength = [];
     randomX(lat1,lat2);
     randomY(lng1,lng2);
     authenticate();
   }else{
     $('.showWeather').append("<img src= 'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + x + "," + y + "&heading=100&pitch=0&scale=2&key=" + apikey + "'>");
   }
  });
 };
