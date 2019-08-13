import projectsData from '../../scripts/projects.json';
import ScrollReveal from 'scrollreveal'

let Work = {
    render : async () => {
        let startPage =  /*html*/`
        <div class="main-header">
            <div class="hero-img hero-img--work"></div>
        </div>

        <div class="section">
            <div class="section__container text-center">
                <p>
                    Here's a selection of some of my recent work. <br>
                    For more you can visit me on
                    <a href="https://dribbble.com/HHristova" target="_blank">dribbble</a>,
                    <a href="https://www.behance.net/hhristova" target="_blank">behance</a> or
                    <a href="https://www.instagram.com/hhristova_/" target="_blank">instagram</a>.
                </p>

                <h1 class="section__container__title text-center d-inline-block px-3">
                    <span class="section__container__title__span">
                        Case Studies
                    </span>
                </h1>

                <div class="mb-5">
                    <div class="row">
                        <div class="col-sm-4 offset-sm-4">
                            <a href="#/project/1" class="box-thumb d-inline-block">
                                <p class="box-content d-inline">
                                    <span>
                                        GoTenant Design Case Study
                                    </span><br>
                                    <small>UI/UX Illustration</small>
                                </p>
                                <img src="public/assets/images/myWork/case-studies/thumbs/GT-thumb.jpg"
                                    class="img-fluid" alt="GoTenant Case Study Thumbnail">
                            </a>
                        </div>
                    </div>
                </div>

                <h1 class="section__container__title d-inline-block px-3">
                    <span class="section__container__title__span">
                        UI Design and Illustrations
                    </span>
                </h1>

                <div class="mb-5">
                    <div class="filters-group">
                        <div id="filter-options">
                            <button class="btn btn--filter active" data-attr="all">
                                All
                            </button>
                            <button class="btn btn--filter" data-attr="webdesign">
                                UI design
                            </button>
                            <button class="btn btn--filter" data-attr="illustration">
                                Illustrations
                            </button>
                        </div>
                    </div>
                </div>

                <div class="masonry">
        `
        let projects = '';

        for(var i = 0; i < projectsData.length; i++) {
            projects += `
                <figure id="picture-item"
                    class="picture-item show"
                    data-groups='["${projectsData[i].filterId}"]'>
                    <div class="picture-item__inner">
                        <div class="js-button box-thumb"
                            data-toggle="modal" data-target="#modalPicture" type="button"
                            value="Expand photo" role="button">
                            <p class="box-content d-inline">
                                <span>
                                    ${projectsData[i].alt}
                                </span><br>
                                <small>${projectsData[i].filterId}</small>
                            </p>
                            <img src="${projectsData[i].thumb}" data-img="${projectsData[i].url}"
                                alt="${projectsData[i].alt}" />
                        </div>
                    </div>
                </figure>
            `;
        }

        let endPage =  /*html*/`
            </div>

            <div id="modalPicture" class="modal fade pr-0" tabindex="-1"
                role="dialog" aria-labelledby="modalPictureLabel" aria-hidden="true">
              <div class="modal-dialog m-0" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <img class="close__icon"
                        src="public/assets/images/close-icon.svg" alt="Close icon">
                      <span class="sr-only">Close</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <img class="js-modal-image" src="" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div class="separator"></div>

            <h1 class="section__container__title d-inline-block px-3">
                <span class="section__container__title__span">Get in touch</span>
            </h1>
            <div class="section__container__content">
                <a href="mailto:hristina.a.hristova@gmail.com" type="button" class="btn btn--contact">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i> Message Me
                </a>
            </div>
        </div>
    </div>
        `
        return startPage + projects + endPage
    },
    after_render: async () => {
        // Gallery filtering
        let filterSelection = (c) => {
            var x, i;
            x = document.getElementsByClassName('picture-item');
            if (c == 'all') c = '';

            // Add the 'show' class to the filtered elements, and remove the 'show'
            // class from the elements that are not selected
            for (i = 0; i < x.length; i++) {
                hideFilteredElements(x[i], 'show');

                if (x[i].getAttribute('data-groups').indexOf(c) > -1) {
                    showFilteredElements(x[i], 'show');
                }
            }
        }

        // Show filtered elements
        let showFilteredElements = (element, name) => {
            var i, arr1, arr2;
            arr1 = element.className.split(' ');
            arr2 = name.split(' ');
            for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) {
                    element.className += ' ' + arr2[i];
                }
            }
        }

        // Hide elements that are not selected
        let hideFilteredElements = (element, name) => {
          var i, arr1, arr2;
          arr1 = element.className.split(' ');
          arr2 = name.split(' ');
          for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
              arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
          }
          element.className = arr1.join(' ');
        }

        let setFilterButtonsClass = () => {
            const options = document.querySelector('#filter-options');

            if (!options) {
                return;
            }

            const filterButtons = Array.from(options.children);
            const onClick = (event) => handleFilterClick(event);

            filterButtons.forEach(function (button) {
                button.addEventListener('click', onClick, false);
            });
        };

        let handleFilterClick = (evt) => {
            const btn = evt.currentTarget;
            const isActive = btn.classList.contains('active');

            removeActiveClassFromChildren(btn.parentNode);

            let filterGroup;
            if (isActive) {
                btn.classList.remove('active');
            } else {
                btn.classList.add('active');
            }
        };

        let removeActiveClassFromChildren = (parent) => {
            const { children } = parent;
            for (let i = children.length - 1; i >= 0; i--) {
                children[i].classList.remove('active');
            }
        }

        var classname = document.getElementsByClassName('btn--filter');

        var getFilterAttr = function() {
            filterSelection(this.getAttribute('data-attr'));
        };

        for (var i = 0; i < classname.length; i++) {
            classname[i].addEventListener('click', getFilterAttr, false);
        }

        setFilterButtonsClass();

        // ScrollReveal animations
        ScrollReveal().reveal('.section__container p, .section__container__title, .caseStudy-thumb, #filter-options', {
            duration: 1500,
            scale: '.95',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            viewFactor: 0.3
        });
    }
}

export default Work;
