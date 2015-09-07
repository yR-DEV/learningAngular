app.controller('HttpController', function($scope, $http) {

  $http.get('https://itunes.apple.com/search?term=jack+johnson').then(function(wisdom) {
    return $scope.zenWisdom = wisdom.data;
  });

});
