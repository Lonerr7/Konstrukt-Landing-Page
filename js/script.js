'use strict';

//* Selecting elements

// Hiding nav
const headerMenu = document.querySelector('.header__menu');

// Burger-icon animation
const burgerIcon = document.querySelector('.header__burger-icon');

// Smooth scrolling
const linkDown = document.querySelector('.section-hero__scroll');
const section1 = document.querySelector('.section-story');
const navLinks = document.querySelector('.header__list');
const allSections = document.querySelectorAll('.section');

//===========================================================

//* Hide nav

if (window.visualViewport.width > 524) {
    headerMenu.classList.remove('header__menu_invisible');
}

//===========================================================

//* Icon-burger animation

burgerIcon.addEventListener('click', (e) => {
    e.preventDefault();

    burgerIcon.classList.toggle('header__burger-icon_active');
})

//===========================================================

//* Smooth scroll down

// From a link
linkDown.addEventListener('click', (e) => {
    e.preventDefault();
    section1.scrollIntoView({behavior: 'smooth',});
});

// From navigation
navLinks.addEventListener('click', (e) => {
    e.preventDefault();

    const id = e.target.getAttribute('href');

    if (e.target.classList.contains('header__link')) {
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
});