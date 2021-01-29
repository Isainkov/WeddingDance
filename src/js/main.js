wow = new WOW({
   boxClass:     'wow',      // default
   animateClass: 'animated', // default
   offset:       0,          // default
   mobile:       false,      
   live:         true        // default
});
wow.init();

const swiper = new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next-uniq',
		prevEl: '.swiper-button-prev-uniq',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass){
			return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"</span>';
		}
	},
	breakpoints:{
		901: {
			slidesPerView: 1.3,
			spaceBetween: 20,
		},
		1170: {
			slidesPerView: 2,
		}
	},
	slidesPerView: 1.1,
	spaceBetween: 10,
	
});

$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('.header__logo').toggleClass('active');
		$('body').toggleClass('lock');
		if($('.header__burger').hasClass('active')){
			$('.header__logo').fadeOut(300);
			$('.header__button').text("Let's start");
		}else{
			$('.header__logo').fadeIn(300);
			$('.header__button').text("Start");
		}
	});
});

