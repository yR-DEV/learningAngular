app.controller('SearchController', ['$scope', '$http', 'MovieQueries',
function($scope, $http, MovieQueries) {

  $scope.queryMoviesApi = function(title) {
    $scope.results = MovieQueries.queryAllTitles(title);
    // console.log($scope.results);
    // console.log($scope.results);
  };

  console.log('in search controller');
}]);


app.controller('ResultController', ['$scope', '$http', 'MovieQueries',
function($scope, $http, MovieQueries) {
  console.log(MovieQueries.initTitleQuery);
  console.log(MovieQueries.initTitleQuery);

}]);
