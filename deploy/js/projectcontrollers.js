var projectControllers = angular.module("projectControllers", []);

projectControllers.controller("ProjectController", ['$scope', '$http', function($scope, $http){
	$http.get('js/data.json').success(function(data){
		$scope.projects = data;
	});
}]);