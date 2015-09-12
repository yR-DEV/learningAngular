app.factory('MovieQueries', ['$http',
function($http) {

  var initTitleQuery = [];
  var MovieQueries = {};
  MovieQueries.movieQueries = [];
  console.log('infactory');

  var queryAllTitles = function(title) {
    $http.get('http://www.omdbapi.com/?s=' + title)
    .then(function(titles) {
      initTitleQuery = titles.data.Search;
      console.log(titles.data.Search);
      return initTitleQuery;
    });
  };


  return {
    queryAllTitles: queryAllTitles,
    initTitleQuery: initTitleQuery,
  };
}]);
