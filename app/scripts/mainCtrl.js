'use strict';

/**
 * @ngdoc function
 * @name pssApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pssApp
 */
pssApp.controller('MainCtrl', function($scope, $rootScope, $uibModal, $log, $location, $state) {

	//MODAL WINDOW OF LOGIN
	$scope.openLogin = function() {
		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: "views/modals/loginModal.html",
			controller: 'LoginCtrl',
			size: 'lg',
			resolve: {
				infoToLoginControllerFromParent: function() {
					//return $scope.items;
				}
			}
		});

		modalInstance.result.then(function(selectedObj) {
			$scope.loginObj = selectedObj;
			console.log(" Login Details passed to parent " + JSON.stringify(selectedObj));
		}, function() {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};		


	//MODAL Window For Register
	$scope.openRegister = function() {
		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: "views/modals/registerModal.html",
			controller: 'RegisterCtrl',
			size: 'lg',
			resolve: {
				infoToRegisterControllerFromParent: function() {
					//return $scope.items;
				}
			}
		});

		modalInstance.result.then(function(selectedObj) {
			$scope.loginObj = selectedObj;
			console.log(" Login Details passed to parent " + JSON.stringify(selectedObj));
		}, function() {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};		

});


//MODAL CONTROLLER OF LOGIN
pssApp.controller('LoginCtrl', function($scope, $uibModalInstance, infoToLoginControllerFromParent) {

    $scope.loginDetails = {username:"sample", password:"pass1234", userType:true};

    $scope.ok = function() {
        // Make a web service call to back end to check the user name password .. if invalid userame password, error message to be displayed on modal window.
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
    $scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    };
});


//MODAL CONTROLLER For Register
pssApp.controller('RegisterCtrl', function($scope, $uibModalInstance, infoToRegisterControllerFromParent) {

    $scope.registerDetails = {firstname:"Rama", lastname:"Kokella", email:"some@some.com", password:"pass1234", something:"pass1234", userType:true};

    $scope.ok = function() {
        // Make a web service call to back end to create the user if any errors show message on modal or on parent.
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
    $scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    };
});
