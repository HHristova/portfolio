import Instafeed from 'instafeed.js'
import illustrationsData from '../../scripts/illustrations.json';
import illustrationsProjectsData from '../../scripts/illustrationProjects.json';
import ScrollReveal from 'scrollreveal'

let Illustrations = {
    render : async () => {
        let startPage =  /*html*/`
        <div class="main-header">
            <div class="hero-img hero-img--illustrations"></div>
        </div>
        <div class="section pt-3">
            <div class="section__container container text-center">
                <p class="max-chars mt-3 mb-4 px-2">
                    I really love drawing and here is the selection of my recent illustrations.🎨<br>
                    For more you can visit me on
                    <strong><a href="https://www.instagram.com/hristova.drawings/" target="_blank">instagram</a></strong>
                    or <strong><a href="https://dribbble.com/HHristova" target="_blank">dribbble</a></strong>.
                </p>
                <h1 class="section__container__title d-inline-block text-center mt-2 px-3">
                    <span class="section__container__title__span">What's new on Instagram</span>
                </h1>
                <div id="instafeed"></div>

                <div class="section__container__content ig-btn-wrapper">
                    <a href="https://www.instagram.com/hristova.drawings/" target="_blank" class="btn btn--secondary">
                        <i class="fab fa-instagram social-icons__inst" aria-hidden="true"></i> Follow me
                    </a>
                </div>

                <div class="separator"></div>

                <h1 class="section__container__title text-center d-inline-block">
                    <span class="section__container__title__span">
                        Illustration case studies
                    </span>
                </h1>

                <div class="mb-3 d-flex w-100 flex-wrap justify-content-around">`

        let illustrationFilteredPersonal = illustrationsProjectsData.filter(illustrationProject => illustrationProject.type == 'personal-project');

        let illustrationCaseStudyWrapper = `
            ${ illustrationFilteredPersonal
                .map(illustrationProject =>
                /*html*/`
            <div class="illustrationProject-item-sm mb-3">
                 <a href="/illustrations/${illustrationProject.id}"
                      class="box-thumb d-inline-block"
                      style="background-image: url('${illustrationProject.thumb}');">
                      <p class="box-content d-inline">
                          <span>
                              ${illustrationProject.titleThumb}
                          </span>
                      </p>
                 </a>
            </div>`).join('\n ')
        }
        `

        let proBonoProjectsHTML =  /*html*/`
                </div>
            </div>
            <div class="section mt-5 mt-lg-3">
                <div class="section__container container text-center">
                    <h1 class="section__container__title text-center d-inline-block">
                        <span class="section__container__title__span">
                            Pro bono projects
                        </span>
                    </h1>
                    <div class="d-flex w-100 flex-wrap justify-content-around">`

        let illustrationFilteredProBono = illustrationsProjectsData.filter(proBonoProject => proBonoProject.type == 'pro-bono');

        let proBonoProjects =  `
        ${ illustrationFilteredProBono
            .map(proBonoProject =>
            /*html*/`
            <div class="illustrationProject-item-sm mb-3">
                 <a href="/illustrations/${proBonoProject.id}"
                      class="box-thumb d-inline-block"
                      style="background-image: url('${proBonoProject.thumb}');">
                      <p class="box-content d-inline">
                          <span>
                              ${proBonoProject.titleThumb}
                          </span>
                      </p>
                 </a>
            </div>
            `).join('\n ')
        }
        `

        let afterProBonoProjects =  /*html*/`
                </div>
            </div>
        </div>

        <div class="section section__no_pb mt-5 mt-lg-3">
            <div class="section__container container text-center">
                <h1 class="section__container__title text-center d-inline-block">
                    <span class="section__container__title__span">
                        Illustrations
                    </span>
                </h1>
            </div>
        </div>
        <div class="masonry container">`

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
                            <p class="box-content d-inline px-3">
                                <span>
                                    ${illustrationsData[i].title}
                                </span>
                            </p>
                            <img src="${illustrationsData[i].thumb}" data-img="${illustrationsData[i].url}"
                                data-pin-description="${illustrationsData[i].title}"
                                data-pin-url="https://hhristova.com/illustrations"
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
                            src="/assets/images/close-icon.svg" alt="Close icon">
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
        </div>
        `
        return startPage + illustrationCaseStudyWrapper + afterProBonoProjects + projects + endPage
    },
    after_render: async () => {
        // ScrollReveal animations
        ScrollReveal().reveal('.section__container p, .section__container__title, .caseStudy-thumb, .illustrationProject-item', {
            duration: 1500,
            scale: '.95',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            viewFactor: 0.3
        });

        // Get latest IG posts
        var feed = new Instafeed({
          accessToken: 'IGQVJXY1piLTd5OG1GVWRGU1FXU2Q1Y3JkaGU2d3hJVGJrbXRydlZAMbkZAqQUZALZAUJCQWhuQ3V6TkMyQUJUalRrMEtYOWltalM2V3RHSWZAFYVZAnVGZAlTUdpc2hzZAWpFZAi1YalRpci1B',
          limit: 4,
          template: `
              <a href="{{link}}"><img title="{{caption}}" src="{{image}}" /><p>{{caption}}</p></a>
              `
        });
        feed.run();

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
