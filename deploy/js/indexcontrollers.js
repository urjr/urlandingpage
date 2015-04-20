var indexControllers = angular.module('indexControllers',[]);

indexControllers.controller("IndexController",['$scope','$location', function($scope, $location){
	// Get random color for background and navbar
	$scope.colors = ['63,212,125','231,76,60','52,152,219','127,140,141','230,126,34'];
	$scope.getColor = function(){
		return $scope.colors[Math.floor(Math.random()*$scope.colors.length)];
	};
	$scope.currentColor = $scope.getColor();
	$scope.currentFavicon = $scope.currentColor.replace(/,/g, '');

	//Get add selected class to current section in navbar
	$scope.isActive = function(viewLocation){
		return $location.path().indexOf(viewLocation) == 0;
	};

	//Include page name in title
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