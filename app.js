var app = angular.module('ToDoApp', []);

app.controller('ToDoCtrl', function($scope) {
	$scope.listItems = [];

	$scope.addToList = function() {
		$scope.listItems.push($scope.listItems.item);
	};

	$scope.clear = function() {
		return $scope.listItems = [];
	}
});