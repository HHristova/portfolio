"use strict";

window.$ = window.jQuery = require('jquery');
require('bootstrap');

// Image gallery handler
$(document).on('click', '.js-button', function() {
    var imageAlt = $(this).parents('.picture-item__inner').find('img').attr('alt');
    var imageSrc = $(this).parents('.picture-item__inner').find('img').attr('data-img');
    $('.js-modal-image').attr('src', imageSrc);
    $('.js-modal-image').attr('alt', imageAlt);
});

import Home         from '../views/pages/Home.js'
import Work        from '../views/pages/Work.js'
import Project     from '../views/pages/Project.js'
import UIDetails     from '../views/pages/UIDetails.js'
import Error404     from '../views/pages/Error404.js'
//
import Header       from '../views/components/Header.js'
import Footer    from '../views/components/Footer.js'
//
import Utils        from './services/Utils.js'

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/' : Home,
    '/work' : Work,
    '/project/:id' : Project,
    '/details/:id' : UIDetails
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    // Lazy load view element:
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');

    // Render the Header and footer of the page
    header.innerHTML = await Header.render();
    await Header.after_render();
    footer.innerHTML = await Footer.render();
    await Footer.after_render();


    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();

    // Change header colour on the case study page
    if (parsedURL == '/project/:id') {
        document.getElementsByTagName('header')[0].style.background = await page.headerBg();
    }

    // Go on top of the page
    window.scrollTo(0,0);

    // get current URL path and assign 'active' class
    var pathname = window.location.hash;
    var selected = $('.navbar-nav').find("[href='" + pathname + "']");
    selected.addClass('active');

}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
