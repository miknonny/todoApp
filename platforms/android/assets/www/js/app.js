// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var todoApp = angular.module('todo', ['ionic'])



todoApp.controller('TodoCtrl', ['$scope', function ($scope) {
  $scope.tasks = [
    {title: 'Collect coins'},
    {title: 'Eat mushrooms'},
    {title: 'Get high enough to grab the flag'},
    {title: 'Find the princess'}
  ];
}]);