define(["backbone"],function(Backbone){
	var Router = Backbone.Router.extend({
		routes:{
			home:"home",
			supermarket:"supermarket",
			shoppingCart:"shoppingCart",
			mine:"mine"
		},
		home:function(){
			require(["modules/home/home.js"],function(home){
				home.init();
			});
		},
		supermarket:function(){
			require(["modules/supermarket/supermarket.js"],function(supermarket){
				supermarket.init();
			});
		},
		shoppingCart:function(){
			require(["moudles/shoppingCart/shoppingCart.js"],function(shoppingCart){
				shoppingCart.init();
			});
		},
		mine:function(){
			require(["moudles/mine/mine.js"],function(mine){
				mine.init();
			})
		}

	});
	return new Router();
});