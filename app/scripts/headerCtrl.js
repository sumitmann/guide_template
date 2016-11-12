'use strict';

/**
 * @ngdoc function
 * @name pssApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pssApp
 */
pssApp.controller('HeaderCtrl', function($scope, $rootScope, $modal,  $log) {

	//MODAL WINDOW OF LOGIN
	$scope.openLogin = function() {
		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: "views/modals/loginModal.html",
			controller: 'LoginCtrl',
			size: 'sm',
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
    //
    //
	////MODAL Window For Register
	$scope.openRegister = function() {
		var modalInstance = $modal.open({
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

//
////MODAL CONTROLLER OF LOGIN
pssApp.controller('LoginCtrl', function($scope, $modalInstance, infoToLoginControllerFromParent) {

    $scope.login = {username:"sample", password:"pass1234", userType:true};

	$scope.login.loginAsUser =  true;

	$scope.toggelLogin = function(){
		$scope.login.loginAsUser = !$scope.login.loginAsUser;
	}

    $scope.ok = function() {
        console.log($scope.login);
    };

    $scope.cancel = function() {
		$modalInstance.dismiss('cancel');
    };
    $scope.close = function() {
		$modalInstance.dismiss('cancel');
    };
});
//
//
////MODAL CONTROLLER For Register
pssApp.controller('RegisterCtrl', function($scope, $modalInstance, infoToRegisterControllerFromParent) {

    $scope.registerDetails = {firstname:"Rama", lastname:"Kokella", email:"some@some.com", password:"pass1234", something:"pass1234", userType:true};

    $scope.ok = function() {
        // Make a web service call to back end to create the user if any errors show message on modal or on parent.
    };

    $scope.cancel = function() {
		$modalInstance.dismiss('cancel');
    };
    $scope.close = function() {
		$modalInstance.dismiss('cancel');
    };
});
