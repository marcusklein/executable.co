// Changes the panel sizes to dynamically fit browser window
function fireContentResizer() {
	document.body.style.overflow = "hidden";
	var numPanels = 8;
	var nh = $(window).height();
	var nw = $(window).width();
	$("#mainTitle").center();
	document.body.style.overflow = "";
	for (var i = 1; i <= numPanels; i++) {
		$("#panel_" + i).height(nh);
		$("#panel_" + i).width(nw);
		$("#panel_" + i).addClass("panelBreak");
	};



};

function loadNiceVideo() {
	$("#panel_1").append("<video id=\"bgNiceVid\" autoplay=\"autoplay\" loop><source src=\"resources/water2.mp4\" type=\"video/mp4\"></video>");
}


$(document).ready(function () {

	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});

	$(window).resize();

	// Load the better video
	loadNiceVideo();
	$("#bgNiceVid").load($("#bgVid").fadeOut('slow',function(){$(this).remove();}));

	// Smooth scrolling
	$("nav").click(function(event) {
		var panelNum = event.target.id;
		panelNum = panelNum.replace(/\D/g,'');
			$('html, body').animate({
       			scrollTop: $("#panel_" + panelNum).offset().top
    		}, 1000);
	});



});

$(window).resize(function() {
	fireContentResizer();
});


jQuery.fn.center = function () {
	this.css("position","absolute");
	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
	this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft() - 15) + "px");
	return this;
}

