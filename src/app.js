(function() {
    'use strict';

    angular
        .module('contactor', [
            'contacts'
        ]);

    angular.module('contactor')
    .config(['$routeProvider', function($routeProvider) {
    	$routeProvider.otherwise('/contacts');
    	console.log('test');
    }]);
})();