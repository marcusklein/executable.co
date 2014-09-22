// Changes the panel sizes to dynamically fit browser window
function fireContentResizer() {
	console.log("fired resize");
	document.body.style.overflow = "hidden";
	var numPanels = 8;
	var nh = $(window).height();
	var nw = $(window).width();
	$("#mainTitle").center(nw, nh);
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


// Function to get the scrollbar width. Mostly for chrome. Because it's got a shitty scrollbar.
// Returns the width of the scrollbar.
function getScrollbarWidth() {
	document.body.style.overflow = "";
	var vpWidthOverflow = $(window).width();
	document.body.style.overflow = "hidden";
	var vpWidthNoOverflow = $(window).width();
	document.body.style.overflow = "";
	return vpWidthNoOverflow - vpWidthOverflow;
}


$(document).ready(function () {

	// Preload the page
	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});

	// Load the better video
	loadNiceVideo();
	$("#bgNiceVid").load($("#bgVid").fadeOut('slow',function(){
		$(window).resize();
		$(this).remove();
	}));

	// Smooth scrolling
	$("nav").click(function(event) {
		var panelNum = event.target.id;
		panelNum = panelNum.replace(/\D/g,'');
		$('html, body').animate({
			scrollTop: $("#panel_" + panelNum).offset().top
		}, 1000);
	});

	// Fire resize event as soon as page loads
	$(window).resize();

});

$(window).resize(function() {
	fireContentResizer();
});


jQuery.fn.center = function (nw, nh) {
	this.css("position","absolute");
	this.css("top", "50%");
	this.css("left", (nw / 2) - ($(this).width() / 2) + "px");
	//this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft() - getScrollbarWidth()) + "px");
	return this;
}

