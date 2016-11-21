//DOM操作

$(".w-nav-nav>ul").css("display", "none")
$(".nav-first").mouseenter(function() {
	$(".w-nav-nav>ul").css("display", "")
	$(".icon-angle-down").attr("class", "icon-angle-up")
})

$(".w-nav-nav").mouseleave(function() {
	$(".w-nav-nav>ul").css("display", "none")
	$(".icon-angle-up").attr("class", "icon-angle-down")

})

//鼠标放上去图片显示

$("#goods-list li").eq(0).mouseover(function() {

	$(".w-nav-nav-img-div").hide()

}).mouseleave(function() {
	$(".w-nav-nav-img-div").show()

})
$("#goods-list li").eq(1).mouseover(function() {

	$(".w-nav-nav-img-div").css({
		"background-image": "url(img/14425638157743380.jpg)",
		"z-index": "10",
		"title": "蔬菜水果"
	})

	$(".w-nav-nav-img-div-first>a").text("蔬菜水果")

	$(".reduplicate-one a").text("蔬菜")
	$(".reduplicate-two a").text("")
	$(".reduplicate-three a").text("")
	$(".reduplicate-four a").text("")
	$(".reduplicate-five a").text("")
	$(".reduplicate-six a").text("")
	$(".reduplicate-seven a").text("")
})
$("#goods-list li").eq(2).mouseover(function() {

	$(".w-nav-nav-img-div").css({
		"background-image": "url(img/144248428837942547.jpg)",
		"z-index": "10",
		"title": "蔬菜水果"
	})
	$(".w-nav-nav-img-div-first>a").text("水产海鲜")

	$(".w-nav-nav-img-div-second a").text("")
	$(".reduplicate-one a").text("刺身/三文鱼")
	$(".reduplicate-two a").text("虾/蟹/贝")
	$(".reduplicate-three a").text("海鲜")
	$(".reduplicate-four a").text("河鲜")
	$(".reduplicate-five a").text("加工水产")
	$(".reduplicate-six a").text("海参/鲍鱼")
	$(".reduplicate-seven a").text("礼盒/礼券")

})
$("#goods-list li").eq(3).mouseover(function() {
	$(".w-nav-nav-img-div").css({
		"background-image": "url(img/144248423887765294.jpg)",
		"z-index": "10",
		"title": "肉禽蛋类"
	})
	$(".w-nav-nav-img-div-first>a").text("肉禽蛋类")
	$(".w-nav-nav-img-div-second a").text("")
	$(".reduplicate-one a").text("蛋类")
	$(".reduplicate-two a").text("猪肉")
	$(".reduplicate-three a").text("家禽")
	$(".reduplicate-four a").text("牛羊肉")
	$(".reduplicate-five a").text("肉制品")
	$(".reduplicate-six a").text("")
	$(".reduplicate-seven a").text("")
})