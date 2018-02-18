javascript: (function() {
    var a = document.createElement("script");
    a.src = "//github.com/Jazilch/Website-Demo/blob/master/FinalWebsitegit.js";
    document.getElementsByTagName("head")[0].appendChild(a)
})();

// Fade In For Page Header 

const header = document.querySelector('#page-title');

function headerFade() {
	header.classList.add('hero-fade');
	console.log("Can You Find My Secrets");
}

window.onload = headerFade;

// Slide In Menu At Top Of Page 

const slideMenu = document.querySelector('.slideInMenu');

function slideInMenu() {
	if (window.scrollY > 100) {
		slideMenu.classList.add('slideMenu-active');
	} else {
		slideMenu.classList.remove('slideMenu-active');
	}
}

window.addEventListener('scroll', slideInMenu);

// Slide In Title Texts 

// const slideText = document.querySelector('#fadeInText');

// function textSlide() {
// 	if (window.scrollY > 293){
// 		slideText.classList.add('active');
// 	} else {
// 		slideText.classList.remove('active');
// 	}
// }

// window.addEventListener('scroll', textSlide);
function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

  var fadeInText = document.querySelectorAll('#fadeInText');

    function checkSlide(e) {
      fadeInText.forEach(fadeInText => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - fadeInText.offsetHeight / 2;
        console.log(slideInAt)
        // bottom of the image
        const bannerBottom = fadeInText.offsetTop + fadeInText.offsetHeight;
        const isHalfShown = slideInAt > fadeInText.offsetTop;
        const isNotScrolledPast = window.scrollY < bannerBottom;
        if (isHalfShown && isNotScrolledPast) {
          fadeInText.classList.add('active');
        } else {
          fadeInText.classList.remove('active');
        }
      });
    }
    window.addEventListener('scroll', debounce(checkSlide));

// Mobile Menu JS
const mobileIcon = document.querySelector('.mobileIcon');

function showMenu(e) {
	const mobileMenu = document.querySelector('.mobileMenu');
	mobileMenu.classList.toggle('show-mobile-menu');
}

mobileIcon.addEventListener('click', showMenu);


// Modal Window Open

const searchIcon = document.querySelector('#search');
const modal = document.querySelector('.modal');

function modalWindow(e) {
	modal.classList.add('modal-active');
} 

searchIcon.addEventListener('click', modalWindow);

// Modal Window Close

const closeButton = document.querySelector('.windowClose');

function closeModal(e) {
	modal.classList.remove('modal-active');
}

closeButton.addEventListener('click', closeModal);











