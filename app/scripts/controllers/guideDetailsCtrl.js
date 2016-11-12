'use strict';

/**
 * @ngdoc function
 * @name pssApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pssApp
 */
pssApp.controller('GuideDetailsCtrl',['$scope','GuideDetailsService', function ($scope, guideDetailsService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	$scope.guideDetails = {};

	$scope.getGuideDetails = function(guideId) {
		console.log("Inside GuideDetailsConroller with param gjuide ID ");
		var guideDetails = guideDetailsService.getGuideDetails(guideId);
		guideDetails.then(function(msg) {
			console.log(" Guides Details Data CTRL " + JSON.stringify(msg));
			var jsonResult = msg.data;
			$scope.guideDetails = jsonResult;
		},function errorCallback(response) {
			if(response.status = 401) {
				$location.path('/login');
			}
		});
    }
  });
