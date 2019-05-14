// Angular js
require('./app.js');
// jQuery
window.$ = window.jQuery = require('jquery');

// Require Bootstrap.js
require('bootstrap');

// ScrollReveal.js
import ScrollReveal from 'scrollreveal'

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

// Image replacement handler
$(document).on("click", ".js-button", function() {
    var imageAlt = $(this).parents(".picture-item__inner").find("img").attr("alt");
    var imageSrc = $(this).parents(".picture-item__inner").find("img").attr("src");
    $(".js-download").attr("href", imageSrc);
    $(".js-modal-image").attr("src", imageSrc);
    $(".js-modal-image").attr("alt", imageAlt);

    $(document).on("click", ".js-heart", function() {
        $(this).toggleClass("active");
    });
});
