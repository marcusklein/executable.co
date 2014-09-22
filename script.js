// Changes the panel sizes to dynamically fit browser window
function fireContentResizer() {
	document.body.style.overflow = "hidden";
	var numPanels = 8;
	var nh = $(window).height();
	var nw = $(window).width();
	console.log(nw);
	center("#mainTitle", nw, nh);
	center("#navbar", nw, nh);
	document.body.style.overflow = "";
	for (var i = 1; i <= numPanels; i++) {
		$("#panel_" + i).height(nh);
		$("#panel_" + i).width(nw);
		$("#panel_" + i).addClass("panelBreak");
	};
};

function center(target, nw, nh) {
	if ($(target).attr("id") !== "navbar")
		$(target).css("top", (nh / 2) - ($(target).height() / 2) + "px");
	$(target).css("left", (nw / 2) - ($(target).width() / 2) + "px");
}

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

		function detectmob() { 
			if( navigator.userAgent.match(/Android/i)
				|| navigator.userAgent.match(/webOS/i)
				|| navigator.userAgent.match(/iPhone/i)
				|| navigator.userAgent.match(/iPad/i)
				|| navigator.userAgent.match(/iPod/i)
				|| navigator.userAgent.match(/BlackBerry/i)
				|| navigator.userAgent.match(/Windows Phone/i)) {
				return true;
		}else {
			return false;
		}
	}


$(document).ready(function () {

		// Preload the page
		$(window).load(function(){
			$('#preloader').fadeOut('slow',function(){$(this).remove();});
		});

	if(detectmob()) {
		$("#video_background").remove();
		$("#bgNiceVid").remove();
	} else {
		// Load the better video
		// Getting creative to fight the ipad problem
		loadNiceVideo();
		$("#bgNiceVid").load($("#bgVid").fadeOut('slow',function(){
			$(window).resize(); // Because chrome sucks
			$(this).remove();
		}));

	}

	// Smooth scrolling
	$("nav").click(function(event) {
		event.preventDefault();
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
