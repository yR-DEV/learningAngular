var queryResults = [];

app.controller('SearchController', ['$scope', '$http', 'MovieQueries',
function($scope, $http, MovieQueries) {

  $scope.queryMoviesApi = function(title) {
    var x = MovieQueries.queryAllTitles(title);
    // $scope.results = MovieQueries.queryAllTitles(title);
    // queryResults = MovieQueries.queryAllTitles(title);
    console.log(x);
    // console.log($scope.results);
  };

  console.log('in search controller');
}]);


app.controller('ResultController', ['$scope', '$http', 'MovieQueries',
function($scope, $http, MovieQueries) {

  $scope.showResults = function() {
    console.log(MovieQueries.returnResults);
  };

  // console.log(MovieQueries.returnResults);

}]);
