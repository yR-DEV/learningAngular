app.controller('SearchController', ['$scope', '$http', 'MovieQueries',
function($scope, $http, MovieQueries) {

  $scope.queryMoviesApi = function(title) {
    MovieQueries.queryAllTitles(title);
  };

  console.log('in search controller');
}]);
