var siteDirectives = angular.module('siteDirectives',[])

.directive('urGetParentWidth', function(){
	return{
		restrict:'A',
		link: function(scope, element){
			function getParentWidth(){
				element.css({
					'width' : element.parent().width()
				});
			};

			getParentWidth();

			angular.element(window).resize(function(){
				getParentWidth();
			});
		}
	}
})

.directive('urMobileSearch', function(){
	return{
		restrict: 'A',
		link: function(scope, element, attr){
			scope.$watch(attr.urMobileSearch, function(isChanged){
				if(isChanged){
					element.addClass('control-panel-mobile');
				} else {
					element.removeClass('control-panel-mobile');
				};
			});
		}
	}
})


.directive('urScreenLock', function(){
	return{
		restrict: 'A',
		link: function(scope, element, attr){
			function lockScreen(){
				$('html').css({
					"height": "100%",
					"overflow": "hidden"
				});
			};

			function unlockScreen(){
				$('html').css({
					"height": "",
					"overflow": ""
				});
			};

			lockScreen();
			element.css({
				"top": window.scrollTop
			});

			element.click(function(){
				unlockScreen();
			});
		}
	}
});

























