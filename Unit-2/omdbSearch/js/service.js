app.factory('MovieQueries', ['$http',
function($http) {

  var MovieQueries = {};
  MovieQueries.movieQueries = [];
  console.log('infactory');

  MovieQueries.queryAllTitles = function(title) {
    console.log(title);
    return title;
  };


  return MovieQueries;
}]);
