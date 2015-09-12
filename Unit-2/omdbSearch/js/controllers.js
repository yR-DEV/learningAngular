app.controller("SearchController", ['$scope', '$http',
function($scope, $http) {

  $scope.callApiRequest = function(title) {
    console.log(title);
  }

}]);
