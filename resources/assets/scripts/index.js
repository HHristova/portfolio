// Angular js
require('./app.js');
// jQuery
window.$ = window.jQuery = require('jquery');

// Require Bootstrap.js
require('bootstrap');

// ScrollReveal.js
import ScrollReveal from 'scrollreveal'

$(document).ready(function() {
    window.sr = ScrollReveal();
    sr.reveal(".projects-wrapper__box", {
        duration: 1000,
        viewFactor: 0,
        mobile: true,
        scale: 1,
        origin: "bottom",
        distance: "200px",
        delay: 200,
        interval: 600,
        reset: false
    });
});

window.addEventListener('scroll', function() {
    checkHeader();
});

function checkHeader() {
    // Detect scroll position
    let scrollPosition = Math.round(window.scrollY);

    // If scrolled 100px, add "sticky" class to the header
    if (scrollPosition > 100){
        document.querySelector('header').classList.add('sticky');
    }
    // If not, remove "sticky" class from header
    else {
        document.querySelector('header').classList.remove('sticky');
    }
};
