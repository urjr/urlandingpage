var mySite = angular.module('mySite',[
	'ui.router',
	'ngAnimate',
	'ui.bootstrap',
	'sun.scrollable',
	'indexControllers',
	'siteDirectives'
	]);

mySite.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider

		.state('home', {
			url: '/home',
			templateUrl:'../views/home.html'
		})

		.state('about', {
			url: '/about',
			templateUrl:'../views/about.html'
		})

		.state('work',{
			url:'/work',
			templateUrl:'../views/projectlist.html'
		})

		.state ('work-dev', {
			url: '/work-dev',
			templateUrl:'../views/work.html'
		})
}]);

// mySite.config(['$routeProvider', function($routeProvider){
// 	$routeProvider.
// 	when('/home',{
// 		templateUrl:'../views/home.html'
// 	}).
// 	when('/about',{
// 		templateUrl:'../views/about.html'
// 	}).
// 	when('/blog',{
// 		templateUrl:'../views/blog.html',
// 		// controller:'BlogController'
// 	}).
// 	when('/blog/:itemId',{
// 		templateUrl:'../views/blogpost.html',
// 		// controller:'BlogPostController'
// 	}).
// 	when('/work',{
// 		templateUrl:'../views/projectlist.html',
// 		// controller:'ProjectController'
// 	}).
// 	otherwise({
// 		redirectTo:'/home'
// 	});
// }]);