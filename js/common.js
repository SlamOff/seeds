$(document).ready(function() {
	//popup
	$('.popup').magnificPopup({
		type: 'inline'
	});
	//mask
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});
	// seeds color remove Class
	if($(window).width() < 992) {
		$('.middle_seeds').removeClass('middle_seeds');
	};
	//product slider
	$('.product_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.prev_product',
		nextArrow: '.next_product',
		dots: true,
		appendDots: '.navigation_slider1',
		customPaging: function(slider, i) {
			return '<div class="dot"></div>';
		},
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				dots: false
			}
			}
		]
	});
	$('.other_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.prev_other',
		nextArrow: '.next_other',
		dots: true,
		appendDots: '.navigation_slider4',
		customPaging: function(slider, i) {
			return '<div class="dot"></div>';
		},
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				dots: false
			}
			}
		]
	});
	$('.review_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.prev_review',
		nextArrow: '.next_review',
		dots: true,
		appendDots: '.navigation_slider2',
		customPaging: function(slider, i) {
			return '<div class="dot"></div>';
		}
	});
	$('.diploma_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.prev_diploma',
		nextArrow: '.next_diploma',
		dots: true,
		appendDots: '.navigation_slider3',
		customPaging: function(slider, i) {
			return '<div class="dot"></div>';
		},
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
			}
		]
	});
	/*
	// photo magnific gallery
	$('.photo_popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	*/


	/*
	//validation
	$('#').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});

	*/


});