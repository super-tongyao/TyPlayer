var i = 0;
$(function (){
	$("#tongyao-music").css("left","-325px")
	$("#tongyao-left").click(function(){
		if(i == 0){
			$("#tongyao-music").css("left","-325px")
			$("#tongyao-left").html("&lt;")
			i = 1;
		}else{
			$("#tongyao-music").css("left","10px")
			$("#tongyao-left").html("&gt;")
			i = 0
		}
	})
	setTimeout(function (){
		$("#tongyao-music").css("left","10px")
	},1000)
	console.log('%cTongYao_Player','font-size:2em');
	console.log(decodeURI("%E8%AF%B7%E5%8A%A1%E5%BF%85%E4%BF%9D%E7%95%99Tongyao_Player%E4%BD%9C%E8%80%85%E7%89%88%E6%9D%83%E4%BF%A1%E6%81%AF%E3%80%82%E5%8D%9A%E5%AE%A2%E5%9C%B0%E5%9D%80%EF%BC%9A")+"http://blog.yaoyaoman.cn \n\nGithub:https://github.com/super-tongyao/Tongyao_Player.git ")
})
