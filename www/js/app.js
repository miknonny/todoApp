// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var todoApp = angular.module('todo', ['ionic'])

todoApp.factory('Projects', function () {
  return {
    all: function () {
      var projectString = window.localStorage['projects'];
      if (projectString) {
        return angular.fromJson(projectString);
      }
      return [];
    },
    save: function (projects) {
      window.localStorage['projects'] = angular.toJson(projects);
    },
    newProject: function (projectTitle) {
      return {
        title: projectTitle,
        tasks: []
      };
    },
    getLastActiveIndex: function () {
      return parseInt(window.localStorage['lastActiveProject'] || 0);
    },
    setLastActiveindex: function (index) {
      window.localStorage['lastActiveProject'] = index;
    } 
  };
});

todoApp.controller('TodoCtrl', ['$scope', '$timeout', '$ionicModal', 'Projects', '$ionicSideMenuDelegate', function ($scope, $timeout, $ionicModal, Projects, $ionicSideMenuDelegate) {
  
  //A Utility function for creating a new project with given projectTitle.
  var createProject = function (projectTitle) {
    var newProject = Projects.newProject(projectTitle);
    $scope.projects.push(newProject);
    Projects.save($scope.projects)
    $scope.selectProject(newProject, $scope.projects.length-1);
  };

  //Loads or initialise projects
  $scope.projects = Projects.all();

  //Grab the last active or the first project
  $scope.activeProject = $scope.projects[Projects.getLastActiveIndex()];

  //Called to create a new project.
  $scope.newProject = function () {
    var projectTitle = prompt('Project name');
    if (projectTitle) {
      createProject(projectTitle);
    }
  };

  //Called to collect the given project.
  $scope.selectProject = function (project, index) {
    $scope.activeProject = project;
    Projects.setLastActiveIndex(index);
    $ionicSideMenuDelegate.toggleLeft(false);
  };


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
    
    //Prevents adding tasks when there are no active projects.
    if (!$scope.activeProject || !task) {
      return;
    }
    console.log($scope.activeProject);
    $scope.activeProject.tasks.push({
      title: task.title
    })
    $scope.taskModal.hide();
    
    //Inefficient but saves all projects
    Projects.save($scope.projects);
    
    task.title = "";
  };

  //Open the new task modal.
  $scope.newTask = function () {
    $scope.taskModal.show();
  };
  
  //Close the new task modal
  $scope.closeNewTask = function () {
    $scope.taskModal.hide();
  };

  $scope.toggleProjects = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $timeout(function () {
    if ($scope.projects.length == 0) {
      while (true) {
        var projectTitle = prompt('Your first project title: ');
        if (projectTitle) {
          createProject(projectTitle);
          break;
        }
      }
    }
  });

}]);


//Try to create the first project, make sure to differ this.
//By using the $timeout so everything is initialised properly.


















