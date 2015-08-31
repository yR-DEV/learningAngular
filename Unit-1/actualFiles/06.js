var app = angular.module("MyFirstApp", []);

app.controller("ExerciseController", function($scope) {

  $scope.favColor = "green";
  $scope.secondsInACentury = 60 * 60 * 24 * 365 * 100;
  $scope.theDate = new Date();
  $scope.number = 5;

  $scope.pickRandomNumber = function(){
  	$scope.number = Math.floor(Math.random() * 10) + 1;
  };

  $scope.reverseWord = function() {
    $scope.word = $scope.word.split('').reverse().join('');
    // console.log(word);
  };

});
