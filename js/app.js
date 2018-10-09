var App = angular.module("App", [
	'ngAnimate',
	'ui.router',
	'oc.lazyLoad',
	'me-pageloading'
]);

App.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
	function($controllerProvider, $compileProvider, $filterProvider, $provide) {
		App.controller = $controllerProvider.register;
		App.directive = $compileProvider.directive;
		App.filter = $filterProvider.register;
		App.factory = $provide.factory;
		App.service = $provide.service;
		App.constant = $provide.constant;
		App.value = $provide.value;
	}
]);
var ctrlPath = "controller/";
App.constant("APP_REQUIRES", {
	modules: [{
		name: "appCtrl",
		files: [ctrlPath + 'appCtrl.js']
	}, {
		name: "homeCtrl",
		files: [ctrlPath + 'homeCtrl.js']
	}, {
		name: "tableCtrl",
		files: [ctrlPath + 'tableCtrl.js']
	}]
});

/*helpProvider*/
App.provider('RouteHelpers', ['APP_REQUIRES', function(appRequires) {
	"use strict";
	this.basepath = function(uri) {
		return 'views/' + uri;
	};

	this.resolveFor = function() {
		var _args = arguments;
		return {
			deps: ['$ocLazyLoad', '$q', function($ocLL, $q) {
				var promise = $q.when(1);
				for(var i = 0, len = _args.length; i < len; i++) {
					promise = andThen(_args[i]);
				}
				return promise;

				function andThen(_arg) {

					if(typeof _arg == 'function')
						return promise.then(_arg);
					else
						return promise.then(function() {

							var whatToLoad = getRequired(_arg);
							// simple error check
							if(!whatToLoad) return $.error('Route resolve: Bad resource name [' + _arg + ']');

							return $ocLL.load(whatToLoad.files);
						});
				}

				function getRequired(name) {
					if(appRequires.modules)
						for(var m in appRequires.modules)
							if(appRequires.modules[m].name && appRequires.modules[m].name === name) {
								return appRequires.modules[m];
							}
					return appRequires.scripts && appRequires.scripts[name];
				}

			}]
		};
	};

	this.$get = function() {
		return {
			basepath: this.basepath
		}
	};
}]);

/*路由配置*/
App.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider',
	function($stateProvider, $locationProvider, $urlRouterProvider, helper) {
		$urlRouterProvider.otherwise('/app/home');
		$stateProvider.state('app', {
				abstract: true,
				url: '/app',
				templateUrl: helper.basepath('app.html'),
				resolve: helper.resolveFor('appCtrl'),
				controller: 'appCtrl'
			})
			.state('app.home', {
				url: '/home',
				templateUrl: helper.basepath('home.html'),
				title: '首页',
				resolve: helper.resolveFor('homeCtrl'),
				controller: 'homeCtrl'
			})
			.state('app.table', {
				url: '/table',
				templateUrl: helper.basepath('table.html'),
				title: '表格',
				resolve: helper.resolveFor('tableCtrl'),
				controller: 'tableCtrl'
			})

	}
]);

/*页面切换动画化*/
App.animation('.fad', ["mePageLoading", "$timeout", function(mePageLoading, $setTimeout) {
	return {
		/*enter: function(element, done) {
			mePageLoading.show("random");
			element.css({
				opacity: 0
			});
			$setTimeout(function() {
				mePageLoading.hide();
				element.css({
					opacity: 1
				}, 0, done);
			}, 500);
		},
		leave: function(element, done) {
			element.css({
				opacity: 1
			});
			element.animate({
				opacity: 0
			}, 1000, done);
		}*/
		enter: function(element, done) {
			element.css('opacity', 0);
			mePageLoading.show();
			mePageLoading.hide();
			element.animate({
				opacity: 1
			}, done);
			return function(isCancelled) {
				if(isCancelled) {
					element.stop();
				}
			};
		},
		leave: function(element, done) {
			element.css('opacity', 0);
			element.animate({
				opacity: 0
			}, done);

			return function(isCancelled) {
				if(isCancelled) {
					element.stop();
				}
			};
		},
		move: function(element, done) {},
		addClass: function(element, className, done) {},
		removeClass: function(element, className, done) {}
	};
}]);