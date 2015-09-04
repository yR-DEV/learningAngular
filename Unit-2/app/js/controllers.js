app.controller('HomeController', function($scope){
  $scope.greeting = "WELCOMEE!";
});

app.controller('DogsController', function($scope) {
  $scope.dogGreeting = "Woof, woof.";
});

app.controller('CatchallController', function($scope, $routeParams) {
  
})
