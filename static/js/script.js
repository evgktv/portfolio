/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

AOS.init({
  once: true,
  delay: 50,
  duration: 700
});

const sliderWork = new Swiper(".work__slider", {
  spaceBetween: 60,
  centeredSlides: true,
  keyboardControl: true,
  mousewheelControl: true,
  speed: 1200,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  },

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


// let portfolioSl = document.querySelector(".portfolio__slider");
// let item = portfolioSl.querySelectorAll(".portfolio__slider-item");

// let popup = document.querySelectorAll(".portfolio-info__item");
// let overlayPopup = document.querySelector(".modal-overlay");

// let prevSlide = 0;
// let activeSlide;
// let y = 0;
// let i = 0;
// let q = 0;
// let portfolioSlider = document.querySelector(".portfolio__box-slider");
// let portfolioAll = document.querySelector(".portfolio__all");
// let portfolioAllBlock = document.querySelector(".portfolio__all-block");
// let itemAll = portfolioAllBlock.querySelectorAll(".portfolio__slider-item");

// portfolioAll.addEventListener("click", function (event) {
//   event.preventDefault();

//   if (portfolioSlider.classList.contains('active')) {
//     portfolioSlider.classList.remove('active');
//     portfolioAllBlock.classList.add('active');
//     portfolioAll.classList.add('hidden');
//   } else {
//     portfolioSlider.classList.add('active');
//     portfolioAllBlock.classList.remove('active');
//     portfolioAll.classList.remove('hidden');    
//     $("html,body").animate({
//       scrollTop: $('a[name="portfolio"]').offset().top
//     }, 400);
    
//     sliderPortfolio.update();
//   }
// })

// openItemPort (item, q);
// openItemPort (itemAll, q);

// function openItemPort (item, q) {

//   item.forEach(function (item, i) {

//     item.addEventListener("click", function (event) {
//       event.preventDefault();
//       q = i;

//       if (item.classList.contains('portfolio__slider-item--new') == true) {
//         $("html,body").animate({
//           scrollTop: $('a[name="contact"]').offset().top
//         }, 700);
//       } else {
//         addOverlay();
  
//         openItem(q-1);
  
//         overlayPopup.addEventListener("click", function (evt) {
  
//           closeItem(q-1)
  
//           delOverlay();
//         })

//         let popupClose = popup[q].querySelector(".portfolio-info__close");
//         popupClose.addEventListener("click", function (evt) {
  
//           closeItem(q-1);
  
//           delOverlay()
//         })
  
//         window.addEventListener("keydown", function (event) {
//           if (event.keyCode === 27) {
//             closeItem(q-1);
  
//             delOverlay();
//           }
//         })
//       }
//     });
//   })
// }

let portfolioAllBlock = document.querySelector(".portfolio__all-main");

let portfolioSl = document.querySelector(".portfolio__slider");
let item = portfolioSl.querySelectorAll(".portfolio__slider-item");
let portfolioAllList = document.querySelector(".portfolio__all-list");

let popup = document.querySelectorAll(".portfolio-info__item");
let overlayPopup = document.querySelector(".modal-overlay");

let prevSlide = 0;
let activeSlide;
let y = 0;
let i = 0;
let q = 0;
// let portfolioSlider = document.querySelector(".portfolio__box-slider");
let portfolioAll = document.querySelector(".portfolio__all");
// let portfolioAllBlock = document.querySelector(".portfolio__all-block");
let itemAll = portfolioAllBlock.querySelectorAll(".portfolio__slider-item");

let oldItem;




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
openItemPort (itemAll, q);

function openItemPort (item, q) {

  item.forEach(function (item, i) {

    item.addEventListener("click", function (event) {
      event.preventDefault();
      q = i;

      if (item.classList.contains('portfolio__slider-item--new') == true) {
        $("html,body").animate({
          scrollTop: $('a[name="contact"]').offset().top
        }, 700);
      } else {
        addOverlay();
  
        openItem(q-1);

        switchPortfolioSlider(q);
        
        overlayPopup.addEventListener("click", function (evt) {
  
          closeItem(q-1)
  
          delOverlay();
        })

        let popupClose = popup[q-1].querySelector(".portfolio-info__close");
        popupClose.addEventListener("click", function (evt) {
  
          closeItem(q-1);
  
          delOverlay()
        })
  
        window.addEventListener("keydown", function (event) {
          if (event.keyCode === 27) {
            closeItem(q-1);
  
            delOverlay();
          }
        })
      }
    });
  })
}

function switchPortfolioSlider(q) {
  let portfolioRadio = popup[q-1].querySelectorAll(".portfolio-info__radio-def");
  let portfolioInfo = popup[q-1].querySelectorAll(".portfolio-info__img");
  
  portfolioRadio.forEach(function (portfolioRadio, r) {
    if (portfolioRadio.checked == true ) {
      portfolioInfo[r].style.display = 'block';
      oldItem = r;
      let sliderPortfolioInfo = new Swiper(".portfolio-info__slider", {
        spaceBetween: 30,
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
    };

    portfolioRadio.addEventListener("click", function (event) {
        
        portfolioInfo[oldItem].style.display = 'none';
        portfolioInfo[r].style.display = 'block';
        if (oldItem === r) {
          return;
        }
        else {
          oldItem = r;
          sliderPortfolioInfo = new Swiper(".portfolio-info__slider", {
            spaceBetween: 30,

            autoHeight: true,
            centeredSlides: true,
            keyboardControl: true,
            mousewheelControl: true,
            watchOverflow: true,

          
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        }

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

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navToggle.classList.add('close');
    navItem.forEach(function (item, i) {

      item.addEventListener("click", function (event) {

        navMain.classList.add('main-nav--closed');
        navToggle.classList.remove('close');
      })
    })
  } else {
    let menuHeight = navMain.clientHeight;
    navMain.classList.add('main-nav--closed');
    navToggle.classList.remove('close');
    if (navMain.getBoundingClientRect().top == 0) {
      window.scrollBy(0, (-menuHeight + 50));
    }
  }
});

//MENU SHADOW 
function GetSnadowMenu() {
  if (navMain.getBoundingClientRect().top == 0) {
    navMain.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.3)';
  } else {
    navMain.style.boxShadow = 'none';
  }
}
window.addEventListener('resize', function (evt) {
  GetSnadowMenu();
})

window.addEventListener('scroll', function (evt) {
  GetSnadowMenu();
})


//MENU FIXED


// let hd1 = 0;
// let h2 = 0;
// let menuID = "menuID";
// let header = document.querySelector('.header');

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//   hd = document.documentElement.clientHeight;
//   header.style.height = hd + "px";
// }


// function getScrollTop() {
//   let scrollOfY = 0;

//   if (typeof (window.pageYOffset) == "number") {
//     scrollOfY = window.pageYOffset;
//   } else if (document.body && document.body.scrollTop) {
//     scrollOfY = document.body.scrollTop;
//   } else if (document.documentElement && document.documentElement.scrollTop) {
//     scrollOfY = document.documentElement.scrollTop;
//   }
//   return scrollOfY;
// }

// function marginMenuTop() {
//   let top = getScrollTop();
//   let menuMain = document.getElementById(menuID);
//   if (typeof menuMain != "undefined" && menuMain) {
//     if (top + h2 < h1) {
//       menuMain.style.top = (h1 - top) + "px";
//     } else {
//       menuMain.style.top = h2 + "px";
//     }
//   }
// }

// function setMenuPosition() {
//   if (typeof window.addEventListener != "undefined") {
//     window.addEventListener("scroll", marginMenuTop, false);
//   } else if (typeof window.attachEvent != "undefined") {
//     window.attachEvent("onscroll", marginMenuTop);
//   }
//   marginMenuTop();
// };

// if (typeof window.addEventListener != "undefined") {
//   window.addEventListener("load", setMenuPosition, false);
// } else if (typeof window.attachEvent != "undefined") {
//   window.attachEvent("onload", setMenuPosition);
// }


// go();
// window.addEventListener('resize', go);

// function go() {
//   h1 = document.documentElement.clientHeight;

//   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     hd = document.documentElement.clientHeight;

//     if (hd > 312) {
//       header.style.height = hd + "px";
//     } else {
//       header.style.height = 312 + "px";
//     }
//   }
//   setMenuPosition();
// }


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
        top = a.offset().top - 33;
      } else {
        top = a.offset().top - 232;
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
      scrollDown.style.opacity = 0;
    } else {
      scrollDown.style.opacity = 1;
    }
  }

  displayDown();
}


// // POPUP PORTFOLIO-ITEM
// let portfolioList = document.querySelector('.portfolio__list');
// let body = document.body;
// let popup = document.querySelectorAll(".portfolio__item");
// let item = [].slice.call(document.querySelectorAll(".portfolio__item-wrapper"));
// let itemInfo = document.querySelectorAll(".portfolio__radio-custom");

// let boxImg = document.querySelectorAll('.portfolio__item-image-box');
// let boxInfo = document.querySelectorAll('.portfolio__item-all-info');

// let buttonPrev = document.querySelectorAll('.portfolio__item-button--prev');
// let buttonNext = document.querySelectorAll('.portfolio__item-button--next');

// let next;
// let prev;

// portfolioList.classList.remove('portfolio__list--nojs');

// function popupWork (j) {

//     let popupActive = document.querySelector(".portfolio__item--popup");
//     popup[j].classList.add('portfolio__item--popup');

//     let height = window.getComputedStyle(boxImg[j], null).height;

//     if (window.innerWidth > 767) {
//         boxInfo[j].style.height = height;
//     }
//     else {
//         boxInfo[j].style.height = 'inherit';
//     }

//     window.addEventListener('resize', function () {
//         if (window.innerWidth > 767) {
//             height = window.getComputedStyle(boxImg[j], null).height;
//             boxInfo[j].style.height = height;
//         }
//         else {
//             boxInfo[j].style.height = 'inherit';
//         }
//     })

//     if (popupActive != null) {
//         popupActive.classList.remove('portfolio__item--popup');
//     }
//     positionY = popup[j].offsetTop;

//     window.scrollTo(0, positionY - 50);
// }


// item.forEach(function (item, i) {

//     item.addEventListener("click", function (event) {

//         event.preventDefault();

//         popupWork (i);
//     })

//     buttonNext[i].addEventListener('click', function () {

//         next = i + 1;

//         popup[j].classList.remove('portfolio__item--popup');

//         popupWork(next);
//     })

//     buttonPrev[i].addEventListener('click', function () {

//         prev = i - 1;

//         popup[j].classList.remove('portfolio__item--popup');

//         popupWork(prev);
//     })

// });

// LANG
let langEng = document.querySelector('.header__lang--eng');
let langRus = document.querySelector('.header__lang--rus');
let langNl = document.querySelector('.header__lang--nl');

let langActive = document.querySelector('.header__lang--active');
let textRus = document.querySelectorAll('.text--rus');
let textEng = document.querySelectorAll('.text--eng');
let textNl = document.querySelectorAll('.text--nl');

let zzz;

changeLang(langEng, textEng);
changeLang(langRus, textRus);
changeLang(langNl, textNl);

function changeLang(langXX, newLang) {

  langXX.addEventListener("click", function (event) {

    // event.preventDefault();

    if (langXX.classList.contains('header__lang--active')) {
      return;
    } else {
      let textLang = document.querySelectorAll('.text');

      langActive.classList.remove('header__lang--active');
      langXX.classList.add('header__lang--active');
      langActive = langXX;


      textLang.forEach(function (value, index, arr) {
        if (arr[index].classList.contains('text--hidden')) {
          return;
        } else {
          arr[index].classList.add('text--hidden');
        }
      });

      newLang.forEach(function (value, index, arr) {
        arr[index].classList.remove('text--hidden');
      });
    }
  });
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map