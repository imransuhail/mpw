'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
var mainServices = angular.module('mpw-client.main-authentication', ['ngResource'])
    .factory('AuthenticationService',['$resource', function($resource) {

    return $resource('http://localhost:8080/api/v01/users/:action', {},
        {
            authenticate: {
                method: 'POST',
                params: {'action' : 'authenticate'},
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        }
    );
}]);

