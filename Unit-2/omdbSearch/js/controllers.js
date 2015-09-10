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

app.controller('SearchController', ['$scope', '$http', 'movieQuery',
function($scope, $http, movieQuery) {
  $scope.results = movieQuery.queryMatches();
  console.log('in search controller');
}]);
