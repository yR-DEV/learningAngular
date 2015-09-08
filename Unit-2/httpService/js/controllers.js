app.controller('HttpController', function($scope, $http) {

  $scope.newPostBool = false;

  // $http.get('https://itunes.apple.com/search?term=jack+johnson').then(function(wisdom) {
  //   return $scope.zenWisdom = wisdom.data;
  // });

  $http.get('https://shielded-peak-6345.herokuapp.com/').then(function(apiData) {
    console.log(apiData.data);
    $scope.data = apiData.data;
  });

  $scope.showNewPostForm = function() {
    $scope.newPostBool = true;
  };

  $scope.hideNewPostForm = function() {
    $scope.newPostBool = false;
  }

});
