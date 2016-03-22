(function() {
    'use strict';

    angular
        .module('contacts', [
            'ngRoute'
        ]);

    angular.module('contacts')
    .config(function($routeProvider){
    	$routeProvider.when('/contacts', {
    		templateUrl: 'contacts/contactlist.tpl.html',
    		controller: 'ContactListController'
    	});
    });
})();