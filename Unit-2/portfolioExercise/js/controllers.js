app.controller("BioController", function($scope) {
  $scope.bio = "About Me";
});

app.controller("ProjectsController", function($scope) {
  $scope.projects = "PROJECTZ!";
});

app.controller("ResumeController", function($scope) {
  $scope.resume = "MY STUFF";
});

app.controller("Navbar", function($scope) {

  $scope.currentPage = function(pageName) {
    // console.log(typeof(pageName));
    $scope.dropdown= pageName;
  };

});
