import projectsData from '../../scripts/uiprojects.json';
import graphicsData from '../../scripts/graphicsprojects.json';
import ScrollReveal from 'scrollreveal'

let UiDesigns = {
    render: async () => {
        let startPage = /*html*/ `
        <div class="main-header">
            <div class="hero-img hero-img--work"></div>
        </div>

        <div class="section pt-4">
            <div class="section__container text-center">
                <p class="px-2">
                    Here's a selection of some of my work.<br>
                    For more you can visit me on
                    <strong><a href="https://dribbble.com/HHristova" target="_blank">dribbble</a></strong>,
                    <strong><a href="https://www.behance.net/hhristova" target="_blank">behance</a></strong> or
                    <strong><a href="https://www.instagram.com/hristova.drawings/" target="_blank">instagram</a></strong>.
                </p>

                <h1 class="section__container__title text-center d-inline-block px-2">
                    <span class="section__container__title__span">
                        Graphic Design Case Studies
                    </span>
                </h1>

                <div class="mb-5">
                    <div class="grid-wrapper container grad-wrapper-no-gap">
                        <div class="grid-item"></div>
                        <div class="grid-item">
                            <a href="graphics-case-study/mista-future-cd-design" class="box-thumb d-inline-block">
                                <p class="box-content d-inline">
                                    <span>
                                        CD Cover Design
                                    </span><br>
                                    <small>Graphic Design</small>
                                </p>
                                <img src="/assets/images/myWork/case-studies/thumbs/Mista-Future-thumb.jpg"
                                    class="img-fluid" alt="CD Case Study Thumbnail">
                            </a>
                        </div>
                    </div>
                </div>



                <h1 class="section__container__title d-inline-block px-2">
                    <span class="section__container__title__span">
                        Graphics
                    </span>
                </h1>

                <div class="masonry container masonry-2">
                `
        let graphics = '';

        for (var i = 0; i < graphicsData.length; i++) {
            graphics += `
                <figure id="picture-item"
                    class="picture-item show"
                    data-groups='["${graphicsData[i].filterId}"]'>
                    <div class="picture-item__inner">
                        <div class="js-button--graphics box-thumb"
                            data-toggle="modal" data-target="#modalPicture"
                            value="Expand photo" role="button">
                            <p class="box-content d-inline px-3">
                                <span>
                                    ${graphicsData[i].title}
                                </span>
                            </p>
                            <img src="${graphicsData[i].thumb}" data-img="${graphicsData[i].url}"
                                data-pin-description="${graphicsData[i].title}"
                                data-pin-url="https://hhristova.com/graphics"
                                alt="${graphicsData[i].title}" />
                        </div>
                    </div>
                </figure>
                    `;
        }

        let endGraphics = /*html*/ `
                </div>

                <h1 class="section__container__title text-center d-inline-block px-2 mt-5">
                    <span class="section__container__title__span">
                        UI Case Studies
                    </span>
                </h1>

                <div class="mb-5">
                    <div class="grid-wrapper container grad-wrapper-no-gap">
                        <div class="grid-item"></div>
                        <div class="grid-item">
                            <a href="ui-graphics-case-study/go-tenant-design" class="box-thumb d-inline-block">
                                <p class="box-content d-inline">
                                    <span>
                                        GoTenant Design Case Study
                                    </span><br>
                                    <small>Design, Illustration</small>
                                </p>
                                <img src="/assets/images/myWork/case-studies/thumbs/GT-thumb.jpg"
                                    class="img-fluid" alt="GoTenant Case Study Thumbnail">
                            </a>
                        </div>
                    </div>
                </div>

                <h1 class="section__container__title d-inline-block px-2 mt-1">
                    <span class="section__container__title__span">
                        UI Designs
                    </span>
                </h1>

                <div class="masonry container">
        `
        let projects = '';

        for (var i = 0; i < projectsData.length; i++) {
            projects += `
                <figure id="picture-item"
                    class="picture-item show"
                    data-groups='["${projectsData[i].filterId}"]'>
                    <div class="picture-item__inner">
                        <a href="/ui-designs/${projectsData[i].id}">
                            <div class="box-thumb">
                                <p class="box-content d-inline">
                                    <span>
                                        ${projectsData[i].title}
                                    </span>
                                </p>
                                <img src="${projectsData[i].thumb}" data-img="${projectsData[i].url}"
                                    alt="${projectsData[i].title}" />
                            </div>
                        </a>
                    </div>
                </figure>
            `;
        }

        let endPage = /*html*/ `
            </div>
        </div>
        <div id="modalPicture" class="modal fade pr-0" tabindex="-1"
            role="dialog" aria-labelledby="modalPictureLabel" aria-hidden="true">
          <div class="modal-dialog m-0" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <img class="close__icon"
                    src="/assets/images/close-icon.svg" alt="Close icon">
                  <span class="sr-only">Close</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="position-relative">
                    <img class="js-modal-image js-graphics" src="" alt="" />
                    <div class="js-modal-content"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
        `
        return startPage + graphics + endGraphics + projects + endPage
    },
    after_render: async () => {
        // ScrollReveal animations
        ScrollReveal().reveal('.section__container p, .section__container__title, .caseStudy-thumb', {
            duration: 1500,
            scale: '.95',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            viewFactor: 0.3
        });

        // Illustrations gallery handler
        $(document).on('click', '.js-button--graphics', function() {
            var imageAlt = $(this).parents('.picture-item__inner').find('img').attr('alt');
            var imageSrc = $(this).parents('.picture-item__inner').find('img').attr('data-img');
            $('.js-modal-image').attr('src', imageSrc);
            $('.js-modal-image').attr('alt', imageAlt);
            $('.js-modal-content').text(imageAlt);
        });
    }
}

export default UiDesigns;
