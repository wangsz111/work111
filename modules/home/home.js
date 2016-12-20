define(["text!./home.html","css!./home.css","css!./swiper.min.css","baidu","swiper"],function(homePage){
	return{
		init:function(){
			if($(".home").children().size()>0){
				$(".home").show().siblings("div").hide().parent().siblings("#index_footer").show();
			}else{
				$(".home").html(homePage).show().siblings("div").hide();
	
				// 轮播图
				$("#index_banner").load("modules/templete/lbt.html",function(){
					$.ajax("../../json/homeData.json",{
						success:function(data,textStatus,jqXHR){
							// ajax获取 轮播图图片
							var lbt_data = baidu.template("lbt",data);
							$("#index_banner").html(lbt_data);
							// swiper 处理轮播图
							var mySwiper = new Swiper('.swiper-container',{
								autoplay: 1000,
								pagination : '.swiper-pagination',
								paginationHide :true
							});
						}
					})
				});


				$("#index_nav1").load("modules/templete/index_nav.html",function(){
					$.ajax("../../json/homeData.json",{
						success:function(data,textStatus,jqXHR){
							//轮播图下方菜单
							var index_nav_data = baidu.template("index_nav",data);
							$("#index_nav1").html(index_nav_data);	
						}
					})
				});

				$("#allDiv").load("modules/templete/allDiv.html",function(){
					$.ajax("../../json/homeData.json",{
						success:function(data,textStatus,jqXHR){
							//下方数据
							var allDiv_data = baidu.template("allDiv1",data);
							$("#allDiv").html(allDiv_data);	
						}
					})
				});
				// 点击加号，添加购物车
				var arr = [],
					count = 1,
					arr1 = [];
				$("#allDiv").off("click").on("click",".dd_id",function(){
					if(typeof Storage !="undifined"){
						var id = this.id;
						var num = arr1.indexOf(id);
						if(num>=0){
							count = count+1;
							var str = JSON.parse(arr[num]);
							str.count = count;
							str = JSON.stringify(str);
							arr.splice(num,1,str);
						}else{
							localStorage.id = this.id;
							localStorage.img = $(this).parent().children("dt").children()[0].currentSrc;
							localStorage.name = $(this).siblings()[1].innerHTML;
							localStorage.price =$(this).siblings()[4].firstChild.innerHTML;
							localStorage.count = count;
							arr1.push(id);
						}
						console.log(arr1);
						arr.push(JSON.stringify(localStorage));
						console.log(arr);
						localStorage.clear();
					}else{
						console.log("您的浏览器不支持本地存储");
					}


				});
				// 点击购物车显示购物车信息
				$("#shoppingCart").on("click",function(){
					console.log(arr);
				})


			}
		}
	}
});
	
