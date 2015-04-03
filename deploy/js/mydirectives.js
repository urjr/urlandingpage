var siteDirectives = angular.module('siteDirectives',[]);

siteDirectives.directive('urDarken', function(){
	return{
		restrict: 'A',
		link: function(scope, element, attr){
			scope.$watch(attr.urDarken, function(souldDarken){
				if(souldDarken){
					element.css({
						'background':'rgba(0,0,0,.6)'
					});
				} else {
					element.css({
						'background':''
					});
				}
			});
		},
	}
});