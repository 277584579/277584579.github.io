



//小轮播图
function smallShuffing(){
	

 var imgs= $("#lbt-small>img")
 
 var points = $(".point-small")
 

			points[0].style.backgroundColor = "#F97E8F";
		
		for (var i = 0;i<imgs.length;i++) {
			imgs[i].style.left = i*400+"px";
		}
		
		//定义一个变量，记录当前显示的图片索引。
		var currentIndex = 0;
		
		
		//由于定时器触发的自动切换图片和手动点击小白点时切换图片
		//执行的代码是相同的，所以把这段代码写在函数中，两个地方都
		//可以调用
		function moveImage(isAnimate){
			for (var i = 0;i<imgs.length;i++) {
				
				if(currentIndex == 0&&!isAnimate){
					imgs[i].style.transition = "none";
					
				}else{
					imgs[i].style.transition = "left 0.5s ease-in-out";
				}
				
				imgs[i].style.left = (i-currentIndex)*400+"px";
			}
		}
		
		
		function changeImage(){
			
			//先把前一个白点变透明
			points[currentIndex%2].style.backgroundColor = "#B8CABA";
			points[currentIndex%2].style.opacity = "0.6";
			currentIndex++;
			
			if(currentIndex>2){
				currentIndex = 0;
			}
			
			//把当前白点变白
			points[currentIndex%2].style.backgroundColor = "#F97E8F";
			points[currentIndex%2].style.opacity = "0.9";
			moveImage(false);
			
			if(currentIndex == 0){
				timer = setTimeout(changeImage,1500);
			}else if(currentIndex == 2){
				timer = setTimeout(changeImage,1500);
			}else{
				timer = setTimeout(changeImage,3000);
			}
			
		}
		
		var timer = setTimeout(changeImage,3000);
		
		
		//给每个小白点添加点击事件监听
		for (var i = 0;i<points.length;i++) {
			points[i].dataset.index = i;
			points[i].onmouseenter = function(){
				points[currentIndex%4].style.backgroundColor = "transparent";
				
				this.style.backgroundColor = "#F97E8F";
				//把当前需要显示的图片索引设置为点击的索引
				currentIndex = this.dataset.index;
				
				moveImage(true);
				
				//为了手动点击的切换和自动切换不相互影响，点击时
				//把自动切换停止，再从新开启。
				clearTimeout(timer);
				timer = setTimeout(changeImage,3000);
			}

		}
		}
            smallShuffing()
            





//小轮播图2
function smallShuffSecond(){
	

 var imgs= $(".lbt-small-second>img")
 
 var points = $(".point-small-second")
 

			points[0].style.backgroundColor = "#5DB5F4";
		
		for (var i = 0;i<imgs.length;i++) {
			imgs[i].style.left = i*400+"px";
		}
		
		//定义一个变量，记录当前显示的图片索引。
		var currentIndex = 0;
		
		
		//由于定时器触发的自动切换图片和手动点击小白点时切换图片
		//执行的代码是相同的，所以把这段代码写在函数中，两个地方都
		//可以调用
		function moveImage(isAnimate){
			for (var i = 0;i<imgs.length;i++) {
				
				if(currentIndex == 0&&!isAnimate){
					imgs[i].style.transition = "none";
					
				}else{
					imgs[i].style.transition = "left 0.5s ease-in-out";
				}
				
				imgs[i].style.left = (i-currentIndex)*400+"px";
			}
		}
		
		
		function changeImage(){
			
			//先把前一个白点变透明
			points[currentIndex%2].style.backgroundColor = "#B8CABA";
			points[currentIndex%2].style.opacity = "0.6";
			currentIndex++;
			
			if(currentIndex>2){
				currentIndex = 0;
			}
			
			//把当前白点变白
			points[currentIndex%2].style.backgroundColor = "#5DB5F4";
			points[currentIndex%2].style.opacity = "0.9";
			moveImage(false);
			
			if(currentIndex == 0){
				timer = setTimeout(changeImage,2000);
			}else if(currentIndex == 2){
				timer = setTimeout(changeImage,2000);
			}else{
				timer = setTimeout(changeImage,4000);
			}
			
		}
		
		var timer = setTimeout(changeImage,4000);
		
		
		//给每个小白点添加点击事件监听
		for (var i = 0;i<points.length;i++) {
			points[i].dataset.index = i;
			points[i].onmouseenter = function(){
				points[currentIndex%4].style.backgroundColor = "transparent";
				
				this.style.backgroundColor = "#5DB5F4";
				//把当前需要显示的图片索引设置为点击的索引
				currentIndex = this.dataset.index;
				
				moveImage(true);
				
				//为了手动点击的切换和自动切换不相互影响，点击时
				//把自动切换停止，再从新开启。
				clearTimeout(timer);
				timer = setTimeout(changeImage,4000);
			}

		}
		}
//          smallShuffSecond()
            
        setTimeout(smallShuffSecond,1000)




//小轮播图3
function smallShuffThree(){
	

 var imgs= $(".lbt-small-three>img")
 
 var points = $(".point-small-three")
 

			points[0].style.backgroundColor = "#89C62E";
		
		for (var i = 0;i<imgs.length;i++) {
			imgs[i].style.left = i*400+"px";
		}
		
		//定义一个变量，记录当前显示的图片索引。
		var currentIndex = 0;
		
		
		//由于定时器触发的自动切换图片和手动点击小白点时切换图片
		//执行的代码是相同的，所以把这段代码写在函数中，两个地方都
		//可以调用
		function moveImage(isAnimate){
			for (var i = 0;i<imgs.length;i++) {
				
				if(currentIndex == 0&&!isAnimate){
					imgs[i].style.transition = "none";
					
				}else{
					imgs[i].style.transition = "left 0.5s ease-in-out";
				}
				
				imgs[i].style.left = (i-currentIndex)*400+"px";
			}
		}
		
		
		function changeImage(){
			
			//先把前一个白点变透明
			points[currentIndex%2].style.backgroundColor = "#B8CABA";
			points[currentIndex%2].style.opacity = "0.6";
			currentIndex++;
			
			if(currentIndex>2){
				currentIndex = 0;
			}
			
			//把当前白点变白
			points[currentIndex%2].style.backgroundColor = "#89C62E";
			points[currentIndex%2].style.opacity = "0.9";
			moveImage(false);
			
			if(currentIndex == 0){
				timer = setTimeout(changeImage,2000);
			}else if(currentIndex == 2){
				timer = setTimeout(changeImage,2000);
			}else{
				timer = setTimeout(changeImage,4000);
			}
			
		}
		
		var timer = setTimeout(changeImage,4000);
		
		
		//给每个小白点添加点击事件监听
		for (var i = 0;i<points.length;i++) {
			points[i].dataset.index = i;
			points[i].onmouseenter = function(){
				points[currentIndex%4].style.backgroundColor = "transparent";
				
				this.style.backgroundColor = "#89C62E";
				//把当前需要显示的图片索引设置为点击的索引
				currentIndex = this.dataset.index;
				
				moveImage(true);
				
				//为了手动点击的切换和自动切换不相互影响，点击时
				//把自动切换停止，再从新开启。
				clearTimeout(timer);
				timer = setTimeout(changeImage,4000);
			}

		}
		}
            smallShuffThree()