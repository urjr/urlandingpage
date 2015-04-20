var projectControllers = angular.module("projectControllers", []);

projectControllers.controller("ProjectController", ['$scope', '$http', function($scope, $http){
	$http.get('js/data.json').success(function(data){
		$scope.projects = data;
	});
}]);

projectControllers.controller("FeatureController", ['$scope', '$http', '$stateParams', '$animate','$timeout', function($scope, $http, $stateParams, $animate, $timeout){
	$http.get('js/data.json').success(function(data){
		$scope.feature = data[$stateParams.projectId];
	});
	$scope.whoIs = $stateParams.projectId;

	//hacky fix for carousel
  $timeout(function() {
    $animate.enabled(false, angular.element(".carousel"))
  })
}]);