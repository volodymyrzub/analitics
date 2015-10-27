$(document).ready(function() {
	function setPositionOnCrircle(elem, degree, radius) {
		var 
				positionX = 0,
				positionY = 0,
				radius = radius,
				positionX = radius * Math.cos(degree * Math.PI / 180);
				positionY = radius * Math.sin(degree * Math.PI / 180);
				elem.css('top', positionY - 9 +'px');
				elem.css('left', positionX -9 + 'px');
	}

	function initDots() {
		var dots = $('.dots .dot');
		var radius = $('.outer-wrap-company').height() / 2;
		var degree = -110;
		for(var i = 0; i < dots.length; i++) {
			setPositionOnCrircle($(dots[i]), degree, radius);
			degree += 20;
		}
	}

	initDots();
	$(window).resize(function() {
		initDots();
		console.log('resize');

	})

});