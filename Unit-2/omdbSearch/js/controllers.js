app.controller("MainSearch", function($scope, $http) {

  $scope.movieSearch = function(title) {

    $http.get('')

  };

});
