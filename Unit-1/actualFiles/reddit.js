var app = angular.module("RedditClone", []);

app.controller("NavBar", function($scope) {
  // console.log('in nav bar');
  $scope.newPostBool = false;

  var newD = new Date();

  $scope.posts = [{
    title: "Some Title",
    author: "Some Author",
    imageURL: "http://i.imgur.com/TcmVKyPb.jpg",
    description: "Some Description",
    votes: 0,
    date: newD
  },
  {
    title: "Some Other Title",
    author: "Some Other Author",
    imageURL: "http://i.imgur.com/KiyCMMTb.jpg",
    description: "Some Other Description",
    votes: 0,
    date: newD
  }];

  $scope.showNewPostForm = function() {
    console.log('in');
    $scope.newPostBool = true;
  };

  $scope.postIt = function() {
    $scope.newPostBool = false;
  };

  $scope.sortPostsBy = function(str) {
    if(str === '-value') {
      $scope.sortPostsByWhat = 'value';
    } else {
      $scope.sortPostsByWhat = str;
    }
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
