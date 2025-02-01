
$(".slide").slick({
    arrows: true,
    dots:true,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll:3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
        },
      },
    ],
  });
