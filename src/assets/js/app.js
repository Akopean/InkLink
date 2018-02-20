$('.after-header__slider').slick({
    dots: false,
    speed: 500,
    slidesToShow: 1,
});

$('.footer-slick__slider').slick({
    dots: false,
    speed: 500,
    slidesToShow: 6,
    arrows: false,
    slidesToScroll: 2,
});

$('.share-links').on('click', function(e) {
	let $this = $(this);
	let $icon = $this.siblings('.share-links__icon');
	$this.toggleClass('closed');
	$icon.toggleClass('hidden');
});
