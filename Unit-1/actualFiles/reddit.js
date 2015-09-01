var app = angular.module("RedditClone", []);

app.controller("NavBar", function($scope) {
  // console.log('in nav bar');
  $scope.newPostBool = false;

  $scope.posts = [{
    title: "Some Title",
    author: "Some Author",
    imageURL: "http://i.imgur.com/TcmVKyPb.jpg",
    description: "Some Description",
    votes: 0
  }];

  $scope.showNewPostForm = function() {
    console.log('in');
    $scope.newPostBool = true;
  };

  $scope.postIt = function() {
    $scope.newPostBool = false;
  };

  $scope.sortPostsBy = function(str) {
    $scope.sortPostsByWhat = str;
  };

  $scope.changeVotes = function(bool, post) {
    if(bool === 'down') {
      post.votes -= 1;
    } else {
      post.votes += 1;
    }
  };

});

app.controller("Posts", function($scope) {
  console.log($scope.newPostBool);

});
