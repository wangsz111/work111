<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx247a33dc22b259f3", "9ae504d93affff0110644aa44edb7bdb");
$signPackage = $jssdk->GetSignPackage();
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<script type="text/javascript" src ="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
	<script type="text/javascript">
		  wx.config({
		    debug: true,
		    appId: '<?php echo $signPackage["appId"];?>',
		    timestamp: <?php echo $signPackage["timestamp"];?>,
		    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
		    signature: '<?php echo $signPackage["signature"];?>',
		     jsApiList: [
		        'checkJsApi',
		        'onMenuShareWeibo',
		        'onMenuShareQZone',
		        'hideMenuItems',
		        'showMenuItems',
		        'hideAllNonBaseMenuItem',
		        'showAllNonBaseMenuItem',
		        'translateVoice',
		        'startRecord',
		        'stopRecord',
		        'onVoiceRecordEnd',
		        'playVoice',
		        'onVoicePlayEnd',
		        'pauseVoice',
		        'stopVoice',
		        'uploadVoice',
		        'downloadVoice',
		        'chooseImage',
		        'previewImage',
		        'uploadImage',
		        'downloadImage',
		        'getNetworkType',
		        'openLocation',
		        'getLocation',
		        'hideOptionMenu',
		        'showOptionMenu',
		        'closeWindow',
		        'scanQRCode',
		        'chooseWXPay',
		        'openProductSpecificView',
		        'addCard',
		        'chooseCard',
		        'openCard'
		    ]
		});
		  var latitude = 0,
				longitude =0;
		  function getLocation(){
				wx.getLocation({
				    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
				    success: function (res) {
				        latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
				        longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
				        var speed = res.speed; // 速度，以米/每秒计
				        var accuracy = res.accuracy; // 位置精度
				        alert(latitude);
				        alert(longitude);

				    }
				});
		  }
		
		function openLocation(){
			wx.openLocation({
			    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
			    longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
			    name: '', // 位置名
			    address: '', // 地址详情说明
			    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
			    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
			});
		}
	</script>
	
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
	<title></title>
	<script type="text/javascript" src="js/device_width.js"></script>
	<script type="text/javascript" data-main="app.js" src="js/require.js"></script>
	<link rel="stylesheet" type="text/css" href="css/index.css">
</head>
<body>
	<div class="main">
		<div class="home"></div>
		<div class="supermarket"></div>
		<div class="shoppingCart"></div>
		<div class="mine"></div>
		<div class="search"></div>
		<div class="seckill"></div>
		<div class="collect_com"></div>
		<div class="collect_sto"></div>
		<div class="myOrder"></div>
		<div class="integral"></div>
		<div class="coupon"></div>
		<input type="button" id="btn1" onclick = "getLocation()" value="按钮1">
		<input type="button" id="btn2" onclick="openLocation()" value="按钮2">
	</div>
	<div id="index_footer">
		<figure>
			<img src="img/ft1.jpg">
			<figcaption>
				<p><a href="#home" id="home">首页</a></p>
			</figcaption>
		</figure>
		<figure>
			<img src="img/ft2.jpg">
			<figcaption>
				<p><a href="#supermarket" id="supermarket">闪送超市</a></p>
			</figcaption>
		</figure>
		<figure>
			<img src="img/ft3.jpg">
			<figcaption>
				<p><a href="#shoppingCart" id="shoppingCart">购物车</a></p>
			</figcaption>
		</figure>
		<figure>
			<img src="img/ft4.jpg">
			<figcaption>
				<p><a href="#mine" id="mine">我的</a></p>
			</figcaption>
		</figure>
	</div>
	
</body>
</html>