var app = angular.module('ToDoApp', []);

app.controller('ToDoCtrl', function($scope) {
	$scope.listItems = [];

	$scope.addToList = function() {
		$scope.listItems.push($scope.listItems.item);
	};

	$scope.clear = function() {
		return $scope.listItems = [];
	};

	$scope.removeItem = function(item) {
		for (var i = 0; i <= $scope.listItems.length - 1; i++) {
			if ($scope.listItems[i] === item) {
				$scope.listItems.splice(i, 1);
			}
		}

		return $scope.listItems;
	};
});