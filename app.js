var app = angular.module('ToDoApp', []);

app.controller('ToDoCtrl', function($scope) {
	$scope.listItems = [];
	$scope.itemCategories = [
		{label: 'Food', value: 1},
		{label: 'Hardware', value: 2},
		{label: 'Pet Store', value: 3},
		{label: 'Music Store', value: 4}
	];
	$scope.listItem = null;

	$scope.addToList = addToList;
	$scope.clear = clear;
	$scope.removeItem = removeItem;


	function addToList() {
		if (!$scope.listItems.includes($scope.listItem)) {
			$scope.listItems.push($scope.listItem);
		} else {
			console.log('this is an error state, item already in list', $scope.toDoForm);
			$scope.toDoForm.$setValidity('listItem', false);
			// $scope.toDoForm.errors.listItem = true;
		}

		$scope.listItem = null;
	};

	function clear() {
		return $scope.listItems = [];
	};

	function removeItem(item) {
		$scope.listItems = $scope.listItems.filter(i => i !== item);
	};
});