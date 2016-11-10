(function() {

	var app = angular.module('addressbook', []);

	app.controller('AddressBookController', ['$scope', '$filter',
    function($scope, $filter) {
				var controller = this;

        $scope.employees = [{
          firstName : '',
          lastName : '',
          department : '',
          phoneNumber : ''
        }];

        $scope.employees.length = 0;

        this.addEmployee = function(employee) {
          console.log(employee);
          $scope.employees.push({
            'firstName' : employee.firstName,
            'lastName' : employee.lastName,
            'department' : employee.department,
            'phoneNumber' : employee.phoneNumber
          });
          employee.firstName = '';
          employee.lastName = '';
          employee.department = '';
          employee.phoneNumber = '';
        };

        this.deleteEmployee = function(name) {

        };

        this.sortEmployees = function(name) {
          $scope.employees = $filter('orderBy')($scope.employees, 'lastName', false);
        };

			} ]);

})();
