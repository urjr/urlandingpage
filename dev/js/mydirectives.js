var siteDirectives = angular.module('siteDirectives',[])

siteDirectives.directive('urDarken', function(){
	return{
		restrict: 'A',
		link: function(scope, element, attr){
			var darkBg = {'background':'rgba(0,0,0,.8)'};
			var defaultBg = {'background':''};

			// check if menu background change was triggered
			var changeTriggered = false;

			// checks for css tablet breakpoint, removes newly added dark background when larger than 768px
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

			//darkens navbar background when event is triggered
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
})

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
});

























