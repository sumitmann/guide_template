'use strict';

/**
 * @ngdoc overview
 * @name tourGuides (pssApp)
 * @description
 * # tourGuides (pssApp)
 *
 * Main module of the application.
 */

var pssApp = angular
    .module('pssApp', [
        'ngRoute',
		'ui.bootstrap',
		'ngAnimate',
		'ngAria',
		'ngCookies',
		'ngMessages',
		'ngResource',
		'ngSanitize',
		'ngTouch'		
    ]);

var APPLOGIN = false;
