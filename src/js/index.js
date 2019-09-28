AOS.init({
  once: true,
  offset: 80,
  delay: 30,
  duration: 700
});

const sliderWork = new Swiper(".work__slider", {
  spaceBetween: 60,
  centeredSlides: true,
  keyboardControl: true,
  mousewheelControl: true,
  speed: 1200,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true
  // },

  pagination: {
    el: '.work__slider-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '<div class="flag"></div>' + '</span>';
    }
  }
});

  let sliderPortfolio = new Swiper(".portfolio__slider", {
    effect: 'coverflow',
  
    grabCursor: true,
    centeredSlides: true,
    keyboardControl: true,
    mousewheelControl: true,
    slidesPerView: 3.5,
    initialSlide: 1,
    speed: 1200,
  
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
  
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.portfolio__slider-pagination',
      clickable: true,
    },
  
    breakpointsInverse: true,
    breakpoints: {
      320: {
        slidesPerView: 1.8
      },
      768: {
        slidesPerView: 2.8
      },
  
      961: {
        slidesPerView: 3.5
      }
    },
  });

let portfolioAllBlock = document.querySelector(".portfolio__all-main");

let portfolioSl = document.querySelector(".portfolio__slider");
let item = portfolioSl.querySelectorAll(".portfolio__slider-item");
  
let portfolioAllList = document.querySelector(".portfolio__all-list");
let portfolioPreImg = portfolioAllList.querySelectorAll("picture.lazy")

let lazyloadThrottleTimeout;

function lazyload () {
  if(lazyloadThrottleTimeout) {
    clearTimeout(lazyloadThrottleTimeout);
  }    
  
  lazyloadThrottleTimeout = setTimeout(function() {

          portfolioPreImg.forEach(function(item, i) {
            let imagePortfolioImg = item.querySelectorAll('.lazy-source');
            imagePortfolioImg.forEach(function(item, x) {
            item.setAttribute('srcset', item.getAttribute('data-srcset'));
            item.classList.remove('lazy');
            })
          })
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
  }, 20);
}

document.addEventListener("scroll", lazyload);
window.addEventListener("resize", lazyload);
window.addEventListener("orientationChange", lazyload);


let popup = document.querySelectorAll(".portfolio-info__item");

let overlayPopup = document.querySelector(".modal-overlay");

let prevSlide = 0;
let activeSlide;
let y = 0;
let i = 0;
let q = 0;
let r = 0;
// let portfolioSlider = document.querySelector(".portfolio__box-slider");
let portfolioAll = document.querySelector(".portfolio__all");
// let portfolioAllBlock = document.querySelector(".portfolio__all-block");
let itemAll = portfolioAllBlock.querySelectorAll(".portfolio__slider-item");

let oldItem;
let portfolioInfoActive;
let portfolioInfoSlideWr;
let sliderPortfolioInfo;
let portfolioInfo;
let portfolioRadio;
let keydownEvt;

portfolioAll.addEventListener("click", function (event) {
  event.preventDefault();

  if (portfolioAll.classList.contains('hidden')) {
    portfolioAll.classList.remove('hidden');
  } else {
    portfolioAll.classList.add('hidden');
  }
  if (portfolioAllBlock.classList.contains('portfolio__all-block')) {
    portfolioAllBlock.classList.remove('portfolio__all-block');
    portfolioAllBlock.classList.remove('main__wrapper');
    portfolioSl.classList.add('swiper-container');
    portfolioAllList.classList.add('portfolio__slider-wrapper');
    portfolioAllList.classList.add('swiper-wrapper');
    $("html,body").animate({
      scrollTop: $('a[name="portfolio"]').offset().top
    }, 400);

    sliderPortfolio = new Swiper(".portfolio__slider", {
          effect: 'coverflow',
        
          grabCursor: true,
          centeredSlides: true,
          keyboardControl: true,
          mousewheelControl: true,
          slidesPerView: 3.5,
          initialSlide: 1,
          speed: 1200,
        
          autoplay: {
            delay: 3000,
            disableOnInteraction: true,
          },
        
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          },
          pagination: {
            el: '.portfolio__slider-pagination',
            clickable: true,
          },
        
          breakpointsInverse: true,
          breakpoints: {
            320: {
              slidesPerView: 1.8
            },
            768: {
              slidesPerView: 2.8
            },
        
            961: {
              slidesPerView: 3.5
            }
          },
        });

  } else {
    portfolioAllBlock.className = "portfolio__all-main portfolio__all-block main__wrapper active";
    portfolioAllList.className = "portfolio__all-list";
    portfolioSl.className = "portfolio__slider";
    sliderPortfolio.destroy(false, true);
    $("html,body").animate({
      scrollTop: $('a[name="portfolio"]').offset().top
    }, 400);
  }
})

openItemPort (item, q);
// openItemPort (itemAll, q);

function openItemPort (item, q) {
    item.forEach(function (item, i) {

    item.addEventListener("click", OpenItemPortfolio); 

    function OpenItemPortfolio() {
      event.preventDefault();
      
      if (item.classList.contains('portfolio__slider-item--new') == true) {
        $("html,body").animate({
          scrollTop: $('a[name="contact"]').offset().top - 30
        }, 700);
      } 
        else {
          addOverlay();

          if (popup[i-1].classList.contains('reopen') == false) {

            let lazyloadImages = popup[i-1].querySelectorAll("picture.lazy");
            let imagePortfolioInfoMain = lazyloadImages[0].querySelector(".lazy-img");
            
            imagePortfolioInfoMain.setAttribute('src', imagePortfolioInfoMain.getAttribute('datasrc'));

            lazyImg(lazyloadImages);

            imagePortfolioInfoMain.onload = function() {
        
              setTimeout(function() {
                openItem(i-1);  
                }, 200);
            };
            popup[i-1].classList.add('reopen');
          }

          openItem(i-1);  

          let popupClose = popup[i-1].querySelector(".portfolio-info__close");

          overlayPopup.addEventListener("click", closeOverlayPopup, {once: true});
          popupClose.addEventListener("click", closePopupClose, {once: true});
          window.addEventListener("keydown", closePopupEsc, {once: true});

        portfolioRadio = popup[i-1].querySelectorAll(".portfolio-info__radio-def");
        portfolioInfo = popup[i-1].querySelectorAll(".portfolio-info__img");
        
        portfolioInfoActive = popup[i-1].querySelectorAll(".portfolio-info__slider");
        portfolioInfoSlideWr = popup[i-1].querySelectorAll(".portfolio-info__slider-wrapper");

        for (r = 0; r < portfolioRadio.length; r++) {
          if (portfolioRadio[r].checked == true ) {
            initSliderPortfolioWork(r);
            break;
          }
        }

        portfolioRadio.forEach(function (portfolioRadio, r) {
          portfolioRadio.addEventListener("click", switchPortfolioRadio);
          
          function switchPortfolioRadio() {
            
            if (oldItem === r) {
              return;
            }
            else {
              deletePortfolioSliderWork();
  
              initSliderPortfolioWork (r);
            }
        }
        });

        function initSliderPortfolioWork (r) {
          portfolioInfo[r].style.display = 'block';
      
          portfolioInfoActive[r].classList.add('portfolio-info__slider--active');
          portfolioInfoActive[r].classList.add('swiper-container');
          portfolioInfoSlideWr[r].classList.add('swiper-wrapper');

          oldItem = r;
          sliderPortfolioInfo = new Swiper(".portfolio-info__slider--active", {
            spaceBetween: 30,
            centeredSlides: true,
            autoHeight: true,
            keyboardControl: true,
            centeredSlides: true,
            mousewheelControl: true,
            watchOverflow: true,
          
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        }

        function deletePortfolioSliderWork (){
          portfolioInfoActive[oldItem].classList.remove('swiper-container');
          portfolioInfoSlideWr[oldItem].classList.remove('swiper-wrapper');
          portfolioInfoActive[oldItem].classList.remove('portfolio-info__slider--active');
          sliderPortfolioInfo.destroy(false, true);
          portfolioInfo[oldItem].style.display = 'none';
        }


          function closePopupEsc () {
            if (event.keyCode === 27) {

              popupClose.removeEventListener("click", closePopupClose, {once: true});
              overlayPopup.removeEventListener("click", closeOverlayPopup, {once: true});

              closePopupPortfolio ();
            }
          };
          
          function closePopupClose() {
  
            overlayPopup.removeEventListener("click", closeOverlayPopup, {once: true});
            window.removeEventListener("keydown", closePopupEsc, {once: true});

            closePopupPortfolio ();
          };

          function closeOverlayPopup() {

            popupClose.removeEventListener("click", closePopupClose, {once: true});
            window.removeEventListener("keydown", closePopupEsc, {once: true});
            closePopupPortfolio ();
          }   
          
          function closePopupPortfolio (){
            deletePortfolioSliderWork ();

            oldItem = undefined;
            closeItem(i-1)
            
            delOverlay();
          }
      }
    }
  })
}

function lazyImg(lazyloadImages) {
  lazyloadImages.forEach(function(item, i) {
    let imagePortfolioInfo = item.querySelectorAll('.lazy-source');
    imagePortfolioInfo.forEach(function(item, x) {
    item.setAttribute('srcset', item.getAttribute('data-srcset'));
    })
  })
}

function openItem(j) {
  document.body.classList.add('hidden');
  popup[j].classList.add('active');
  popup[j].classList.remove('hidden');
}

function closeItem(j) {
  popup[j].classList.remove('active');
  popup[j].classList.add('hidden');
  document.body.classList.remove('hidden');
}

function addOverlay() {
  overlayPopup.classList.add('active');
}

function delOverlay() {
  overlayPopup.classList.remove('active');
}


//MENU MOBILE
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let navItem = document.querySelectorAll('.main-nav__item');


navMain.classList.remove('main-nav--nojs');

function SwitchMenu() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navToggle.classList.add('close');
    navMain.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.3)';

    navItem.forEach(function (item, i) {

      item.addEventListener("click", ListnerMenuItem);
    }) 

  } else {
    ListnerMenuItem();
  }
}

function DeleteEvtMenuItem () {
  navItem.forEach(function (item, i) {
    item.removeEventListener("click", ListnerMenuItem);
  }) 
}

function ListnerMenuItem() {
  DeleteEvtMenuItem ();

  navMain.classList.add('main-nav--closed');
  navToggle.classList.remove('close');
  // navMain.style.boxShadow = 'none';
}

function ListenerMenu() {
  if(document.documentElement.clientWidth < 768) {
    navToggle.addEventListener('click', SwitchMenu);
  } else {
    navToggle.removeEventListener('click', SwitchMenu);
  }
}

//MENU SHADOW 
function GetSnadowMenu() {
  if (navMain.getBoundingClientRect().top == 0 || (navMain.classList.contains('main-nav--closed') == false) && document.documentElement.clientWidth < 768) {
    navMain.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.3)';
  } else {
    navMain.style.boxShadow = 'none';
  }
}

// REACT FOR Sizing
function ReactSizing (){
  GetSnadowMenu();
  ListenerMenu();
}
window.addEventListener('resize', ReactSizing);
window.addEventListener('scroll', ReactSizing);
window.addEventListener("orientationchange", ReactSizing);

/// SCROLL to ANCHOR

ScrollAnchor();
ScrollDown();

function ScrollAnchor() {
  let top = 0;
  let oldTop = 0;
  $(".anchor-scroll").on(
    "click",
    "a",
    function (e) {
      e.preventDefault();

      const name = this.getAttribute("href");
      const a = $('a[name="' + name.substr(1) + '"]');

      if (window.innerWidth > 767) {
        if (window.innerWidth > 960) {
          top = a.offset().top - 30;
        } else {
          top = a.offset().top - 80;
        }
      } else {
        top = a.offset().top - 312;
      }

      $("html,body").animate({
        scrollTop: top
      }, 700);
      oldTop = top;

      return false;
    }
  );
}

function ScrollDown() {
  let top = 0;
  let oldTop = 0;
  $(".btn-scroll").on(
    "click",
    "a",
    function (e) {
      e.preventDefault();
      const name = this.getAttribute("href");
      const a = $('a[name="' + name.substr(1) + '"]');

      if (window.innerWidth > 767) {
        top = a.offset().top - 33;
      } else {
        top = a.offset().top - 32;
      }

      $("html,body").animate({
        scrollTop: top
      }, 700);
      oldTop = top;

      return false;
    }
  );
}

/// DOWN SCROOL BUTTON 
const scrollDown = document.querySelector(".header__scroll");
if (scrollDown) {
  window.addEventListener("scroll", displayDown);

  function displayDown() {
    y = window.pageYOffset;

    if (y > 90) {
      scrollDown.classList.add("hidden");
    } else {
      scrollDown.classList.remove("hidden");
    }
  }

  displayDown();
}

// LANG
// let langEng = document.querySelector('.header__lang--eng');
// let langRus = document.querySelector('.header__lang--rus');
// let langNl = document.querySelector('.header__lang--nl');

// let langActive = document.querySelector('.header__lang--active');
// let textRus = document.querySelectorAll('.text--rus');
// let textEng = document.querySelectorAll('.text--eng');
// let textNl = document.querySelectorAll('.text--nl');

// let zzz;

// changeLang(langEng, textEng);
// changeLang(langRus, textRus);
// changeLang(langNl, textNl);

// function changeLang(langXX, newLang) {

//   langXX.addEventListener("click", function (event) {

//     // event.preventDefault();

//     if (langXX.classList.contains('header__lang--active')) {
//       return;
//     } else {
//       let textLang = document.querySelectorAll('.text');

//       langActive.classList.remove('header__lang--active');
//       langXX.classList.add('header__lang--active');
//       langActive = langXX;


//       textLang.forEach(function (value, index, arr) {
//         if (arr[index].classList.contains('text--hidden')) {
//           return;
//         } else {
//           arr[index].classList.add('text--hidden');
//         }
//       });

//       newLang.forEach(function (value, index, arr) {
//         arr[index].classList.remove('text--hidden');
//       });
//     }
//   });
// }