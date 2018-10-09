App.directive("treeData", [function() {
	return {
		restrict: "ACEM",
		template: '<ul>' +
			'<li ng-repeat="x in data"  ng-include="\'itemTemplate.html\'" class="level-{{x.Level}}" ng-class="{\'active\':x.Toggle}">' +
			'</li>' +
			'</ul>',
		replace: true,
		scope: {
			data: "=",
			toggleItem: "@"
		},
		link: function(scope, element, attrbute) {
			/*element.on("click", "li", function() {
				var e = event || window.event;
				if($(this).children("ul")) {
					e.preventDefault();
					$(this).children("ul").toggle();
				}
			});*/

			function addLevel(list, n) {
				angular.forEach(list, function(item, index) {
					item.Level = n + 1;
					if(item.Submenus && item.Submenus.length > 0) {
						item.Toggle = false;
						addLevel(item.Submenus, n + 1);
					} else {

					}
				});
			};

			//window.localStorage.clear();
			var leftMemus = JSON.parse(window.localStorage.getItem("leftMemus"));
			if(leftMemus) {
				scope.data = leftMemus;
			} else {
				addLevel(scope.data, 0);
				window.localStorage.setItem("leftMemus", JSON.stringify(scope.data));
			}

			/*折叠其子元素*/
			var toggleChild = function(item) {
				if(!item.Toggle && item.Submenus && item.Submenus.length > 0) {
					item.Submenus.forEach(function(i) {
						i.Toggle = false;
						if(!i.Toggle && i.Submenus && i.Submenus.length > 0) {
							toggleChild(i);
						}
					});
				}
			};

			/*菜单点击事件*/
			scope.toggleItem = function(item, $event) {
				if(item.Submenus && item.Submenus.length > 0) {
					$event.preventDefault();
					item.Toggle = !item.Toggle;
					toggleChild(item);
					window.localStorage.setItem("leftMemus", JSON.stringify(scope.data));
				}

			}
		}
	};
}]);