var app = angular.module("RedditClone", []);

app.controller("NavBar", function($scope) {
  // console.log('in nav bar');
  $scope.newPostBool = false;

  $scope.showNewPostForm = function() {
    console.log('in');
    $scope.newPostBool = true;
  };

  $scope.postIt = function() {
    $scope.newPostBool = false;
  };

});

app.controller("NewPostForm", function($scope) {
  console.log($scope.newPostBool);

});
