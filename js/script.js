'use strict';

//* Selecting elements

// Hiding nav
const headerMenu = document.querySelector('.header__menu');

// Burger-icon animation
const burgerIcon = document.querySelector('.header__burger');
const body = document.querySelector('body');

// Smooth scrolling
const linkDown = document.querySelector('.section-hero__scroll');
const section1 = document.querySelector('.section-story');
const navLinks = document.querySelector('.header__list');
const allSections = document.querySelectorAll('.section');

//===========================================================

//* Hide nav

if (window.visualViewport.width < 524) {
    headerMenu.classList.add('header__menu_invisible');
} else {
    headerMenu.classList.remove('header__menu_invisible');
}

window.addEventListener('resize', function(event) {
    if (window.visualViewport.width > 524) {
        headerMenu.classList.remove('header__menu_invisible');
    }
}, true);

//===========================================================

//* Smooth scroll down

// // From a link
// linkDown.addEventListener('click', (e) => {
//     e.preventDefault();
//     section1.scrollIntoView({behavior: 'smooth',});
// });

// // From navigation
// navLinks.addEventListener('click', (e) => {
//     e.preventDefault();

//     const id = e.target.getAttribute('href');

//     if (e.target.classList.contains('header__link')) {
//         document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//     }

//     if (burgerIcon.classList.contains('header__burger-icon_active')) {
//         body.classList.remove('lock');
//         headerMenu.classList.remove('header__menu_active');
//         burgerIcon.classList.remove('header__burger-icon_active');
//     }
// });

// // From hero link
// linkDown.addEventListener('click', onMenuLinkClick);

// //  From links
// navLinks.forEach(link => {
//     link.addEventListener('click', onMenuLinkClick);
// });

// function onMenuLinkClick(e) {
//     e.preventDefault();

//     const menuLink = e.target;

//     if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//         const gotoBlock = document.querySelector(menuLink.dataset.goto);
//         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY;
//         // console.log(gotoBlockValue);

//         window.scrollTo({
//             top: gotoBlockValue,
//             behavior: "smooth",
//         });
//     }

//     if (burgerIcon.classList.contains('header__burger-icon_active')) {
//         body.classList.remove('lock');
//         headerMenu.classList.remove('header__menu_active');
//         burgerIcon.classList.remove('header__burger-icon_active');
//     }
// }

const scrollFormNav = new SmoothScroll('a[href*="#"]', {
    speed: 800
});

// const scrollFromLink = new SmoothScroll('.section-hero a[href*="#"]', {
//     speed: 800,
// });

//===========================================================

//* Menu-burger animmation

// Brurger-icon animation
burgerIcon.addEventListener('click', (e) => {
    e.preventDefault();

    const clicked = e.target.closest('.header__burger');

    if(!clicked) return;
    clicked.classList.toggle('header__burger-icon_active');

    // Menu-burger animation
    body.classList.toggle('lock');
    headerMenu.classList.toggle('header__menu_active');
});

navLinks.addEventListener('click', (e) => {
    e.preventDefault();

    if (burgerIcon.classList.contains('header__burger-icon_active')) {
        body.classList.remove('lock');
        headerMenu.classList.remove('header__menu_active');
        burgerIcon.classList.remove('header__burger-icon_active');
    }
})