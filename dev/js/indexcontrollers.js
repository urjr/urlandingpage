var indexControllers = angular.module('indexControllers',[]);

indexControllers.controller("NavbarController",['$scope','$location', function($scope,$location){
	$scope.isActive = function(viewLocation){
		return $location.path().indexOf(viewLocation) == 0;
	};
}]);

indexControllers.controller("TitleController",['$scope','$location', function($scope,$location){
	$scope.titles = [
		{path:'/work',name:'Work'},
		{path:'/about',name:'About'}
	];

	$scope.getTitle = function(){
		for (var i = $scope.titles.length - 1; i >= 0; i--) {
			if ($location.path().indexOf($scope.titles[i].path) == 0) {
				return $scope.titles[i].name + " |";
			};
		};
	};
}]);

indexControllers.controller("ColorController",['$scope', function($scope){
	$scope.colors = ['3fd47d','e74c3c','3498db','7f8c8d','e67e22'];
	$scope.getColor = function(){
		return $scope.colors[Math.floor(Math.random()*$scope.colors.length)];
	};
	$scope.currentColor = $scope.getColor();
}]);