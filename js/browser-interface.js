var search = require('./../js/gitLogic.js').gitCall;
var getRepos = require('./../js/gitLogic.js').getRepos;
var removeSpaces = require('./../js/gitLogic.js').removeSpaces;
var username;

$(document).ready(function(){
  $('.search').submit(function(event){
    event.preventDefault();
    username = removeSpaces($('.username').val());
    search(username);
    $('.getRepos').show();
  });

  $('.getRepos').click(function(){
    getRepos(username);
  });
});
