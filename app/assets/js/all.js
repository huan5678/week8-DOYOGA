
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

const chooseSwiper = new Swiper(".chooseSwiper",{
  slidesPerView: 1,
  slidesPerColumn: 3,
  spaceBetween: 24,
  breakpoints: {
    768: {
      slidesPerView: 1.8,
      slidesPerColumn: 1,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
})

$("button.navbar-toggler").click(function(){
  $(this).children().toggleClass("navbar-toggler-icon-close");
})

let screen = window.matchMedia("(max-width: 991px)")

function chooseCourse(dw){
  if (dw.matches) {
    $("#experienceCourse").click(function(){
      $("#shortCourse").toggleClass("d-none");
      $("#longCourse").toggleClass("d-none");
      $(this).toggleClass("border-4");
      $('#courseName').text("首次")
    })

    $("#shortCourse").click(function(){
      $("#experienceCourse").toggleClass("d-none");
      $("#longCourse").toggleClass("d-none");
      $(this).toggleClass("border-4");
      $('#courseName').text("短期")
    })

    $("#longCourse").click(function(){
      $("#shortCourse").toggleClass("d-none");
      $("#experienceCourse").toggleClass("d-none");
      $(this).toggleClass("border-4");
      $('#courseName').text("長期")
    })
  }
}

chooseCourse(screen)
screen.addListener(chooseCourse)

let selectRange = false;

$("#classBasic").click(function(){
if(selectRange !== true){
    $(this).find(".checkBtn").removeClass("opacity-30");
    $(this).addClass("border-4 border-white");
    if ($('#courseRange')[0].innerText.length === 0){
      $('#courseRange').text("基礎")
    }
    selectRange = true
  } else {
    $("*").find(".checkBtn").addClass("opacity-30");
    $("*").find(".border-4").removeClass("border-4 border-white");
    if ($('#courseRange')[0].innerText.length !== 0){
      $('#courseRange').empty()
    }
    selectRange = false
  }
})
$("#classIntermediate").click(function(){
  if(selectRange !== true){
  $(this).find(".checkBtn").removeClass("opacity-30");
  $(this).addClass("border-4 border-white");
  if ($('#courseRange')[0].innerText.length === 0){
    $('#courseRange').text("中階")
  }
  selectRange = true
} else {
  $("*").find(".checkBtn").addClass("opacity-30");
  $("*").find(".border-4").removeClass("border-4 border-white");
  if ($('#courseRange')[0].innerText.length !== 0){
    $('#courseRange').empty()
  }
  selectRange = false
}
})
$("#classAdvanced").click(function(){
  if(selectRange !== true){
    $(this).find(".checkBtn").removeClass("opacity-30");
    $(this).addClass("border-4 border-white");
    if ($('#courseRange')[0].innerText.length === 0){
      $('#courseRange').text("高階")
    }
    selectRange = true
  } else {
    $("*").find(".checkBtn").addClass("opacity-30");
    $("*").find(".border-4").removeClass("border-4 border-white");
    if ($('#courseRange')[0].innerText.length !== 0){
      $('#courseRange').empty()
    }
    selectRange = false
  }
})