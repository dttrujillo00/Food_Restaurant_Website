// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
})

window.addEventListener('scroll', () => {
    navbar.classList.remove('active');
})

// Dark Mode
let darkmode = document.querySelector('#darkmode');
let modeStoraged = localStorage.getItem('darkmode');

if (modeStoraged === 'active') {

    darkmode.classList.replace('bx-moon', 'bx-sun');
    document.body.classList.add(`${modeStoraged}`)
}

darkmode.addEventListener('click', () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
        localStorage.setItem('darkmode', 'active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
        localStorage.setItem('darkmode', 'no-active');
    }
})

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 1000,
    reset: true
});

sr.reveal('.home-text, .home-img, .about-img, .about-text, .box, .s-box, .connect-text, .btn, .contact-box')