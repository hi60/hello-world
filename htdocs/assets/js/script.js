'use strict'

$(function (){
    $('.scroll-btn').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        });
    });

    $('.sp-footer__scroll-btn').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        });
    });


    if ($(window).width() >= 480) {
        scrlBtnAppearance();
    } else {
        return false;
    }
    
    function scrlBtnAppearance() {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() < $('.keyvisual').offset().top) {
                $('.scroll-btn').fadeOut();
            } else {
                $('.scroll-btn').fadeIn();
            }
        });
    }

    $('.header__main-tb__menu').on('click', function () {
        $('.header__nav-bottom').slideToggle(200)
    });
    
    $('.header__main-sp__menu').on('click', function () {
        $('.header__nav-bottom').slideToggle()
    });
});