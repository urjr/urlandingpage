var mySite = angular.module('mySite',['ngRoute','ngAnimate']);

mySite.controller('ColorController',['$scope', function($scope){
	$scope.colors = ['3fd47d','e74c3c','3498db','7f8c8d','f1c40f','9b59b6','34495e'];
	$scope.getColor = function(){
		return $scope.colors[Math.floor(Math.random()*$scope.colors.length)];
	};
	$scope.currentColor = $scope.getColor();
}]);

mySite.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/home',{
		templateUrl:'../views/home.html'
	}).
	when('/about',{
		templateUrl:'../views/about.html'
	}).
	when('/blog',{
		templateUrl:'../views/blog.html',
		// controller:'BlogController'
	}).
	when('/blog/:itemId',{
		templateUrl:'../views/blogpost.html',
		// controller:'BlogPostController'
	}).
	when('/work',{
		templateUrl:'../views/projectlist.html',
		// controller:'ProjectController'
	}).
	otherwise({
		redirectTo:'/home'
	});
}]);