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
	$scope.clearList = clearList;
	$scope.clearItem = clearItem;
	$scope.editItem = editItem;
	$scope.removeItem = removeItem;

	////////////////

	function addToList() {
		if (!$scope.listItems.includes($scope.listItem)) {
			$scope.listItems.push($scope.listItem);
			$scope.formError = false;
		} else {
			$scope.formError = true;
		}

		$scope.listItem = null;
	};

	function clearList() {
		$scope.listItems = [];
		$scope.formError = false;
	};

	function clearItem() {
		$scope.listItem = null;
	}

	function editItem(item) {
		console.log('make the edit');
	}

	function removeItem(item) {
		$scope.listItems = $scope.listItems.filter(i => i !== item);
	};
});