// var app = angular.module("MovieSearch",[]);
var app = angular.module('MovieSearch', [])
.factory('MovieQueries', function() {
  var MovieQueries = {};
  MovieQueries.movieQueries = [];

  MovieQueries.queryMovies = function(title) {
    console.log(title);
  };
});
