var mySite = angular.module('mySite',['ngRoute','ngAnimate']);

mySite.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/home',{
		templateUrl:'views/home.html'
	}).
	when('/about',{
		templateUrl:'views/about.html'
	}).
	when('/blog',{
		templateUrl:'views/blog.html',
		// controller:'BlogController'
	}).
	when('/blog/:itemId',{
		templateUrl:'views/blogpost.html',
		// controller:'BlogPostController'
	}).
	when('/work',{
		templateUrl:'views/projectlist.html',
		// controller:'ProjectController'
	}).
	otherwise({
		redirecTo:'/home'
	});
}]);