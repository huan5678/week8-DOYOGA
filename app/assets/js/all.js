const header = document.querySelector('header');
let lastScroll = 0;
window.addEventListener('scroll',function(){
  const currentScroll = window.pageYOffset;

  if(currentScroll <= 0){
    header.classList.remove('scroll--up');
    return;
  }

  if(currentScroll > lastScroll && !header.classList.contains('scroll--down')){
    // console.log('down !')
    header.classList.remove('scroll--up');
    header.classList.add('scroll--down');
  } else if(currentScroll < lastScroll && header.classList.contains('scroll--down')){
    // console.log('up !')
    header.classList.remove('scroll--down');
    header.classList.add('scroll--up');
  }
  lastScroll = currentScroll;
})


const swiper = new Swiper(".desktopSwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

const customSwiper = new Swiper(".customSwiper",{
  slidesPerView: .98,
  slidesPerColumn: 3,
  spaceBetween: 8,
  slidesPerColumnFill: 'row',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    768: {
      slidesPerView: 2.1,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30,
    }
  }
})

let chooseSwiper = new Swiper(".chooseSwiper",{
  slidesPerView: 1,
  slidesPerColumn: 3,
  spaceBetween: 24,
  breakpoints: {
    768: {
      slidesPerView: 1.8,
      slidesPerColumn: 1,
      spaceBetween: 30,
    },
    960: {
      slidesPerView: 3,
      slidesPerColumn: 1,
      spaceBetween: 20,
    }
  }
})

$("button.navbar-toggler").click(function(){
  $(this).children().toggleClass("navbar-toggler-icon-close");
})

// function chooseCourse(){
//   if ($(window).width() < 769) {
//     $("#experienceCourse").click(function(){
//       $("#shortCourse").toggleClass("d-none");
//       $("#longCourse").toggleClass("d-none");
//     })

//     $("#shortCourse").click(function(){
//       $("#experienceCourse").toggleClass("d-none");
//       $("#longCourse").toggleClass("d-none");
//     })

//     $("#longCourse").click(function(){
//       $("#shortCourse").toggleClass("d-none");
//       $("#experienceCourse").toggleClass("d-none");
//     })
//   }
// }
// setInterval(() => {
//   $(window).resize(function(){
//     chooseCourse()
//   })
// }, 1000);
// chooseCourse()

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

$("#experienceCourse").click(function(){
  $(this).children().toggleClass("border-4");
  $('.courseName').text("首次");
})
$("#shortCourse").click(function(){
  $(this).children().toggleClass("border-4");
  $('.courseName').text("短期");
})
$("#longCourse").click(function(){
  $(this).children().toggleClass("border-4");
  $('.courseName').text("長期");
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
    $("*").find(".border-4").removeClass("border-4 border-white");
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
  $("*").find(".border-4").removeClass("border-4 border-white");
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
    $("*").find(".border-4").removeClass("border-4 border-white");
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

