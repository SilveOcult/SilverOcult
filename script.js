new Swiper('.card-wrapper', {
    loop:true, 
    spaceBetween: 20,


 // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints:{
    0:{
        SlidesPerView: 1
    },
     768:{
        SlidesPerView: 2
    },
     1024:{
        SlidesPerView: 2
    },
    
  }
});