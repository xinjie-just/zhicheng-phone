$(document).ready(function() {
	// 返回
	$("#back").on("click", function(){
		window.history.go(-1);
	});

	// 给页面标题 header h1 添加 letter-spacing 
	var h1Len = $("#header h1").text().length;
	if (h1Len == 2) {
		$("#header h1").css({
			letterSpacing: "0.7rem",
			paddingLeft: "0.7rem"
		});
	}
	if (h1Len == 3) {
		$("#header h1").css({
			letterSpacing: "0.4rem",
			paddingLeft: "0.4rem"
		});
	}	
	if (h1Len > 4) {
		$("#header h1").css({
			fontSize: "0.8rem",
			paddingLeft: "2.5rem",
			paddingRight: "2.5rem",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap"
		});
	}

	// 菜单
	$("#menu").on("click", function(e){
		$("#navList").slideToggle(400);
		$(document).on("click",function(){
			$("#navList").slideUp(400);
		});
		e.stopPropagation();
	});
	$("#navList").on("click",function(e){
		e.stopPropagation();
	});
	
	/*===设置文章格式===*/
	$(".details-article").css("fontSize", "14px");
	// 删除图片宽高属性
	$(".article img").removeAttr("width");
	$(".article img").removeAttr("height");
	// 设置图片样式
	$(".article img").css({
		display: "block",
		maxWidth: "100%",
		height: "auto",
		margin: "15px auto 0"
	});
	$(".article img + img").css("marginTop", "8px");
	// 设置段落样式
	$(".article > div, .article > p").css({
		fontSize: "14px",
		textIndent: "2.2em",
		letterSpacing: ".1em",
		lineHeight: 1.8,
		marginTop: "7px",
		textAlign: "justify",
		wordWrap: "breakWord"	
	});
	// 删除段落中多余的换行
	$(".article:has(br) br").remove();
	$(".article > div:has(br) br").remove();
});
