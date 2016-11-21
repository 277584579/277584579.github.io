//轮播图
function Shuffing(){
	

var currentIndex = 0;
$(".lbt-img").eq(currentIndex).fadeIn()
$(".point").eq(currentIndex).css({
	"background": "green",
	"opacity": "0.8"
})

function shuffling() {

	$(".lbt-img").eq(currentIndex).fadeOut()
	$(".point").eq(currentIndex).css({
		"background": "#BFBAB1",
		"opacity": "0.6"
	})
	currentIndex++;
	if(currentIndex > 2) {
		currentIndex = 0;
	}

	$(".lbt-img").eq(currentIndex).fadeIn()
	$(".point").eq(currentIndex).css({
		"background": "green",
		"opacity": "0.8"
	})
}

var timer = setInterval(shuffling, 4000)
	// 

		
	
$(".point").each(function(i) {
	$(".point").eq(i).mouseenter(function() {

		$(".point").eq(i).css({
			"background": "#BFBAB1",
			"opacity": "0.6"
		})
		clearInterval(timer)
		$(".lbt-img").fadeOut()
		$(".lbt-img").eq(i).fadeIn()
		$(".point").css({
			"background": "#BFBAB1",
			"opacity": "0.6"
		})
		$(".point").eq(i).css({
			"background": "green",
			"opacity": "0.8"
		})

	}).mouseleave(function() {
		timer = setInterval(shuffling, 4000)

	})
	

})
}
Shuffing();