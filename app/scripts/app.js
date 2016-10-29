'use strict';

/**
 * @ngdoc overview
 * @name guideTemplateApp
 * @description
 * # guideTemplateApp
 *
 * Main module of the application.
 */
angular
  .module('guideTemplateApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
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
