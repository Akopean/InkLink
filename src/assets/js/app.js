$(document).ready(function(){

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
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ],
});

$('.share-links').on('click', function(e) {
	let $this = $(this);
	let $icon = $this.siblings('.share-links__icon');
	$this.toggleClass('closed');
	$icon.toggleClass('hidden');
});


$('a[href^="#"]').click(function (event) {
    event.preventDefault();
    let top, id  = $(this).attr('href');
    if(id.length > 1){
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    }
});



});
