app.controller("SearchController", ['$scope', '$http',
function($scope, $http) {
  // console.log('in controller');
  //
  // $scope.allQueries = MovieQueries.movieQueries;

  $scope.queryMoviesApi = function(title) {
    console.log(title);
  };

}]);
