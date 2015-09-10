app.factory('movieQuery', ['$scope', '$http',
function($scope, $http) {
  return {
    queryMatches: function() {
      var x = "hello";
      return x;
    }
  };
  // console.log('in factory');
}]);
