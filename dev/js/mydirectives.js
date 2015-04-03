var siteDirectives = angular.module('siteDirectives',[]);

siteDirectives.directive('urDarken', function(){
	return{
		restrict: 'A',
		link: function(scope, element, attr){
			var darkBg = {'background':'rgba(0,0,0,.6)'};
			var defaultBg = {'background':''};

			// check if menu background change was triggered
			var changeTriggered = false;

			function checkWindowWidth(){
				$(window).resize(function(){
					if(changeTriggered){
						if($(window).width() >= 768){
							element.css(defaultBg);
						};
						if($(window).width() < 768){
							element.css(darkBg);
						};
					}
				});
			};

			scope.$watch(attr.urDarken, function(shouldDarken){
				if(shouldDarken){
					element.css(darkBg);
					changeTriggered = true;
					checkWindowWidth();
				} else {
					element.css(defaultBg);
					changeTriggered = false;
				}
			});
		},
	}
});