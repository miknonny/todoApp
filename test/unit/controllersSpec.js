'use strict';


describe('todoApp controllers', function () {
	var scope, ctrl;	

	beforeEach(function () {
		module('todo');
		module('ionic');
	});

	beforeEach(inject(function ($controller) {
	  scope = {};
	  ctrl = $controller('TodoCtrl', {$scope: scope});
	}));

	it('should have a TodoCtrl conroller', function () {
	  expect('TodoCtrl').toBeDefined();
	});
	
	it('should have a method newProject in model', function () {
		expect(scope.newProject).toBeDefined();
	});

	it('should have a property of projects in the model', function () {
		expect(scope.projects).toBeDefined();
	});
	
	it('should have a method of selectProject in model', function () {
		expect(scope.selectProject).toBeDefined();
	});

	it('should have a method of createTask in model', function () {
		expect(scope.createTask).toBeDefined();
	}); 

	it('should have a method of newTask in model', function () {
		expect(scope.newTask).toBeDefined();
	}); 

	it('should have a method of closeNewTask in model', function () {
		expect(scope.closeNewTask).toBeDefined();
	}); 

	it('should have a method of toggleProjects in model', function () {
		expect(scope.toggleProjects).toBeDefined();
	}); 

});


// note that this gie does not know what the controller is.
// i guess that we have to inject the controller here.