define(["text!./shoppingCart.html","css!./shoppingCart.css"],function(shoppingCartPage){
	return{
		init:function(){
			if($(".shoppingCart").children().size()>0) {
				$(".shoppingCart").show().siblings("div").hide();
			}else{
				$(".shoppingCart").html(shoppingCartPage).show().siblings("div").hide();
			}
		}
	}
});
	


