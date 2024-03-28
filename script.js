$(function () {
	$('.main--services__slider').slick({
		slidesToShow: 3,
  	slidesToScroll: 3,
		infinite: false,
		dots: false,
		rows: 0,
		arrows: true,
		prevArrow: '<div class="main--services__prev slick-arrow"><svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 8.5H25M25 8.5L17.5 1M25 8.5L17.5 16" stroke="#2A2A2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
		nextArrow: '<div class="main--services__next slick-arrow"><svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 8.5H25M25 8.5L17.5 1M25 8.5L17.5 16" stroke="#2A2A2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
	});
});