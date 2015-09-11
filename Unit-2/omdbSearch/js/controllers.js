// app.controller('SearchController', ['$scope',
// function($scope) {
//   // console.log('in controller');
//   // $scope.movieQuery = MovieQuery.movieQuery;
//   $scope.greeting = "Hello.";
// }]);

// app.controller('SearchController', ['$scope', '$http', 'movieQuery',
// function($scope, $http, movieQuery) {
//   // $scope.callMovieQuery = function(movieTitleInput) {
//   //   MovieQuery(movieTitleInput);
//   // };
//   console.log('in search controller');
// }]);

app.controller('SearchController', ['$scope', '$http', 'MovieQuery',
function($scope, $http, MovieQuery) {
  $scope.results = MovieQuery.initialSearch($scope.titleInput);
  console.log('in search controller');
}]);
