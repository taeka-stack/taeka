// const slide = document.getElementById('slide');
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// const indicator = document.getElementById('indicator');
// const lists = document.querySelectorAll('.list');
// const totalSlides = lists.length;
// let count = 0;
// let autoPlayInterval;
// function updateListBackground() {
// for (let i = 0; i < lists.length; i++) {
//     lists[i].style.backgroundColor = i === count % totalSlides ? '#000' : '#fff';
// }
// }
// function nextClick() {
// slide.classList.remove(`slide${count % totalSlides + 1}`);
// count++;
// slide.classList.add(`slide${count % totalSlides + 1}`);
// updateListBackground();
// }
// function prevClick() {
// slide.classList.remove(`slide${count % totalSlides + 1}`);
// count--;
// if (count < 0) count = totalSlides - 1;
// slide.classList.add(`slide${count % totalSlides + 1}`);
// updateListBackground();
// }
// function startAutoPlay() {
// autoPlayInterval = setInterval(nextClick, 3000);
// }
// function resetAutoPlayInterval() {
// clearInterval(autoPlayInterval);
// startAutoPlay();
// }
// next.addEventListener('click', () => {
// nextClick();
// resetAutoPlayInterval();
// });
// prev.addEventListener('click', () => {
// prevClick();
// resetAutoPlayInterval();
// });
// indicator.addEventListener('click', (event) => {
// if (event.target.classList.contains('list')) {
//     const index = Array.from(lists).indexOf(event.target);
//     slide.classList.remove(`slide${count % totalSlides + 1}`);
//     count = index;
//     slide.classList.add(`slide${count % totalSlides + 1}`);
//     updateListBackground();
//     resetAutoPlayInterval();
// }
// });
// startAutoPlay();


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
