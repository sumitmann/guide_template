'use strict';

/**
 * @ngdoc function
 * @name guideTemplateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guideTemplateApp
 */
pssApp.controller('SearchCtrl',['$scope','SearchService', function ($scope, searchService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.getFieldTemplate = function() { 
		return "views/template/guideTemplate.html";
	};
	
	$scope.guideList = [];

    $scope.init = function() {
		console.log("Isnide init of Conroller ");
		var allGuides = searchService.getAllGuides();
		allGuides.then(function(msg) {
			console.log(" Data CTRL " + JSON.stringify(msg));
			var jsonResult = msg.data;
			$scope.guideList = jsonResult;
		},function errorCallback(response) {
			if(response.status = 401) {
				$location.path('/login');
			}
		});
    }

	$scope.init();

	$scope.findGuides = function(cityStr) {
		console.log("Inside SearchConroller searching guides with param city ");
		var searchedGuides = searchService.findGuides(cityStr);
		searchedGuides.then(function(msg) {
			console.log(" Searched Guides Data CTRL " + JSON.stringify(msg));
			var jsonResult = msg.data;
			$scope.guideList = jsonResult;
		},function errorCallback(response) {
			if(response.status = 401) {
				$location.path('/login');
			}
		});
    }
}]);
