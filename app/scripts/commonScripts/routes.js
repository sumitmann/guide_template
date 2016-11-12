'use strict';

/**
 * @ngdoc overview
 * @name pssApp
 * @description
 * # pssApp
 *
 * All Main Routes of the application.
 */

/*pssApp.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
        .state('/', {
            url: "/",
            templateUrl: 'templates/login.html',
            pageTitle:"Login",
            controller: 'LoginController'
        })

        // MASTER ROUTES
        .state('employee', {
            url: '/employee',
            templateUrl: 'templates/employee.html',
            controller: 'EmployeeController',
            pageTitle: "Employee"
        })
        .state('-user', {
            url: '/user',
            templateUrl: 'templates/user.html',
            controller: 'UserController',
            pageTitle: "Users"
        })
        .state('city', {
            url: '/city',
            templateUrl: 'templates/city.html',
            controller: 'CityController',
            pageTitle:"City"
        })
});
*/

/*
pssApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {templateUrl: 'templates/login.html', pageTitle:"Login",controller: 'LoginController'}),
	$routeProvider.when('/login', {templateUrl: 'templates/login.html', pageTitle:"Login",controller: 'LoginController'}),
	$routeProvider.when('/employee', {templateUrl: 'templates/employee.html', controller: 'EmployeeController', pageTitle:"Employee"}),
	$routeProvider.when('/user', {templateUrl: 'templates/user.html', controller: 'UserController', pageTitle:"Users"}),
	$routeProvider.when('/city', {templateUrl: 'templates/city.html', controller: 'CityController', pageTitle:"City"}),
	$routeProvider.otherwise({redirectTo: '/'});
	toastr.options = {"positionClass": "toast-top-center"};
}]);*/

pssApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl',
		controllerAs: 'main'
	})
	.when('/search', {
		templateUrl: 'views/search.html',
		controller: 'SearchCtrl',
		controllerAs: 'search'
	})
	.when('/booking', {
		templateUrl: 'views/booking.html',
		controller: 'BookingCtrl',
		controllerAs: 'booking'
	})
	.when('/bookingsuccess', {
		templateUrl: 'views/bookingSuccess.html',
		controller: 'BookingCtrl',
		controllerAs: 'booking'
	})
	.when('/guidedetails', {
		templateUrl: 'views/guideDetails.html',
		controller: 'GuideDetailsCtrl',
	controllerAs: 'guidedetails'
	})
	.when('/guideprofile', {
		templateUrl: 'views/guideProfile.html',
		controller: 'GuideProfileCtrl',
		controllerAs: 'guideprofile'
	})
	.otherwise({
		redirectTo: '/'
	});
});