const $ = window.$;
function haft_div(num) {
    return num / 2;
}
$(window).scroll(function () {
    var main_header = $('.main_header').height();
    var windowScroll = $(window).scrollTop();
    if (windowScroll >= main_header) {
        $('.main_header').addClass('fix_menu_header');
        // $('.bulet_menu i').css('color', '#0099ff');
    } else {
        $('.main_header').removeClass('fix_menu_header');
        // $('.bulet_menu i').css('color', '#000');
    }
});

$(document).ready(function () {
    menu_respontive();
    $(window).resize(function () {
        menu_respontive();
    });
    if ($('.swiper_main_slide').length > 0) {
        var swiper = new Swiper('.swiper_main_slide', {
            // speed: 600,
            // loop: true,
            loopAdditionalSlides: 1,
            slidesPerView: 1,
            centeredSlides: true,
            // spaceBetween: ($(window).width() - (($(window).width() <= 320) ? 233 : 260)) * -1,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            }
        });
    }
});

function menu_respontive() {
    var win_screen = $(window).width();
    var HTML_main_menu = $('.main_nav').html();
    var bulet_menu = $('.bulet_menu');
    if (win_screen <= 980) {
        // console.log(HTML_main_menu);
        $('.box_menu').html(HTML_main_menu);
        $(document).on('click', '.bulet_menu', function () {
            // console.log('1231');
            console.log(HTML_main_menu);
            $('.aside_header').append('<div class="menu_ovelay"></div>');
            $('.box_menu').css({
                'left': 0,
                'z-index': 91
            });
            $('.ovelay_menu').css({ "left": '0', "opacity": 1, "visibility": "visible" });
        });
    } else {
        $('.ovelay_menu').css({ "left": 0, "opacity": 0, "visibility": "hidden" });
        $('.menu_re').css('left', '-270px');
    }
    $(document).on('click', '.menu_ovelay', function () {
        $('.ovelay_menu').css({ "left": 0, "opacity": 0, "visibility": "hidden" });
        $(".menu_ovelay").remove();
        $('.box_menu').css('left', '-270px');
    });
}

$(document).on('click', '.load_more', function (e) {
    e.stopPropagation();
});
$(document).click(function () {
    $(".drop_down_list").hide();
});
$(document).on('click', '.item_menu', function (e) {
    e.stopPropagation();
    $(this).find('.drop_down_list').toggle();
    $('.drop_down_list').css({ "top": $(this).height(), "opacity": 1, "visibility": "visible" });
});
