//兼容判断依赖
(function() {
    var transitionEndEventName = {
        transition: 'transitionend',
        MozTransition: 'transitionend',
        WebKitTransition: 'webkitTransitionEnd',
        OTransition: 'oTransitionEnd otransitionend'
    };
    var transitionEnd = '',
    isSupport = false;

    for(var name in transitionEndEventName){
    	if(document.body.style[name] !== undefined){
    			transitionEnd =  transitionEndEventName[name];
    			isSupport = true;
    			break;
    	}
    }

    window.mt = window.mt || {};
    window.mt.transition = {
    	end:transitionEnd,
    	isSupport: isSupport
    };

})();