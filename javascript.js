$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".college").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".work").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".codingbootcamp").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".volunteer").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".resume").addClass("active").siblings().removeClass("active");
});
$('.navbar-nav>li>a').on('click', function() {
	$('.navbar-collapse').collapse('hide');
});
