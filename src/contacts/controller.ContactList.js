(function() {
    'use strict';

    angular
        .module('contacts')
        .controller('ContactListController', ['$scope', ContactListController]);

    /* @ngInject */
    function ContactListController($scope) {
        /*jshint validthis: true */
        var self = this;

        /* Interface */
        self.Title = 'ContactListController';

        init();

        /* Implementation */
        function init() {
        }

        /* End Implementation */
    }
})();