{
    var swiper = new Swiper(".reviewSwiper", {
      freeMode: true,
      slidesPerView: 4,
      loop: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 30
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  }