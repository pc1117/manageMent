App.controller("tableCtrl", ["$scope", "$timeout",
	function($scope, $setTimeout) {

		/*表格数据*/
		$scope.tables = [{
			Name: "彭聪",
			Number: "511324198811173074",
			Phone: "18011511225",
			Adds: "牧华路999号",
			Sex: 1
		}, {
			Name: "唐莉",
			Number: "511324199311073042",
			Phone: "18111511345",
			Adds: "南湖西路",
			Sex: 2
		}];
		console.log($scope.tables);
	}
]);