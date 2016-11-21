$(function() {
	//声明所有的电子邮件后缀
	var mail = new Array("sina.com.cn", "126.com", "163.com", "gmail.com", "qq.com", "vip.qq.com", "hotmail.com", "sohu.com", "139.com", "vip.sina.com", "yahu.com", "sohu.com", "139.com", "vip.sina.com", "yahu.com", "sohu.com", "139.com", "vip.sina.com", "yahu.com");
	//生成li，并加入到ul中
	for(var i = 0; i < mail.length; i++) {
		var liElement = $("<li><span class=\"ex\"></span><span>@</span><span class=\"tail\">" + mail[i] + "</span></li>");
		liElement.appendTo(".list");
	}
	//首先让list隐藏起来
	$(".list").hide();
	$("#email").keyup(function(event) {
		//键入的内容不是上下箭头和回车
		if(event.keyCode != 38 && event.keyCode != 40 && event.keyCode != 13) {
			//如果输入的值不是空或者不以空格开头
			if($.trim($(this).val()) != "" && $.trim($(this).val()).match(/^@/) == null) {
				$(".list").show();
				//如果当前有已经高亮的下拉选项卡，那么将其移除
				if($(".list li:visible").hasClass("lilight")) {
					$(".list li").removeClass("lilight");
				}
				//如果还存在下拉选项卡，那么将其高亮
				if($(".list li:visible")) {
					$(".list li:visible:eq(0)").addClass("lilight");
				}
			} else {
				//否则不进行显示
				$(".list").hide();
				$(".list li").removeClass("lilight");
			}
			//输入的内容还没有包括@符号
			if($.trim($(this).val()).match(/.*@/) == null) {
				$(".list li .ex").text($(this).val());
			} else {
				//输入的符号已经包含了@
				var str = $(this).val();
				var strs = str.split("@");
				$(".list li .ex").text(strs[0]);
				if($(this).val().length >= strs[0].length + 1) {
					tail = str.substr(strs[0].length + 1);
					$(".list li .tail").each(function() {
						//如果数组中的元素是以文本中的后缀开头，那么就显示，否则不显示
						if(!($(this).text().match(tail) != null && $(this).text().indexOf(tail) == 0)) {
							//隐藏其他的li
							$(this).parent().hide();
						} else {
							//显示所在的li
							$(this).parent().show();
						}
					});
				}
			}
		}
		//按了回车时，将当前选中的元素写入到文本框中
		if(event.keyCode == 13) {
			$("#email").val($(".list .lilight:visible").text());
			$(".list").hide();
		}
	});
	//监听上下方向键
	$("#email").keydown(function(event) {
		//下方向键按下了
		if(event.keyCode == 40) {
			if($(".list li").is(".lilight")) {
				if($(".list .lilight").nextAll().is("li:visible")) {
					$(".list .lilight").removeClass("lilight").next("li").addClass("lilight");
				}
			}
		}
		//上方向键按下了
		if(event.keyCode == 38) {
			if($(".list li").is(".lilight")) {
				if($(".list .lilight").prevAll().is("li:visible")) {
					$(".list .lilight").removeClass("lilight").prev("li").addClass("lilight");
				}
			}
		}
	});
	//当鼠标点击某个下拉项时，选中该项，下拉列表隐藏
	$(".list li").click(function() {
		$("#email").val($(this).text());
		$(".list").hide();
	});
	//当鼠标划过某个下拉项时，
	$(".list li").hover(function() {
		$(".list li").removeClass("lilight");
		$(this).addClass("lilight");
	});
	//当鼠标点击其他位置，下拉列表隐藏
	$(document).click(function() {
		$(".list").hide();
	});
});

