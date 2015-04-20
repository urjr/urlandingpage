var siteDirectives = angular.module('siteDirectives',[])

//flip navbar button
.directive('urFlip', function(){
	return{
		restrict: 'A',
		link: function(scope, element){
			var arrowDown = 'fa-caret-square-o-down';
			var arrowUp = 'fa-caret-square-o-up';

			element.addClass(arrowDown);

			element.click(function(){
				element.toggleClass(arrowDown);
				element.toggleClass(arrowUp);
			});
		}
	}
})

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

.directive('urHideFeature', function(){
	return{
		restrict: 'A',
		link: function(scope, element, attr){
			element.on('click', function(){
				element.parent().parent().parent().fadeOut('slow');
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

			// var exists = true
			lockScreen();
			element.css({
				"top": window.scrollTop
			});

			element.click(function(){
				unlockScreen();
				// exists = false
			});

			// $(window).resize(function(){
			// 	if (exists){
			// 		if($(window).width() >= 992){
			// 			lockScreen();
			// 		};
			// 		if($(window).width() < 991){
			// 			unlockScreen();
			// 		};
			// 	};
			// });
		}
	}
});

























