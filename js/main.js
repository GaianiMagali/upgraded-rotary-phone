
/*==================== SHOW MENU ====================*/
const navMenu =  document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle');
navClose = document.getElementById('nav-close');

/*==================== MENU SHOW ===================*/
/*Validate id constant exist */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*==================== MENU HIDDEN ===================*/
/*Validate id constant exist */

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== ADD BLUR TO HEADER ====================*/
const blurHeader = () => {
    const header =  document.getElementById('header');
    //When the scroll is greater than 50 viewport height, and the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header'); 
}

window.addEventListener('scroll', blurHeader);


/*==================== SHOW SCROLL UP ====================*/
const scrollUp = document.getElementById('scroll-up');
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');

window.addEventListener('scroll', scrollUp);


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.home__data, .list__container, .join__content, footer__container`)
sr.reveal(`.home__img`, {origin: 'bottom'})
sr.reveal(`.health__image, .routine__images, follow__img-3`, {origin: 'left'})
sr.reveal(`.health__data, .routine__data, .follow__img-4`, {origin: 'right'})
sr.reveal(`.follow__data, .routine__content-1 img`, {interval: 100 })
