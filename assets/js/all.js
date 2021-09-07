"use strict";

var header = document.querySelector('header');
var lastScroll = 0;
window.addEventListener('scroll', function () {
  var currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove('scroll--up');
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains('scroll--down')) {
    header.classList.remove('scroll--up');
    header.classList.add('scroll--down');
  } else if (currentScroll < lastScroll && header.classList.contains('scroll--down')) {
    header.classList.remove('scroll--down');
    header.classList.add('scroll--up');
  }

  lastScroll = currentScroll;
});
$("button.navbar-toggler").click(function () {
  $(this).children().toggleClass("navbar-toggler-icon-close");
});
var screen = window.matchMedia("(max-width: 769px)");
var choose = '';
var expStatus = false;
var shortStatus = false;
var longStatus = false;
var expCourse = $("#experienceCourse");
var shortCourse = $("#shortCourse");
var longCourse = $("#longCourse");
expCourse.click(function () {
  if (choose === 'exp') {
    choose = '';
    expStatus = false;
  } else {
    choose = 'exp';
    expStatus = true;
  }
});
shortCourse.click(function () {
  if (choose === 'short') {
    choose = '';
    shortStatus = false;
  } else {
    choose = 'short';
    shortStatus = true;
  }
});
longCourse.click(function () {
  if (choose === 'long') {
    choose = '';
    longStatus = false;
  } else {
    choose = 'long';
    longStatus = true;
  }
});

function chooseCourse(e) {
  expCourse.click(function () {
    // console.log(expStatus)
    if (expStatus) {
      if (e.matches) {
        shortCourse.addClass("d-none");
        longCourse.addClass("d-none");
      }
    } else {
      if (e.matches) {
        shortCourse.removeClass("d-none");
        longCourse.removeClass("d-none");
      }
    }
  });
  shortCourse.click(function () {
    // console.log(shortStatus)
    if (shortStatus) {
      if (e.matches) {
        expCourse.addClass("d-none");
        longCourse.addClass("d-none");
      }
    } else {
      if (e.matches) {
        expCourse.removeClass("d-none");
        longCourse.removeClass("d-none");
      }
    }
  });
  longCourse.click(function () {
    // console.log(longStatus)
    if (longStatus) {
      if (e.matches) {
        shortCourse.addClass("d-none");
        expCourse.addClass("d-none");
      }
    } else {
      if (e.matches) {
        shortCourse.removeClass("d-none");
        expCourse.removeClass("d-none");
      }
    }
  });
}

chooseCourse(screen);
$(window).resize(function () {
  if (screen.matches) {
    console.log('screen change');

    switch (choose) {
      case 'exp':
        shortCourse.addClass("d-none");
        longCourse.addClass("d-none");
        break;

      case 'short':
        expCourse.addClass("d-none");
        longCourse.addClass("d-none");
        break;

      case 'long':
        shortCourse.addClass("d-none");
        expCourse.addClass("d-none");
        break;

      default:
        break;
    }
  } else {
    switch (choose) {
      case 'exp':
        shortCourse.removeClass("d-none");
        longCourse.removeClass("d-none");
        break;

      case 'short':
        expCourse.removeClass("d-none");
        longCourse.removeClass("d-none");
        break;

      case 'long':
        shortCourse.removeClass("d-none");
        expCourse.removeClass("d-none");
        break;

      default:
        break;
    }
  }
});
screen.addListener(chooseCourse);
var experienceCourseStatus = false;
var shortCourseStatus = false;
var longCourseStatus = false;

var checkListCollapse = function checkListCollapse() {
  if ($('#listCollapse').hasClass("show")) {
    $('#listCollapse').removeClass("show");
  } else {
    $('#listCollapse').toggleClass("show");
  }
};

$("#experienceCourse").click(function () {
  if (experienceCourseStatus === false) {
    $(this).toggleClass("border-4");
    $('#listCollapse').toggleClass("show");
    $("#arrowExperience").toggleClass("show");
    $('.courseName').text("首次");
    experienceCourseStatus = true;

    if (shortCourseStatus === true || longCourseStatus === true) {
      if (shortCourseStatus === true) {
        shortCourseStatus = false;
      }

      if (longCourseStatus === true) {
        longCourseStatus = false;
      }

      checkListCollapse();
      $("#arrowLong").removeClass("show");
      $("#arrowShort").removeClass("show");
      $("#longCourse").removeClass("border-4");
      $("#shortCourse").removeClass("border-4");
    }
  } else {
    $(this).toggleClass("border-4");
    $("#arrowExperience").toggleClass("show");
    $('#listCollapse').removeClass("show");
    $('.courseName').text("");
    experienceCourseStatus = false;
  }
});
$("#shortCourse").click(function () {
  if (shortCourseStatus === false) {
    $(this).toggleClass("border-4");
    $("#arrowShort").toggleClass("show");
    $('#listCollapse').toggleClass("show");
    $('.courseName').text("短期");
    shortCourseStatus = true;

    if (experienceCourseStatus === true || longCourseStatus === true) {
      if (experienceCourseStatus === true) {
        experienceCourseStatus = false;
      }

      if (longCourseStatus === true) {
        longCourseStatus = false;
      }

      checkListCollapse();
      $("#arrowLong").removeClass("show");
      $("#arrowExperience").removeClass("show");
      $("#longCourse").removeClass("border-4");
      $("#experienceCourse").removeClass("border-4");
    }
  } else {
    $(this).toggleClass("border-4");
    $("#arrowShort").toggleClass("show");
    $('#listCollapse').removeClass("show");
    $('.courseName').text("");
    shortCourseStatus = false;
  }
});
$("#longCourse").click(function () {
  if (longCourseStatus === false) {
    $(this).toggleClass("border-4");
    $("#arrowLong").toggleClass("show");
    $('#listCollapse').toggleClass("show");
    $('.courseName').text("長期");
    longCourseStatus = true;

    if (experienceCourseStatus === true || shortCourseStatus === true) {
      if (experienceCourseStatus === true) {
        experienceCourseStatus = false;
      }

      if (shortCourseStatus === true) {
        shortCourseStatus = false;
      }

      checkListCollapse();
      $("#arrowShort").removeClass("show");
      $("#arrowExperience").removeClass("show");
      $("#experienceCourse").removeClass("border-4");
      $("#shortCourse").removeClass("border-4");
    }
  } else {
    $(this).toggleClass("border-4");
    $("#arrowLong").toggleClass("show");
    $('#listCollapse').removeClass("show");
    $('.courseName').text("");
    longCourseStatus = false;
  }
});
var selectRange = false;
$("#classBasic").click(function () {
  if (selectRange !== true) {
    $(this).find(".checkBtn").removeClass("opacity-30");
    $(this).addClass("border-4 border-white");

    if ($('.courseRange')[0].innerText.length === 0) {
      $('.courseRange').text("基礎");
    }

    selectRange = true;
  } else {
    $("*").find(".checkBtn").addClass("opacity-30");
    $(this).removeClass("border-4 border-white");

    if ($('.courseRange')[0].innerText.length !== 0) {
      $('.courseRange').empty();
    }

    selectRange = false;
  }
});
$("#classIntermediate").click(function () {
  if (selectRange !== true) {
    $(this).find(".checkBtn").removeClass("opacity-30");
    $(this).addClass("border-4 border-white");

    if ($('.courseRange')[0].innerText.length === 0) {
      $('.courseRange').text("中階");
    }

    selectRange = true;
  } else {
    $("*").find(".checkBtn").addClass("opacity-30");
    $(this).removeClass("border-4 border-white");

    if ($('.courseRange')[0].innerText.length !== 0) {
      $('.courseRange').empty();
    }

    selectRange = false;
  }
});
$("#classAdvanced").click(function () {
  if (selectRange !== true) {
    $(this).find(".checkBtn").removeClass("opacity-30");
    $(this).addClass("border-4 border-white");

    if ($('.courseRange')[0].innerText.length === 0) {
      $('.courseRange').text("高階");
    }

    selectRange = true;
  } else {
    $("*").find(".checkBtn").addClass("opacity-30");
    $(this).removeClass("border-4 border-white");

    if ($('.courseRange')[0].innerText.length !== 0) {
      $('.courseRange').empty();
    }

    selectRange = false;
  }
});
$(".orderBtn").click(function () {
  $('#page-1-list').toggleClass('mb-5 mb-md-6 mb-lg-4');
});
$(".nextBtn").click(function () {
  $("#step-1").removeClass("active");
  $("#step-2").addClass("active");
  $("#listCollapse").removeClass("show");
  $("#page-1-list").addClass("collapse");
  $("#page-1").addClass("collapse");
  $("#page-1-info").addClass("collapse");
});
$("#orderForm").on('submit', function (e) {
  e.preventDefault();
  $("#step-2").removeClass("active");
  $("#step-3").addClass("active");
  $("#page-2").removeClass("show");
});
$(".scroll--style").mousewheel(function (e, time) {
  this.scrollLeft -= time * 100;
  e.preventDefault();
});
AOS.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 130,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 800,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: true,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

});

window.onload = function () {
  lax.init();
  lax.addDriver('scrollY', function () {
    return window.scrollY;
  });
  lax.addElements('.heroImg', {
    scrollY: {
      translateY: [['elInY', 'elCenterY', 'elOutY'], [0, 144, -480]]
    }
  });
  lax.addElements('overlayImg', {
    scrollY: {
      translateY: [['elInY', 'elCenterY', 'elOutY'], [0, -160, -400]]
    }
  });
};

var teacherCard = document.querySelectorAll('.teacherCard');

if (teacherCard.length !== 0) {
  var cardSetHeight = function cardSetHeight() {
    setTimeout(function () {
      var teacherCardHeight = teacherCard[1].offsetHeight;
      teacherCard1.style.height = "".concat(teacherCardHeight, "px");
      teacherCard3.style.height = "".concat(teacherCardHeight, "px");
      teacherCard4.style.height = "".concat(teacherCardHeight, "px");
    }, 0, 3);
  };

  var teacherCard1 = teacherCard[0];
  var teacherCard3 = teacherCard[2];
  var teacherCard4 = teacherCard[3];
  $(window).ready(cardSetHeight);
  $(window).resize(cardSetHeight);
}
"use strict";

var inputDate = document.querySelector('input[name="datePicker"]');

if (inputDate) {
  var datepicker = new Datepicker(inputDate, {
    nextArrow: ' >',
    prevArrow: ' <',
    buttonClass: 'btn text-primary'
  });
}
"use strict";

var swiper = new Swiper(".desktopSwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true
  }
});
var customSwiper = new Swiper(".customSwiper", {
  slidesPerView: 1,
  slidesPerColumn: 3,
  spaceBetween: 8,
  slidesPerColumnFill: 'row',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 2.1,
      slidesPerColumn: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30
    }
  }
});
var chooseSwiper = new Swiper(".chooseSwiper", {
  slidesPerView: 1,
  slidesPerColumn: 3,
  spaceBetween: 24,
  slidesPerColumnFill: 'row',
  observer: true,
  observeParents: true,
  breakpoints: {
    768: {
      slidesPerView: 1.8,
      slidesPerColumn: 1,
      spaceBetween: 30
    },
    960: {
      slidesPerView: 3,
      slidesPerColumn: 1,
      spaceBetween: 20
    }
  }
});
var teacherSwiper = new Swiper(".teacherListSwiper", {
  slidesPerView: 1,
  slidesPerColumn: 4,
  spaceBetween: 72,
  slidesPerColumnFill: 'row',
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerColumn: 1,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      slidesPerColumn: 1,
      spaceBetween: 30
    }
  }
});
var recommendSwiper = new Swiper(".recommendSwiper", {
  slidesPerView: 1.2,
  slidesPerColumn: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerColumn: 1
    },
    1200: {
      slidesPerView: 4.2,
      slidesPerColumn: 1
    }
  }
});
//# sourceMappingURL=all.js.map
