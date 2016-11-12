'use strict';


pssApp.service('apiServices', function($http, $q, $timeout, $log, $rootScope, $location, $parse, $filter, appSettings) {

        //Do Request
        this.doAPIRequest = function( apiObj, requestParams, urlParam, localStorageItem) {

            var defer = $q.defer();
            var callURL = "";
            var requestHeader = null;

            if (appSettings.dataType == 'local') {
                callURL = appSettings.local.baseURL + apiObj.url;
            }
            if (appSettings.dataType == 'production') {
                callURL = appSettings.production.baseURL +  apiObj.url;
            }
            
            if (urlParam != null) {
            	callURL = callURL + "/"+ urlParam
            }
            var httpParams = {
                method: apiObj.method,
                url: callURL,
                data: requestParams
            };

            if (requestHeader != null) {
                httpParams.headers = requestHeader;
            }
            //TODO 
            //Check if obj is present in local Storage else get it from the http call below.

            $timeout(function() {
               $http(httpParams)
                    .success(function(data, status, headers, config) {
                        if (status == 200) {
                           $log.debug('Response Success Data: ============= \n '+callURL);
                           //TODO
                           //If localStorageItem - then add this data to the local Storage.
                           $log.debug(" check the in api call request !!!!!!  " + JSON.stringify(data));
                        }                        
                        defer.resolve(data);
                    })
                    .error(function(error, status, headers, config) {                       
                        if (status == 400) {
                           $log.debug('Error: Could not fetch data from: ================== \n'+callURL);
                        }                    
                        defer.reject(error);
                    })
            }, 0);
            console.log(" DEFER PROMISE " + JSON.stringify(defer.promise));
            return defer.promise;
            
         }
    });
