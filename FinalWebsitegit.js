
// Fade In For Page Header 

const header = document.querySelector('#page-title');

function headerFade() {
	header.classList.add('hero-fade');
	console.log("Can You Find My Secrets");
}

window.onload = headerFade;

// Slide In Menu At Top Of Page 

const slideMenu = document.querySelector('.slideInMenu');

function slideInMenu(e) {
	if (window.scrollY > 100) {
		slideMenu.classList.add('slideMenu-active');
	} else {
		slideMenu.classList.remove('slideMenu-active');
	}
}

window.addEventListener('scroll', slideInMenu);

// Slide In Title Texts 

const slideText = document.querySelector('#fadeInText');

function textSlide(e) {
	if (window.scrollY > 293){
		slideText.classList.add('active');
	} else {
		slideText.classList.remove('active');
	}
}

window.addEventListener('scroll', textSlide);

// Slide In Banner Texts 

// const slideTexts = document.querySelectorAll('#fadeInText');

// function textSlide(e) {
// 	slideTexts.forEach(slideText => {
// 	const slideInAt = (window.scrollY + window.innerHeight) - slideText.height / 2;
// 	const textBottom =  slideText.offsetTop + slideText.height;
// 	const isHalfShown = slideInAt > slideText.offsetTop;
// 	const isNotScrolledPast = window.scrollY < textBottom;
// 	if (isHalfShown && isNotScrolledPast) {
// 		slideText.classList.add('active');
// 	} else {
// 		slideText.classList.remove('active');
// 	}
// 	});
// }

// window.addEventListener('scroll', textSlide);

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











