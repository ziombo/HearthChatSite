// site.js

$('.gallery').flickity({
	// options
	cellAlign: 'center',
	imagesLoaded: true,
	wrapAround: true,
	lazyLoad: true
});

$(document).ready(function () {
	$(window).on('resize', function () {
		var win = $(this); //this = window
		if (win.width() < 601) {
			$('#contact').removeClass('left-align')
		}
		else {
			$('#contact').addClass('left-align')
		}
	});
})