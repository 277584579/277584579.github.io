
$(function() {

$(window).scroll(function() {
if($(this).scrollTop() >300) {
$('#item1').fadeIn();
}else{
$('#item1').fadeOut();
}
});
$('#item1').click(function() {
$('body,html').animate({ scrollTop: 0 }, 800);
})
});

