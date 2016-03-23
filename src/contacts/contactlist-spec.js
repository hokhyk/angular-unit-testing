describe('Contacts', function(){
	beforeEach(module('contacts'));

	describe('Contact List Controller', function(){
		var $controller;

		beforeEach(inject(function(_$controller_){
			$controller = _$controller_;
		}));

		describe('init', function(){
			it('should have the Contact List Controller defined', function(){
				var $scope = {};
				var controller = $controller('ContactListController', {$scope: $scope});
				expect(controller).toBeDefined();
			});
		});
	});
});