$(document).ready(function() {

	$('.gallery').slick({
	   	autoplay: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		    {
			    breakpoint: 900,
			    settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			    }
			},
			{
			    breakpoint: 480,
			    settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			    }
			}
		]
	});


});