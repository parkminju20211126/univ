const toTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 140) { // 140이상 scroll하면 scroll-to-top이 생김
    toTop.classList.add("active");
  } 
  else { // scroll한 것이 140미만이면 scroll-to-top이 사라짐
    toTop.classList.remove("active");
  }
})

const header = document.querySelector(".header--contents");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    header.classList.add("action");
  } 
  else {
    header.classList.remove("action");
  }
})

const item1 = document.querySelector(".item__name_one");
const item2 = document.querySelector(".item__name_two");
const item3 = document.querySelector(".item__name_three");
const item4 = document.querySelector(".item__name_four");
const item5 = document.querySelector(".item__name_five");
const item6 = document.querySelector(".item__name_six");
const item7 = document.querySelector(".item__name_seven");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    item1.classList.add("action");
    item2.classList.add("action");
    item3.classList.add("action");
    item4.classList.add("action");
    item5.classList.add("action");
    item6.classList.add("action");
    item7.classList.add("action");
  } 
  else {
    item1.classList.remove("action");
    item2.classList.remove("action");
    item3.classList.remove("action");
    item4.classList.remove("action");
    item5.classList.remove("action");
    item6.classList.remove("action");
    item7.classList.remove("action");
  }
})

const contents1 = document.querySelector(".item__name_one .item__contents");
const contents2 = document.querySelector(".item__name_two .item__contents");
const contents3 = document.querySelector(".item__name_three .item__contents");
const contents4 = document.querySelector(".item__name_four .item__contents");
const contents5 = document.querySelector(".item__name_five .item__contents");
const contents6 = document.querySelector(".item__name_six .item__contents");
const contents7 = document.querySelector(".item__name_seven .item__contents");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    contents1.classList.add("action");
    contents2.classList.add("action");
    contents3.classList.add("action");
    contents4.classList.add("action");
    contents5.classList.add("action");
    contents6.classList.add("action");
    contents7.classList.add("action");
  } 
  else {
    contents1.classList.remove("action");
    contents2.classList.remove("action");
    contents3.classList.remove("action");
    contents4.classList.remove("action");
    contents5.classList.remove("action");
    contents6.classList.remove("action");
    contents7.classList.remove("action");
  }
})

let mainSwiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // 한번에 보이는 슬라이드 개수
    spaceBetween: 0, // 슬라이드 사이 간격
    loop: true, // loop 여부
    centeredSlides: true, // 슬라이드를 가운데에 배치하는 여부
    autoplay: {
        delay: 3000, // 자동 슬라이드 시간차
        pauseOnMouseEnter: false, // 슬라이더에 마우스 호버 시 멈추는 여부
        disableOnInteraction: false, // 슬라이더 클릭했을 시 autoplay 멈추는 여부
    },
    // pagination-bullet을 클릭하여 원하는 슬라이드로 이동 
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".Arrow-next",
        prevEl: ".Arrow-prev",
    },
  });
  
  // id가 play, pause인 요소 선택
let Swiperplay = document.getElementById('play');
let Swiperpause = document.getElementById('pause');

Swiperplay.addEventListener('click', function() {
  Swiperplay.style.display = 'none' // play를 클릭하면 재생 버튼 사라짐
  Swiperpause.style.display = 'flex' // play를 클릭하면 정지 버튼 나타남
  mainSwiper.autoplay.stop(); // 슬라이더 정지
  return false;
})

Swiperpause.addEventListener('click', function() {
  Swiperplay.style.display = 'flex' // pause를 클릭하면 재생 버튼 나타남
  Swiperpause.style.display = 'none' //pause를 클릭하면 정지 버튼 사라짐
  mainSwiper.autoplay.start(); // 슬라이더 재생
  return false;
})