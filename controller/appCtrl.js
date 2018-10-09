App.controller("appCtrl", ["$scope",
	function($scope) {
		$scope.submenus = [{
			Id: 1,
			Name: "首页",
			Url: "app.home",
			Icon: "fa fa-home"
		}, {
			Id: 1,
			Name: "表格",
			Url: "app.table",
			Icon: "fa fa-table",
			Submenus: [{
				Id: 1,
				Name: "二级菜单1",
				Url: "app.home",
				Icon: "fa fa-grav",
				Level: "level2",
				Submenus: [{
					Id: 1,
					Name: "三级菜单1",
					Url: "app.home",
					Icon: "fa fa-grav",
					Level: "level2",
					Submenus: [{
						Id: 1,
						Name: "四级菜单1",
						Url: "app.home",
						Icon: "fa fa-grav",
						Level: "level2"
					}, {
						Id: 1,
						Name: "四级菜单2",
						Url: "app.home",
						Icon: "fa fa-grav",
						Level: "level2"
					}, {
						Id: 1,
						Name: "四级菜单3",
						Url: "app.home",
						Icon: "fa fa-grav",
						Level: "level2"
					}]
				}, {
					Id: 1,
					Name: "三级菜单2",
					Url: "app.home",
					Icon: "fa fa-grav",
					Level: "level2"
				}, {
					Id: 1,
					Name: "三级菜单3",
					Url: "app.home",
					Icon: "fa fa-grav",
					Level: "level2"
				}]
			}, {
				Id: 1,
				Name: "二级菜单2",
				Url: "app.home",
				Icon: "fa fa-grav",
				Level: "level2"
			}, {
				Id: 1,
				Name: "二级菜单3",
				Url: "app.home",
				Icon: "fa fa-grav",
				Level: "level2"
			}]
		}, {
			Id: 1,
			Name: "首页",
			Url: "app.home",
			Icon: "fa fa-grav"
		}, {
			Id: 1,
			Name: "表格",
			Url: "app.table",
			Icon: "fa fa-group"
		}, {
			Id: 1,
			Name: "首页",
			Url: "app.home",
			Icon: "fa fa-user"
		}, {
			Id: 1,
			Name: "表格",
			Url: "app.table",
			Icon: "fa fa-edit"
		}, {
			Id: 1,
			Name: "首页",
			Url: "app.home",
			Icon: "fa fa-magic"
		}, {
			Id: 1,
			Name: "表格",
			Url: "app.table",
			Icon: "fa fa-phone"
		}, {
			Id: 1,
			Name: "首页",
			Url: "app.home",
			Icon: "fa fa-edit"
		}, {
			Id: 1,
			Name: "表格",
			Url: "app.table",
			Icon: "fa fa-phone"
		}, {
			Id: 1,
			Name: "首页",
			Url: "app.home",
			Icon: "fa fa-send"
		}, {
			Id: 1,
			Name: "表格",
			Url: "app.table"
		}, {
			Id: 1,
			Name: "首页",
			Url: "app.home"
		}, {
			Id: 1,
			Name: "表格",
			Url: "app.table"
		}, {
			Id: 1,
			Name: "首页",
			Url: "app.home"
		}, {
			Id: 1,
			Name: "表格",
			Url: "app.table"
		}];

	}
]);