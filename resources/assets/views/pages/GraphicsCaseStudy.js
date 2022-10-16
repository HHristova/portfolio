import graphicDesignProjectsData from '../../scripts/graphicDesignProjects.json';
import ScrollReveal from 'scrollreveal'
import Utils from '../../scripts/services/Utils.js'

let GraphicsCaseStudy = {
    render : async () => {
        let request = Utils.parseRequestURL();

        let graphicDesignFiltered = graphicDesignProjectsData.filter(illustrationProject => illustrationProject.id == request.id);

        let startPage = /*html*/`
        ${ graphicDesignFiltered
            .map(illustrationProject =>
            /*html*/`
            <div class="IllustrationProject-wrapper mt-bg">
                <div class="item__content px-2 px-md-3">
                    <h2 class="section__container__title section__container__title--sm
                        d-block px-3">
                        <span class="section__container__title__span">
                            ${illustrationProject.title}
                        </span>
                    </h2>
                    <div class="max-chars m-0">
                        ${illustrationProject.intro}
                    </div>
                </div>
            </div>
            `).join('\n ')
        }
        `

        let sketchesLength = Object.keys(graphicDesignFiltered[0].sketches).length;
        let sketches = '';
        // Check if there are any sketches and then show this chunk of code
        if (sketchesLength != 0) {
            sketches = `
            <div class="item__content px-2 pb-lg-3">
                <div class="d-flex w-100 flex-wrap justify-content-between">`;
                for(var i = 0; i < sketchesLength; i++) {
                    sketches += `
                    <div class="illustrationProject-item${graphicDesignFiltered[0].width} mb-2">
                         <div class="js-button--illustrations box-thumb d-inline-block"
                             data-toggle="modal" data-target="#modalPicture"
                             value="Expand photo" role="button"
                             data-img="${graphicDesignFiltered[0].sketches['sketch'+i]}">
                                <img class="img-fluid" src="${graphicDesignFiltered[0].sketches['sketch'+i]}"
                                   alt="${graphicDesignFiltered[0].title}" />
                         </div>
                      </div>
                    `;
                }
            sketches +=  `
                </div>
            </div>
            `
        }

        let additionalContent = `
            <div class="item__content px-2 px-md-3 mb-3">
                <div class="max-chars m-0">
                    ${graphicDesignFiltered[0].additionalContent}
                </div>
            </div>
        `

        let finalArt = `
        <div class="item__content px-2">
            <div class="d-flex w-100 flex-wrap justify-content-between">`;
        let artLength = Object.keys(graphicDesignFiltered[0].artworks).length;
        for(var i = 0; i < artLength; i++) {
            finalArt += `
            <div class="illustrationProject-item mb-3">
                 <div class="js-button--illustrations box-thumb d-inline-block"
                     data-toggle="modal" data-target="#modalPicture"
                     value="Expand photo" role="button"
                     data-img="${graphicDesignFiltered[0].artworks['artwork'+i]}">
                        <img class="img-fluid" src="${graphicDesignFiltered[0].artworks['artwork'+i]}"
                           alt="${graphicDesignFiltered[0].title}" />
                 </div>
              </div>
            `;
        }
        finalArt += `
                <div class="d-flex mb-3" style="flex: 0 1 100%; flex-wrap: wrap; margin-left: 5px; margin-right: 5px;">
                    ${graphicDesignFiltered[0].reference}
                </div>
            </div>
        </div>
        `;

        let modals =  /*html*/`
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        `

        return startPage + sketches + additionalContent + finalArt + modals;
    },
    after_render: async () => {

        // Illustrations gallery handler
        $(document).on('click', '.js-button--illustrations', function() {
            var imageSrc = $(this).attr('data-img');
            $('.js-modal-image').attr('src', imageSrc);
        });
    }
}

export default GraphicsCaseStudy;
