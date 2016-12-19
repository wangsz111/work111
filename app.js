require.config({
	paths:{
		"jquery":["js/jquery-1.11.2","js/jquery-1.8.1"],
		"backbone":"js/backbone",
		"underscore":"js/underscore",
		"text":"js/text",
		"css":"js/css",
		"swiper":"js/swiper.min",
		"baidu":"js/baiduTemplate",
		"lazyload":"js/jquery.lazyload.min"
	}
});

require(["jquery","backbone","router.js"],function($,Backbone){
	Backbone.history.start();
});










