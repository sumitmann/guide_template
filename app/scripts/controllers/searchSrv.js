'use strict';

/**
 * @ngdoc function
 * @name guideTemplateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guideTemplateApp
 */
pssApp.service('SearchService',['appSettings', 'apiServices', function (appSettings, apiServices) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	this.guideList = [{photo:"images/guide.jpg", isNewListed: false, noOfBookings: 3, firstName:"Vijay", lastName: "Surya", experience: 3 },{photo:"images/guide.jpg", isNewListed: true, noOfBookings: 3, firstName:"Ajay", lastName: "Surya", experience: 3}];

	this.getAllGuides = function() {
		console.log("Isnide Service for all guides ");
		//return this.guideList;
		return apiServices.doAPIRequest(appSettings.appAPI.guide.getAllGuides, null, null, "localStorage");
	};
	
	this.findGuides = function(cityStr) {
		console.log("Isnide Service for all guides ");
		//return this.guideList;
		return apiServices.doAPIRequest(appSettings.appAPI.guide.getAllGuides, null, null, "localStorage");
	};
}]);
