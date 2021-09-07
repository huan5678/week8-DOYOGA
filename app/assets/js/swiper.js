
const swiper = new Swiper(".desktopSwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

const customSwiper = new Swiper(".customSwiper",{
  slidesPerView: 1,
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
      slidesPerColumnFill: 'row',
      observer: true,
      observeParents: true,
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

const teacherSwiper = new Swiper(".teacherListSwiper",{
  slidesPerView: 1,
  slidesPerColumn: 4,
  spaceBetween: 72,
  slidesPerColumnFill: 'row',
  breakpoints:{
    768: {
      slidesPerView: 2,
      slidesPerColumn: 1,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      slidesPerColumn: 1,
      spaceBetween: 30,
    }
  }
})

const recommendSwiper = new Swiper(".recommendSwiper",{
  slidesPerView: 1.2,
  slidesPerColumn: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints:{
    768: {
      slidesPerView: 3,
      slidesPerColumn: 1,
    },
    1200: {
      slidesPerView: 4.2,
      slidesPerColumn: 1,
    }
  }
})