'use strict'

$(function (){
    // クリックするとページトップへ戻る(PC&TB)
    $('.scroll-btn').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        });
    });

    // クリックするとページトップへ戻る(SP)
    $('.sp-footer__scroll-btn').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        });
    });

    // クリックするとメニューが開く(TB)
    $('.header__main-tb__menu').on('click', function () {
        $('.header__nav-bottom').slideToggle(200)
    });

    // クリックするとメニューが開く(SP)
    $('.header__main-sp__menu').on('click', function () {
        $('.header__nav-bottom').slideToggle()
    });

    // ウィンドウ位置でスクロールボタンの表示を制御
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
});