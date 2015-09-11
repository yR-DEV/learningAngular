// app.factory('movieQuery', ['$scope', '$http',
// function($scope, $http) {
//   return {
//     queryMatches: function() {
//       var x = "hello";
//       return x;
//     }
//   };
//   // console.log('in factory');
// }]);

app.factory('MovieQuery',
function($scope, $http) {
  var QueryResults = {};
  QueryResults.queryResults = [];

  MovieQuery.initialSearch = function(titleInput) {
    console.log(titleInput);
  };
});
