
(function() {
    'use strict';
    pssApp.constant('appSettings', {
        "dataType": "local",
        "local": {
            "baseURL": "http://localhost:9000/static"
        },
        "production": {
            "baseURL": "http://localhost:8080/tourGuidesWar"
        },
        //API URL
        "appAPI": {
            "city": {
                "getCityById": {
                    "url": "/api/city",
                    "method": "GET"
                },
                "getAllCities": {
                    "url": "/api/cities",
                    "method": "GET"
                },
                "deleteCityId": {
                    "url": "/api/city/",
                    "method": "DELETE"
                },
                "createCity": {
                    "url": "/api/city/create",
                    "method": "POST"
                },
                "updateCity": {
                    "url": "/api/city/update",
                    "method": "PUT"
                }
            },
            "country": {
                "getCountryById": {
                    "url": "/api/country",
                    "method": "GET"
                },
                "getAllCountries": {
                    "url": "/api/countries",
                    "method": "GET"
                },
                "deleteCountryId": {
                    "url": "/api/country/",
                    "method": "DELETE"
                },
                "createCountry": {
                    "url": "/api/country/create",
                    "method": "POST"
                },
                "updateCity": {
                    "url": "/api/city/update",
                    "method": "PUT"
                }
            },
            "currency": {
                "getCurrencyById": {
                    "url": "/api/currency",
                    "method": "GET"
                },
                "getAllCurrencies": {
                    "url": "/api/currencies",
                    "method": "GET"
                },
                "deleteCurrencyId": {
                    "url": "/api/currency/",
                    "method": "DELETE"
                },
                "createCurrency": {
                    "url": "/api/currency/create",
                    "method": "POST"
                },
                "updateCurrency": {
                    "url": "/api/currency/update",
                    "method": "PUT"
                }
            },
            "pricingType": {
                "getPricingTypeById": {
                    "url": "/api/pricingtype",
                    "method": "GET"
                },
                "getAllPricingTypes": {
                    "url": "/api/pricingtypes",
                    "method": "GET"
                },
                "deletePricingTypeId": {
                    "url": "/api/pricingtype/",
                    "method": "DELETE"
                },
                "createPricingType": {
                    "url": "/api/pricingtype/create",
                    "method": "POST"
                },
                "updatePricingType": {
                    "url": "/api/pricingtype/update",
                    "method": "PUT"
                }
            },
            "groupSize": {
                "getGroupSizeById": {
                    "url": "/api/groupsize",
                    "method": "GET"
                },
                "getAllGroupSizes": {
                    "url": "/api/groupsizes",
                    "method": "GET"
                },
                "deleteGroupSizeId": {
                    "url": "/api/groupsize/",
                    "method": "DELETE"
                },
                "createGroupSize": {
                    "url": "/api/groupsize/create",
                    "method": "POST"
                },
                "updateGroupSize": {
                    "url": "/api/groupsize/update",
                    "method": "PUT"
                }
            },
            "guide": {
                "getGuideById": {
                    "url": "/api/guide",
                    "method": "GET"
                },
                "getAllGuides": {
                    "url": "/api/guides",
                    "method": "GET"
                },
                "deleteGuideId": {
                    "url": "/api/guide/",
                    "method": "DELETE"
                },
                "createGuide": {
                    "url": "/api/guide/create",
                    "method": "POST"
                },
                "updateGuide": {
                    "url": "/api/guide/update",
                    "method": "PUT"
                }
            },
            "state": {
                "getAllStates": {
                    "url": "/api/states",
                    "method": "GET"
                }
            }
        },
        "dateFormat": 'dd/MMM/yyyy hh:mm:ss a'
    });
}());
