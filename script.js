// Mobile View Toggle Bar JS

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-Toggler'),
      navClose = document.getElementById('nav-Close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}




// Toggle Bar Links JS

const navLinks = document.querySelectorAll('.nav__link'); // Select multiple elements with the class 'nav__link'

const linkAction = () => {
    navMenu.classList.remove('show-menu');
};

navLinks.forEach(n => n.addEventListener('click', linkAction)); // Loop through NodeList of navLinks


//Header Shadow 

const scrollHeader = () =>{
    const header =document.getElementById('header');
    this.scrollY >= 35 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header') 
}

window.addEventListener('scroll', scrollHeader);


// Scroll-Up JS

const scrollUp = ()=>{
    const scrollUp = document.getElementById('scrollUp');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)

//Scroll Section JS

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (sectionsClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
};

window.addEventListener('scroll', scrollActive);


//Scroll Reveal JS

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true
})

sr.reveal(`.home__data, .footer`)
sr.reveal(`.home__rice`, {delay:1200, distance: '100px', duration:1000})
sr.reveal(`.home__board`, {delay:500, distance: '100px', origin:'bottom'})
sr.reveal(`.recipe__img, .delivery__data, .contact__img`, {origin:'left'})
sr.reveal(`.recipe__data, .delivery__img, .contact__data`, {origin:'right'})
sr.reveal(`.popular__card`, {interval:'100'})

