
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

$("button.navbar-toggler").click(function(){
  $(this).children().toggleClass("navbar-toggler-icon-close");
})
