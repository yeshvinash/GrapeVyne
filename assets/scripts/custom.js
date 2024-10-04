$(document).ready(function () {

    // $(window).on('hashchange', function (e) {
    //     history.replaceState("", document.title, e.originalEvent.oldURL);
    // });

    // _BEGIN > Function For Navigation Menu < SHB //
    $(".navbar-toggler").click(function () {
        $('html').toggleClass('show-menu');
    });
    // _ENDS > Function For Navigation Menu < SHB //

    // _begin > Script For Header [Sticky Header] on Scrolling Down < SHB //
    function scrolling() {
        var sticky = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 15) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    };
    scrolling();
    $(window).scroll(scrolling);
    // _end > Script For Header [Sticky Header] on Scrolling Down < SHB //

    // _begin > Hide Navigation Menu When Click On The Navigation Link Under Tablet Device < SHB //
    function scrollNav() {
        $('.navbar-nav li a').click(function () {
            if ($(window).width() < 992) {
                $('html').toggleClass('show-menu');
            }
        });
    }
        scrollNav();
    // _end > Hide Navigation Menu When Click On The Navigation Link Under Tablet Device < SHB //
}
}