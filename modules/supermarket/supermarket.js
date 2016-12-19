define(["text!./supermarket.html","css!./supermarket.css","baidu"],function(supermarketPage){
	return{
		init:function(){
			if($(".supermarket").children().size()>0) {
				$(".supermarket").show().siblings("div").hide();
			}else{
				$(".supermarket").html(supermarketPage).show().siblings("div").hide();

				//ajax获取左边菜单数据
				$("#supermarket_nav_ul").load("modules/templete/supermarket1.html",function(){
					$.ajax("../json/getCategoryProducts.json",{
						success:function(data,textStatus,jqXHR){
							var supermarket_data = baidu.template("supermarket1",data);
							$("#supermarket_nav_ul").html(supermarket_data);
						}
					})
				});
				//ajax获取右边菜单数据
				$("#supermarket_nav_div_div").load("modules/templete/supermarket2.html",function(){
					$.ajax("../json/getCategoryProducts.json",{
						success:function(data,textStatus,jqXHR){
							var data1 = data.data.products["104749"];
							var supermarket_data = baidu.template("supermarket2",{data:data1});
							$("#supermarket_nav_div_div").html(supermarket_data);
						}
					})
				});
				//ajax获取右边菜单上方排序数据
					$("#supermarket_nav_div_ul").load("modules/templete/supermarket3.html",function(){
						$.ajax("../json/getCategoryProducts.json",{
							success:function(data,textStatus,jqXHR){
								var data1 = data.data.categories[0];
								var supermarket_data = baidu.template("supermarket3",{data:data1});
								$("#supermarket_nav_div_ul").html(supermarket_data);
							}
						})
					});
				//点击左边菜单，使右边菜单进行切换
				$("#supermarket_nav_ul").off("click").on("click","li",function(e){
					$("#supermarket_nav_ul span").hide();
					$(this).find("span").show();
					$("#supermarket_nav_div_ul div").hide();
					var id = this.id,
						ind = $(this).index();
					//重新获取右侧数据
					$("#supermarket_nav_div_div").load("modules/templete/supermarket2.html",function(){
						$.ajax("../json/getCategoryProducts.json",{
							success:function(data,textStatus,jqXHR){
								var data1 = data.data.products[id];
								var supermarket_data = baidu.template("supermarket2",{data:data1});
								$("#supermarket_nav_div_div").html(supermarket_data);
							}
						})
					});
					//ajax获取右边菜单上方排序数据
					$("#supermarket_nav_div_ul").load("modules/templete/supermarket3.html",function(){
						$.ajax("../json/getCategoryProducts.json",{
							success:function(data,textStatus,jqXHR){
								var data1 = data.data.categories[ind];
								var supermarket_data = baidu.template("supermarket3",{data:data1});
								$("#supermarket_nav_div_ul").html(supermarket_data);
							}
						})
					});
				});
				//点击右边菜单上方的排序
				var flag = true;
				$("#supermarket_nav_div_ul").off("click").on("click","li",function(){
					if(flag){
						$("#supermarket_nav_div_ul div").hide();	
						$(this).find("div").show();
						flag = false;
					}else{
						$(this).find("div").hide();
						flag = true;
					}
					
				});





			}
		}
	}
});
	



	
