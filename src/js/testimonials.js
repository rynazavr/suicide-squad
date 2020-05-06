$('.testimonials-content__list').slick({
  //   dots: true,
  infinite: false,
  asNavFor: '.testimonials__list',
});

$('.testimonials__list').slick({
  asNavFor: '.testimonials-content__list',
  slidesToShow: 7,
  infinite: false,
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    }
  ]
});