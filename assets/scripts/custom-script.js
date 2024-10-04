// Author: White Orange Software (WOS) || Author URI: https://www.whiteorangesoftware.com/ || Designed by: Shubham J Joshi //

$(document).ready(function () {
  // $(window).on('hashchange', function (e) {
  //     history.replaceState("", document.title, e.originalEvent.oldURL);
  // });

  // _BEGIN > Function For Navigation Menu < SHB //
  $(".navbar-toggler").click(function () {
    $("html").toggleClass("show-menu");
  });
  // _ENDS > Function For Navigation Menu < SHB //

  // _begin > Script For Header [Sticky Header] on Scrolling Down < SHB //
  function scrolling() {
    var sticky = $("header"),
      scroll = $(window).scrollTop();

    if (scroll >= 15) sticky.addClass("fixed");
    else sticky.removeClass("fixed");
  }
  scrolling();
  $(window).scroll(scrolling);
  // _end > Script For Header [Sticky Header] on Scrolling Down < SHB //

  // _begin > Hide Navigation Menu When Click On The Navigation Link Under Tablet Device < SHB //
  function scrollNav() {
    $(".navbar-nav li a").click(function () {
      if ($(window).width() < 992) {
        $("html").toggleClass("show-menu");
      }
    });
  }
  scrollNav();
  // _end > Hide Navigation Menu When Click On The Navigation Link Under Tablet Device < SHB //

  // _BEGIN > Carousel Script - Restaurant Events < SHB
  $("#restEvents").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    navText: [
      "<img src='assets/images/icons/resticon-prev-white.svg' width='24' height='24' >",
      "<img src='assets/images/icons/resticon-next-black.svg' width='24' height='24' >",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        // autoplay: true,
      },
      768: {
        items: 1,
        nav: true,
        dots: false,
        autoplay: false,
      },
    },
  });
  // _ENDS > Carousel Script - Restaurant Events < SHB

  // _BEGIN > Carousel Script - Reviews < SHB
  $("#userReviews").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    navText: [
      "<img src='assets/images/icons/resticon-prev-black.svg' width='24' height='24' >",
      "<img src='assets/images/icons/resticon-next-black.svg' width='24' height='24' >",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        // autoplay: true,
      },
      768: {
        items: 1,
        nav: true,
        dots: false,
        autoplay: false,
      },
    },
  });
  // _ENDS > Carousel Script - Reviews < SHB
});

function myFeature() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";

    moreText.style.display = "none";
  } else {
    dots.style.display = "none";

    moreText.style.display = "inline";
  }
}
