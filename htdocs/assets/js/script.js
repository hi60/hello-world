$(function (){
    $('.scroll-btn').on('click', function () {
        $(window).animate({
            'scrollTop': 0
        });
    });

    if ($(window).scrollTop() < $('.keyvisual').offset().top) {
        $('.scroll-btn').hide();
    } else {
        $('.scroll-btn').show();
    }
});