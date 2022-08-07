console.log("Hello CFD");
///Cursor
let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  console.log(e.pageY, e.pageX);
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 15) + "px; left:" + (e.pageX - 15) + "px;"
  );
});
//Loading
function showNavMenu() {
  console.log("Hello CFD");
  let nav = document.querySelector("body");
  nav.classList.toggle("menu-two");
}
//Scroll Background for Header
let header = document.querySelector("header");
let slider = document.querySelector(".slider");

function changeBackground() {
  let scrollY = window.pageYOffset;
  if (scrollY > slider.clientHeight - header.clientHeight) {
    header.classList.add("background-header");
  } else {
    header.classList.remove("background-header");
  }
}
document.addEventListener("scroll", function () {
  toTop();
  changeBackground();
});

function toTop() {
  let toTop = document.querySelector(".toTop");
  let slider = document.querySelector(".slider").clientHeight;
  let scrollY = window.pageYOffset;
  if (scrollY > slider) {
    toTop.classList.add("showButtonToTop");
  } else {
    toTop.classList.remove("showButtonToTop");
  }
  toTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}

$(document).ready(function () {
  // console.log("linh duy linh!");
  let $carousel = $(".slider__img");
  $carousel.flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    on: {
      ready: function () {
        let dotted = $(".flickity-page-dots");
        let paging = $(".doted");
        dotted.appendTo(paging);
      },
      change: function (index) {},
    },
  });

  function scrollToElement() {
    let main = $(".one");
    let scroll = $(".icon-scroll");
    scroll.click(function () {
      $([document.documentElement, document.body]).animate(
        { scrollTop: main.offset().top },
        "2000"
      );
    });
  }
  scrollToElement();

  $(window).on("load", function () {
    $(".loading").addClass("activeLoading");
    $(".loading__title").fadeOut(3000);
    $(".loading").fadeOut(5000);
  });

  function hoverCursor() {
    //logo header
    $(".logo").mouseover(function () {
      $(".cursor").addClass("hover-logo");
    });
    $(".logo").mouseout(function () {
      $(".cursor").removeClass("hover-logo");
    });

    //menu header
    $(".menu li a").mouseover(function () {
      $(".cursor").addClass("hover-menu");
    });
    $(".menu li a").mouseout(function () {
      $(".cursor").removeClass("hover-menu");
    });

    //account
    $(".account").mouseover(function () {
      $(".cursor").addClass("hover-menu");
    });
    $(".account").mouseout(function () {
      $(".cursor").removeClass("hover-menu");
    });

    //Thẻ p
    $(".slider__img-title p").mouseover(function () {
      $(".cursor").addClass("hover-menu");
    });
    $(".slider__img-title p").mouseout(function () {
      $(".cursor").removeClass("hover-menu");
    });

    $(".content__text p").mouseover(function () {
      $(".cursor").addClass("hover-menu");
    });
    $(".content__text p").mouseout(function () {
      $(".cursor").removeClass("hover-menu");
    });

    //Title
    $(".slider__img-title h2").mouseover(function () {
      $(".cursor").addClass("hover-title");
    });
    $(".slider__img-title h2").mouseout(function () {
      $(".cursor").removeClass("hover-title");
    });

    $(".content__text h3").mouseover(function () {
      $(".cursor").addClass("hover-title");
    });
    $(".content__text h3").mouseout(function () {
      $(".cursor").removeClass("hover-title");
    });

    //footer
    $(".leftfooter__logo").mouseover(function () {
      $(".cursor").addClass("hover-logo");
    });
    $(".leftfooter__logo").mouseout(function () {
      $(".cursor").removeClass("hover-logo");
    });

    $(".blog").mouseover(function () {
      $(".cursor").addClass("hover-menu");
    });
    $(".blog").mouseout(function () {
      $(".cursor").removeClass("hover-menu");
    });
  }
  hoverCursor();
});

AOS.init();
