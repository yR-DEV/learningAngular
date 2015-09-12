app.controller('SearchController', ['$scope', '$http',
function($scope, $http) {
  console.log('in search controller');
}]);


app.controller('ProductController', ['$scope', '$http',
function($scope, $http) {
  $scope.productList = list;
  console.log($scope.productList);
}]);
