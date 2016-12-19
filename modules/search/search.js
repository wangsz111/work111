define(["text!./search.html","css!./search.css"],function(searchPage){
	return{
		init:function(){
			if($(".search").children().size()>0){
				$(".search").show().siblings('div').hide().parent().siblings("#index_footer").hide();
			}else{
				$(".search").html(searchPage).show().siblings("div").hide().parent().siblings("#index_footer").hide();
			}
		}
	}
});

