var app = angular.module("portfolioExercise", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/bio', {
      templateUrl: "partials/bio.html",
      controller: "BioController"
    })
    .when('/projects', {
      templateUrl: "partials/projects.html",
      controller: "ProjectsController"
    })
    .when('/resume', {
      templateUrl: "partials/resume.html",
      controller: "ResumeController"
    });
});
