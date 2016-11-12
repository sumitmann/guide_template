'use strict';

var pssApp=angular.module('tourGuides', ['ngRoute','ui.bootstrap','ngLoadingSpinner','datatables','am.multiselect']);

pssApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {templateUrl: 'templates/login.html', pageTitle:"Login",controller: 'LoginController'}),
	$routeProvider.when('/login', {templateUrl: 'templates/login.html', pageTitle:"Login",controller: 'LoginController'}),
	$routeProvider.when('/employee', {templateUrl: 'templates/employee.html', controller: 'EmployeeController', pageTitle:"Employee"}),
	$routeProvider.when('/user', {templateUrl: 'templates/user.html', controller: 'UserController', pageTitle:"Users"}),
	$routeProvider.when('/city', {templateUrl: 'templates/city.html', controller: 'CityController', pageTitle:"City"}),
	$routeProvider.otherwise({redirectTo: '/'});
	toastr.options = {"positionClass": "toast-top-center"};
}]);
var APPLOGIN = false;