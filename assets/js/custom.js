{
    var swiper = new Swiper(".reviewSwiper", {
      freeMode: true,
      slidesPerView: 4,
      loop: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        // when window width is >= 992px
        575: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        // when window width is >= 1400px
        850: {
          slidesPerView: 3,
          spaceBetween: 50
        },
        // 
        1200: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
    });
  }