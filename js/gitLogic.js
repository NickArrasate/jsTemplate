apiKey = require('./../.env').apiKey;

exports.removeSpaces = function(username){
  noSpaces = username.replace(/\s+/g, '');
  return noSpaces;
};
exports.gitCall = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $('.userAva').empty();
    $('.userAva').append('<img src=' + response.avatar_url + "'>");
    $('.usernameDisplay').text(response.name);
    $('.followersDisplay').text(response.followers);
    $('.info').show();
    $('.error').hide();
    $('.repos').empty().hide();
  }).fail(function(error){
    $('.error').text('No User Found');
    $('.info').hide();
    $('.error').show();
  });
};
exports.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    $('.getRepos').hide();
    $('.repoWrap').show();
    $('.repos').show();
    for (i = 0; i < response.length; i++){
      $('.repos').append('<li class="title" value=' + [i] +'>' + response[i].name + ' --- ' + response[i].description + '</li>');
    }
  }).fail(function(error){
  });
};
