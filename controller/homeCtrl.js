App.controller("homeCtrl", ["$scope", "$http", "$timeout",
	function($scope, $http, $setTimeout) {

		$scope.fetchData = function() {
			var x = 5;
			func.call('a', 'b', 'c'); // (this, arg1, arg2)
			func.apply('a', ['b', 'c']); // (this, arrayWithArgs)
		};

	}
]);

function func(arg1, arg2) {
	//console.log(this);
	console.log(arg1); // b
	console.log(arg2); // c
}