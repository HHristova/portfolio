import illustrationsData from '../../scripts/illustrations.json';
import illustrationsProjectsData from '../../scripts/illustrationProjects.json';
import ScrollReveal from 'scrollreveal'

let Illustrations = {
    render : async () => {
        let startPage =  /*html*/`
        <div class="main-header">
            <div class="hero-img hero-img--illustrations"></div>
        </div>
        <div class="section">
            <div class="section__container text-center">
                <p class="max-chars mb-4">
                    I really love designing illustrations and I would be happy to design your next one. 🙂<br>
                    Here is the selection of my recent drawings. <br>
                    For more you can visit me on
                    <strong><a href="https://dribbble.com/HHristova" target="_blank">dribbble</a></strong> or
                    <strong><a href="https://www.instagram.com/hhristova_/" target="_blank">instagram</a></strong>.
                </p>
                <h1 class="section__container__title text-center d-inline-block px-3">
                    <span class="section__container__title__span">
                        Case studies
                    </span>
                </h1>

                <div class="mb-3 d-flex w-100 flex-wrap justify-content-between">`

        let illustrationProjects = '';

        for(var i = 0; i < illustrationsProjectsData.length; i++) {
            illustrationProjects += `
            <div class="illustrationProject-item mb-3">
                 <a href="#/illustrationproject/${illustrationsProjectsData[i].id}"
                      class="box-thumb d-inline-block"
                      style="background-image: url('${illustrationsProjectsData[i].thumb}');">
                      <p class="box-content d-inline">
                          <span>
                              ${illustrationsProjectsData[i].titleThumb}
                          </span><br>
                          <small>Illustrations</small>
                      </p>
                  </a>
              </div>
            `;
        }

        let endProjectsHTML =  /*html*/`
            </div>
            <div class="section">
                <div class="section__container text-center">
                    <h1 class="section__container__title text-center d-inline-block px-3">
                        <span class="section__container__title__span">
                            Recent drawings
                        </span>
                    </h1>
                </div>
            </div>
            <div class="masonry">`

        let projects = '';

        for(var i = 0; i < illustrationsData.length; i++) {
            projects += `
                <figure id="picture-item"
                    class="picture-item show"
                    data-groups='["${illustrationsData[i].filterId}"]'>
                    <div class="picture-item__inner">
                        <div class="js-button--illustrations box-thumb"
                            data-toggle="modal" data-target="#modalPicture"
                            value="Expand photo" role="button">
                            <p class="box-content d-inline">
                                <span>
                                    ${illustrationsData[i].title}
                                </span>
                            </p>
                            <img src="${illustrationsData[i].thumb}" data-img="${illustrationsData[i].url}"
                                alt="${illustrationsData[i].title}" />
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
                        <div class="position-relative">
                            <img class="js-modal-image" src="" alt="" />
                            <div class="js-modal-content"></div>
                        </div>
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
        return startPage + illustrationProjects + endProjectsHTML + projects + endPage
    },
    after_render: async () => {
        // ScrollReveal animations
        ScrollReveal().reveal('.section__container p, .section__container__title, .caseStudy-thumb, .illustrationProject-item', {
            duration: 1500,
            scale: '.95',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            viewFactor: 0.3
        });

        // Illustrations gallery handler
        $(document).on('click', '.js-button--illustrations', function() {
            var imageAlt = $(this).parents('.picture-item__inner').find('img').attr('alt');
            var imageSrc = $(this).parents('.picture-item__inner').find('img').attr('data-img');
            $('.js-modal-image').attr('src', imageSrc);
            $('.js-modal-image').attr('alt', imageAlt);
            $('.js-modal-content').text(imageAlt);
        });
    }
}

export default Illustrations;
