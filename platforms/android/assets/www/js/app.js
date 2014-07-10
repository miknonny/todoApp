// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var todoApp = angular.module('todo', ['ionic'])



todoApp.controller('TodoCtrl', ['$scope', '$ionicModal', function ($scope, $ionicModal) {
  
  //Some test data
  $scope.tasks = [];
  //Create the task and load the modal.
  
  //fromTemplate Method takes three arguments
  //the function loads the modal into the scope
  //we then set the modal scope the root $scope
  //and the animation for the modal to slide up.
  $ionicModal.fromTemplateUrl('new-task.html', function (modal) {
    $scope.taskModal = modal
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });
  //called when the form is submitted
  $scope.createTask = function (task) {
    $scope.tasks.push({
      title: task.title
    });
    $scope.taskModal.hide();
    task.title = "";
  };

  //Open the new task modal.
  $scope.newTask = function () {
    $scope.taskModal.show();
  }
  
  //Close the new task modal
  $scope.closeNewTask = function () {
    $scope.taskModal.hide();
  }
}]);

