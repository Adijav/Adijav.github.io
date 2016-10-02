(function(){
	angular.module('portfolio',['ngRoute','ngResource']);

	angular.module('portfolio').config(function($routeProvider){

		$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		.when('/resume', {
			templateUrl: 'views/resume.html',
			controller: 'MainController'
		})
		.when('/projects', {
			templateUrl: 'views/projects.html',
			controller: 'MainController'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'MainController'
		})
		.otherwise( {redirectTo: '/'});
	});

	angular.module('portfolio').controller('MainController', function($scope, $location){
		$scope.$location = $location;
	});
})();