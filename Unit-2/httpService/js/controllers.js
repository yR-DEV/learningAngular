app.controller('HttpController', function($scope, $http) {

  $http.get('https://api.github.com/zen').then(function(wisdom) {
    return $scope.zenWisdom = wisdom.data;
  });

});
