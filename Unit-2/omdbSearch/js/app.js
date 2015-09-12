var app = angular.module("MovieSearch", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/',
    controller: 'SearchController',
    controller: 'ResultController',
  });
});
