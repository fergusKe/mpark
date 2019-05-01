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

	$('#box13 .product-item').click(function(e) {
		e.preventDefault();
		var $this = $(this);
		var idx = $this.index() - 1;
		var winW = $(window).width();
		var titleObj = {
			0: '和風時尚美學',
			1: '日本精工美學',
			2: '空間坪效美學'
		}
		if (idx < 0) return;

		if (winW > 720) {
			$('.slider-title').text(titleObj[idx]);
			$('.image_wall').hide();
			$('.popup-slider .swiper-container').eq(idx).show().siblings('.swiper-container').hide();
			$('.popup-slider').show();
		} else {
			$('.slider-title').text(titleObj[idx]);
			$('.product-item').hide();
			$('.popup-slider .swiper-container').eq(idx).show().siblings('.swiper-container').hide();
			$('.popup-slider').show();
		}
	});

	$('.popup-slider-close-btn').click(function() {
		var winW = $(window).width();

		if (winW > 720) {
			$('.image_wall').show();
			$('.popup-slider').hide();
		} else {
			$('.product-item').show();
			$('.popup-slider').hide();
		}
	});
	
});