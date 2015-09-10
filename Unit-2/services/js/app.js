var app = angular.module("Services", ['$scope', 'ContactList', function($scope, ContactList) {
  $scope.contactData = ContactList.contactList;

  //todo, contactlist controller code goes here
}]);
