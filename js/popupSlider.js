$(function() {
	var swiper1 = new Swiper('.slider1.swiper-container', {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	clickable: true,
		// },
		observer:true, 
    observeParents:true 
	});
	var swiper2 = new Swiper('.slider2.swiper-container', {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	clickable: true,
		// },
		observer:true, 
    observeParents:true 
	});
	var swiper3 = new Swiper('.slider3.swiper-container', {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	clickable: true,
		// },
		observer:true, 
    observeParents:true 
	});

	$('#box13 .item').click(function(e) {
		e.preventDefault();
		var $this = $(this);
		var idx = $this.index() - 1;
		console.log('idx = ', idx);
		if (idx < 0) return;
		$('.image_wall').hide();
		$('.popup-slider').show();
		$('.popup-slider .swiper-container').eq(idx).show().siblings('.swiper-container').hide();
	});

	$('.popup-slider-close-btn').click(function() {
		$('.image_wall').show();
		$('.popup-slider').hide();
	});
	
});