// Angular js
require('./app.js');
// jQuery
window.$ = window.jQuery = require('jquery');

// Require Bootstrap.js
require('bootstrap');

// ScrollReveal.js
import ScrollReveal from 'scrollreveal'

// Shuffle.js
import Shuffle from 'shufflejs';

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

// Work projects library (Shufflejs)

var shuffle = window.Shuffle;
var element = document.querySelector('.my-shuffle-container');
var sizer = document.querySelector('.my-sizer-element');

class Demo {
  constructor(element) {
    this.element = element;
    this.shuffle = new Shuffle(element, {
      itemSelector: '.picture-item',
      sizer: document.querySelector('.my-sizer-element'),
    });
    // Log events.
    this.addShuffleEventListeners();
    this._activeFilters = [];
    this.addFilterButtons();
  }

  /**
   * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
   * for them like you normally would (with jQuery for example).
   */
  addShuffleEventListeners() {
    this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
      // console.log('layout. data:', data);
    });
    this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
      // console.log('removed. data:', data);
    });
  }

  addFilterButtons() {
    const options = document.querySelector('.filter-options');
    if (!options) {
      return;
    }

    const filterButtons = Array.from(options.children);
    const onClick = this._handleFilterClick.bind(this);
    filterButtons.forEach((button) => {
      button.addEventListener('click', onClick, false);
    });
  }

  _handleFilterClick(evt) {
    const btn = evt.currentTarget;
    const isActive = btn.classList.contains('active');
    const btnGroup = btn.getAttribute('data-group');

    this._removeActiveClassFromChildren(btn.parentNode);

    let filterGroup;
    if (isActive) {
      btn.classList.remove('active');
      filterGroup = Shuffle.ALL_ITEMS;
    } else {
      btn.classList.add('active');
      filterGroup = btnGroup;
    }

    this.shuffle.filter(filterGroup);
  }

  _removeActiveClassFromChildren(parent) {
    const { children } = parent;
    for (let i = children.length - 1; i >= 0; i--) {
      children[i].classList.remove('active');
    }
  }
}
