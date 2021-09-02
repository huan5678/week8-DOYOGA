const header = document.querySelector('header');
let lastScroll = 0;
window.addEventListener('scroll',function(){
  const currentScroll = window.pageYOffset;

  if(currentScroll <= 0){
    header.classList.remove('scroll--up');
    return;
  }

  if(currentScroll > lastScroll && !header.classList.contains('scroll--down')){
    header.classList.remove('scroll--up');
    header.classList.add('scroll--down');
  } else if(currentScroll < lastScroll && header.classList.contains('scroll--down')){
    header.classList.remove('scroll--down');
    header.classList.add('scroll--up');
  }
  lastScroll = currentScroll;
})


$("button.navbar-toggler").click(function(){
  $(this).children().toggleClass("navbar-toggler-icon-close");
})


let screen = window.matchMedia("(max-width: 769px)")

let choose = ''
let expStatus = false
let shortStatus = false
let longStatus = false

let expCourse = $("#experienceCourse");

let shortCourse = $("#shortCourse");

let longCourse = $("#longCourse");

expCourse.click(()=>{
  if (choose === 'exp'){
    choose = ''
    expStatus = false
  } else {
    choose = 'exp'
    expStatus = true
  }
})
shortCourse.click(()=>{
  if (choose === 'short'){
    choose = ''
    shortStatus = false
  } else {
    choose = 'short'
    shortStatus = true
  }
})
longCourse.click(()=>{
  if (choose === 'long'){
    choose = ''
    longStatus = false
  } else {
    choose = 'long'
    longStatus = true
  }
})

function chooseCourse(e){

    expCourse.click(function(){
      // console.log(expStatus)
      if (expStatus){
        if(e.matches){
          shortCourse.addClass("d-none");
          longCourse.addClass("d-none");
        }
      } else {
        if (e.matches){
          shortCourse.removeClass("d-none");
          longCourse.removeClass("d-none");
        }
      }
    })
    shortCourse.click(function(){
      // console.log(shortStatus)
      if (shortStatus){
        if (e.matches){
          expCourse.addClass("d-none");
          longCourse.addClass("d-none");
        }
      } else {
        if (e.matches){
          expCourse.removeClass("d-none");
          longCourse.removeClass("d-none");
        }
      }
    })
    longCourse.click(function(){
      // console.log(longStatus)
      if (longStatus){
        if (e.matches){
          shortCourse.addClass("d-none");
          expCourse.addClass("d-none");
        }
      } else {
        if (e.matches){
          shortCourse.removeClass("d-none");
          expCourse.removeClass("d-none");
        }
      }
    })
}

chooseCourse(screen)

$(window).resize(()=>{
  if(screen.matches){
    console.log('screen change')
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

})
screen.addListener(chooseCourse)

let experienceCourseStatus = false;
let shortCourseStatus = false;
let longCourseStatus = false;
const checkListCollapse = ()=>{
  if($('#listCollapse').hasClass("show")){
    $('#listCollapse').removeClass("show")
  } else {
    $('#listCollapse').toggleClass("show")
  }
}

$("#experienceCourse").click(function(){
  if (experienceCourseStatus === false){
    $(this).toggleClass("border-4");
    $('#listCollapse').toggleClass("show")
    $("#arrowExperience").toggleClass("show");
    $('.courseName').text("首次");
    experienceCourseStatus = true
    if(shortCourseStatus === true || longCourseStatus === true) {
      if(shortCourseStatus === true){shortCourseStatus = false}
      if(longCourseStatus === true){longCourseStatus = false}
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
})
$("#shortCourse").click(function(){
  if (shortCourseStatus === false){
    $(this).toggleClass("border-4");
    $("#arrowShort").toggleClass("show");
    $('#listCollapse').toggleClass("show")
    $('.courseName').text("短期");
    shortCourseStatus = true
    if(experienceCourseStatus === true || longCourseStatus === true) {
      if(experienceCourseStatus === true){experienceCourseStatus = false}
      if(longCourseStatus === true){longCourseStatus = false}
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
})
$("#longCourse").click(function(){
  if (longCourseStatus === false){
    $(this).toggleClass("border-4");
    $("#arrowLong").toggleClass("show");
    $('#listCollapse').toggleClass("show")
    $('.courseName').text("長期");
    longCourseStatus = true
    if(experienceCourseStatus === true || shortCourseStatus === true) {
      if(experienceCourseStatus === true){ experienceCourseStatus = false }
      if(shortCourseStatus === true){ shortCourseStatus = false }
      checkListCollapse();
      $("#arrowShort").removeClass("show");
      $("#arrowExperience").removeClass("show");
      $("#experienceCourse").removeClass("border-4");
      $("#shortCourse").removeClass("border-4");
  }
  }else {
    $(this).toggleClass("border-4");
    $("#arrowLong").toggleClass("show");
    $('#listCollapse').removeClass("show");
    $('.courseName').text("");
    longCourseStatus = false;
  }
})

let selectRange = false;

$("#classBasic").click(function(){
if (selectRange !== true){
    $(this).find(".checkBtn").removeClass("opacity-30");
    $(this).addClass("border-4 border-white");
    if ($('.courseRange')[0].innerText.length === 0){
      $('.courseRange').text("基礎")
    }
    selectRange = true
  } else {
    $("*").find(".checkBtn").addClass("opacity-30");
    $(this).removeClass("border-4 border-white");
    if ($('.courseRange')[0].innerText.length !== 0){
      $('.courseRange').empty()
    }
    selectRange = false
  }
})
$("#classIntermediate").click(function(){
  if (selectRange !== true){
  $(this).find(".checkBtn").removeClass("opacity-30");
  $(this).addClass("border-4 border-white");
  if ($('.courseRange')[0].innerText.length === 0){
    $('.courseRange').text("中階")
  }
  selectRange = true
} else {
  $("*").find(".checkBtn").addClass("opacity-30");
  $(this).removeClass("border-4 border-white");
  if ($('.courseRange')[0].innerText.length !== 0){
    $('.courseRange').empty()
  }
  selectRange = false
}
})
$("#classAdvanced").click(function(){
  if (selectRange !== true){
    $(this).find(".checkBtn").removeClass("opacity-30");
    $(this).addClass("border-4 border-white");
    if ($('.courseRange')[0].innerText.length === 0){
      $('.courseRange').text("高階")
    }
    selectRange = true
  } else {
    $("*").find(".checkBtn").addClass("opacity-30");
    $(this).removeClass("border-4 border-white");
    if ($('.courseRange')[0].innerText.length !== 0){
      $('.courseRange').empty()
    }
    selectRange = false
  }
})

$(".orderBtn").click(function(){
    $('#page-1-list').toggleClass('mb-5 mb-md-6 mb-lg-4');
})

$(".nextBtn").click(function(){
  $("#step-1").removeClass("active");
  $("#step-2").addClass("active");
  $("#listCollapse").removeClass("show");
  $("#page-1-list").addClass("collapse");
  $("#page-1").addClass("collapse");
  $("#page-1-info").addClass("collapse");
})

$("#orderForm").on('submit',function(e){
  e.preventDefault();
  $("#step-2").removeClass("active");
  $("#step-3").addClass("active");
  $("#page-2").removeClass("show");
})

$(".scroll--style").mousewheel(function(e,time){
  this.scrollLeft -= (time*100);
  e.preventDefault();
})

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 130, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

window.onload = function () {

  lax.init()

  lax.addDriver('scrollY', function () {
    return window.scrollY
  })

  lax.addElements(
    '.heroImg',
    {
      scrollY: {
        translateY: [
          ['elInY', 'elCenterY', 'elOutY'],
          [0, 144,-480]
        ]
      }
    }
  )
  
  lax.addElements(
    'overlayImg',
    {
      scrollY: {
        translateY: [
          ['elInY', 'elCenterY', 'elOutY'],
          [0, -160,-400]
        ]
      }
    }
  )
}

const teacherCard = document.querySelectorAll('.teacherCard');
if (teacherCard.length !== 0){
  const teacherCard1 = teacherCard[0];
  const teacherCard3 = teacherCard[2];
  const teacherCard4 = teacherCard[3];
  function cardSetHeight(){
    setTimeout(() => {
      const teacherCardHeight = teacherCard[1].offsetHeight;
      teacherCard1.style.height = `${teacherCardHeight}px`;
      teacherCard3.style.height = `${teacherCardHeight}px`;
      teacherCard4.style.height = `${teacherCardHeight}px`;
    }, 0,3);
  }
  $(window).ready(cardSetHeight);
  $(window).resize(cardSetHeight);
}