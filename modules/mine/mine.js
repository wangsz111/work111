define(["text!./mine.html","css!./mine.css"],function(minePage){
	return{
		init:function(){
			if($(".mine").children().size()>0) {
				$(".mine").show().siblings("div").hide().parent().siblings("#index_footer").show();
			}else{
				$(".mine").html(minePage).show().siblings("div").hide();
			}
		}
	}
});
	


