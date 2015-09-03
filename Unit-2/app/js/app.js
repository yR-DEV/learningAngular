var app = angular.module("routing", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  })
  .when('/dogs', {
    templateUrl: 'partials/dogs.html',
    controller: 'DogsController'
  })
});
