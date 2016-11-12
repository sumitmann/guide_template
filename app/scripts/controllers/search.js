'use strict';

/**
 * @ngdoc function
 * @name guideTemplateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guideTemplateApp
 */
pssApp.controller('SearchCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.getFieldTemplate = function() {
		return "views/template/guideTemplate.html";
	};
	
	$scope.guideList = [{photo:"images/guide.jpg", isNewListed: false, noOfBookings: 3, firstName:"Vijay", lastName: "Surya", experience: 3 },{photo:"images/guide.jpg", isNewListed: true, noOfBookings: 3, firstName:"Ajay", lastName: "Surya", experience: 3}]
  });
