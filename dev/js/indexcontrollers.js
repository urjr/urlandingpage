var indexControllers = angular.module('indexControllers',[]);

indexControllers.controller("NavbarController",['$scope','$location', function($scope,$location){
	$scope.isActive = function(viewLocation){
		return $location.path().indexOf(viewLocation) == 0;
	};
}]);

indexControllers.controller("ColorController",['$scope', function($scope){
	$scope.colors = ['3fd47d','e74c3c','3498db','7f8c8d','e67e22'];
	$scope.getColor = function(){
		return $scope.colors[Math.floor(Math.random()*$scope.colors.length)];
	};
	$scope.currentColor = $scope.getColor();
}]);