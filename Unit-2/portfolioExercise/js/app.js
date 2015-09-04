var app = angular.module("portfolioExercise", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl: 'index.html',
      controller: 'IndexController'
    })
    .when('/bio', {
      templateUrl: 'partials/bio.html',
      controller: 'BioController'
    });
});


// app.config(function($routeProvider) {
//   $routeProvider.when('/projects', {
//     templateUrl: 'partials/projects.html',
//     controller: 'ProjectsController'
//   })
//     .when('/bio', {
//       templateUrl: 'partials/bio.html',
//       controller: 'BioController'
//   })
//     .when('/resume', {
//       templateUrl: 'partials/resume.html',
//       controller: 'ResumeController'
//     });
//
// });
