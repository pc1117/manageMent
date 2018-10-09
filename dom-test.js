/*ss*/
var olE = {
	tagName: 'ul', // 标签名
	props: { // 属性用对象存储键值对
		id: 'ol-list'
	},
	children: [ // 子节点
		{
			tagName: 'li',
			props: {
				class: 'item'
			},
			children: [{
				tagName: "a",
				style: {
					"font-size": "16px",
					"color": "#369",
					"text-decoration": "none"
				},
				props: {
					class: "href",
					href: 'http://www.baidu.com'
				},
				children: "Item 1"
			}]
		},
		{
			tagName: 'li',
			props: {
				class: 'item'
			},
			children: ["Item 2"]
		},
		{
			tagName: 'li',
			props: {
				class: 'item'
			},
			children: ["Item 3"]
		},
	]
}

var createDom = function(obj) {
	if(typeof obj === "object") {
		//创建dom元素
		let newDom = document.createElement(obj.tagName);
		//设置元素样式
		if(!!obj.style) {
			var styleString = "";
			for(let x in obj.style) {
				var v = obj.style[x];
				styleString += x + ":" + v + ";"
			}
			newDom.setAttribute("style", styleString);

		}
		//设置元素属性
		if(!!obj.props) {
			for(let x in obj.props) {
				newDom.setAttribute([x], obj.props[x]);
			}
		}
		//设置子元素
		if(obj.children) {
			if(obj.children instanceof Array) {
				for(let x = 0; x < obj.children.length; x++) {
					var item = obj.children[x];
					if(typeof item === "object") {
						newDom.appendChild(createDom(item));
					} else if(typeof item === "string") {
						newDom.innerHTML = item;
					}
				}
			} else if(typeof obj.children === "string") {
				newDom.innerHTML = obj.children;
			}

		}
		//添加dom到body中
		document.body.appendChild(newDom);
		return newDom;
	}
};

createDom(olE);

var deferred = $.Deferred();
var promised = deferred.promise();
setTimeout(function() {
	deferred.resolve("success");
}, 3000);
promised.then(function() {
	console.log(...arguments);
}, function() {
	console.log(...arguments);
}, function() {
	console.log(...arguments);
});

var a = $.ajax({
	method: "get",
	url: "package.json",
	beforeSend() {
		$("body").css("background-color", "#004085");
	},
	complete() {
		$("body").css("background-color", "#ffffff");
	}
});
a.then(function(response) {
	console.log(response);
})

var App = angular.module("myApp", []);
App.controller("myCtrl", ["$scope", "$http", function($scope, $http) {

	var b = $http({
		method: "get",
		url: "package.json"
	}).then(function(response) {

	});

	$scope.tables = [{
		Name: "彭聪",
		Number: 511324198811173074,
		Phone: "18011511225",
		Adds: "牧华路999号",
		Sex: 1
	}, {
		Name: "唐莉",
		Number: 511324199311073042,
		Phone: "18111511345",
		Adds: "南湖西路",
		Sex: 2
	}];
	console.log($scope.tables);

	console.log(b);
}]);
