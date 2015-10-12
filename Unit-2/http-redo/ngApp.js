var app = angular.module('HTTP', []);

app.controller('HTTPController', ['$scope', '$http',
function($scope, $http) {
  console.log('in controler');
}])
