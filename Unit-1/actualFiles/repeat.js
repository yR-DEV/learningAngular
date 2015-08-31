var app = angular.module("repeat", []);

app.controller("RepeatController", function($scope) {

  $scope.names = ['a','b','c', 'd', 'e'];
  $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
})
