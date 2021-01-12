jQuery(document).ready(function ($) {

	var swiper = new Swiper('.hero__slider', {
		autoHeight: true,
		initialSlide: 1,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		}
		// autoplay: {
		// 	delay: 5000,
		// },
	});

	var swiper = new Swiper('.others__slider', {
		autoHeight: true,
		initialSlide: 1,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		}
		// autoplay: {
		// 	delay: 5000,
		// },
	});

	var swiper = new Swiper('.works__slider', {
		autoHeight: true,
		// centeredSlides: true,
		initialSlide: 0,
		slidesPerView: 2,
		spaceBetween: 30,
		loop: true,
		observer: true,
		observeParents: true,
		breakpoints: {
			320: {
				slidesPerView: 1.3,
				spaceBetween: 15,
			},
			420: {
				slidesPerView: 1.3,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		}
		// autoplay: {
		// 	delay: 5000,
		// },
	});

	$('.open-magn').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$(".js-scroll-to-form").click(function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({ scrollTop: top }, 1000);
	});

});