'use strict';

/**
 * @ngdoc function
 * @name guideTemplateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guideTemplateApp
 */
pssApp.service('GuideDetailsService',['appSettings', 'apiServices', function (appSettings, apiServices) {

	this.guideDetails = [{photo:"images/guide.jpg", isNewListed: false, noOfBookings: 3, firstName:"Vijay", lastName: "Surya", experience: 3 },{photo:"images/guide.jpg", isNewListed: true, noOfBookings: 3, firstName:"Ajay", lastName: "Surya", experience: 3}];

	this.getGuideDetails = function(guideId) {
		console.log("Isnide Service for getting guide Details");
		return apiServices.doAPIRequest(appSettings.appAPI.guide.getGuideById, null, guideId, "localStorage");
	};
	
}]);
