// app.controller("SearchController", ['$scope', '$http', 'Queries',
// function($scope, $http, Queries) {
//
//   $scope.callApiRequest = function(title) {
//     Queries.queryMovies(title);
//   };
//
// }]);
app.controller('SearchController', ['$scope','MovieQueries',
function ($scope, MovieQueries) {
   $scope.queryMoviesApi = function(title) {
     MovieQueries.queryMovies(title);
   };
 }]);
