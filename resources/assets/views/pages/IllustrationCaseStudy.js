import illustrationsData from '../../scripts/illustrations.json';
import illustrationsProjectsData from '../../scripts/illustrationProjects.json';
import ScrollReveal from 'scrollreveal'
import Utils from '../../scripts/services/Utils.js'

let IllustrationCaseStudy = {
    render : async () => {
        let request = Utils.parseRequestURL();

        let illustrationFiltered = illustrationsProjectsData.filter(illustrationProject => illustrationProject.id == request.id);

        let startPage = /*html*/`
        ${ illustrationFiltered
            .map(illustrationProject =>
            /*html*/`
            <div class="IllustrationProject-wrapper mt-bg">
                <div class="item__content px-2 px-md-3">
                    <h2 class="section__container__title section__container__title--sm m-neg
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

        let sketchesLength = Object.keys(illustrationFiltered[0].sketches).length;
        let sketches = '';
        // Check if there are any sketches and then show this chunk of code
        if (sketchesLength != 0) {
            sketches = `
            <div class="item__content px-2 pb-lg-3">
                <div class="d-flex w-100 flex-wrap justify-content-between">`;
                for(var i = 0; i < sketchesLength; i++) {
                    sketches += `
                    <div class="illustrationProject-item mb-2">
                         <div class="js-button--illustrations box-thumb d-inline-block"
                             data-toggle="modal" data-target="#modalPicture"
                             value="Expand photo" role="button"
                             data-img="${illustrationFiltered[0].sketches['sketch'+i]}">
                                <img class="img-fluid" src="${illustrationFiltered[0].sketches['sketch'+i]}"
                                   alt="${illustrationFiltered[0].title}" />
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
                    ${illustrationFiltered[0].additionalContent}
                </div>
            </div>
        `

        let finalArt = `
        <div class="item__content px-2">
            <div class="d-flex w-100 flex-wrap justify-content-between">`;
        let artLength = Object.keys(illustrationFiltered[0].artworks).length;
        for(var i = 0; i < artLength; i++) {
            finalArt += `
            <div class="illustrationProject-item mb-3">
                 <div class="js-button--illustrations box-thumb d-inline-block"
                     data-toggle="modal" data-target="#modalPicture"
                     value="Expand photo" role="button"
                     data-img="${illustrationFiltered[0].artworks['artwork'+i]}">
                        <img class="img-fluid" src="${illustrationFiltered[0].artworks['artwork'+i]}"
                           alt="${illustrationFiltered[0].title}" />
                 </div>
              </div>
            `;
        }
        finalArt += `
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

export default IllustrationCaseStudy;

// DO NOT DELETE!
// {
//     "id": "book-cover-project",
//     "type": "personal-project",
//     "thumb": "/assets/images/myWork/illustrations/book-cover/book-cover-thumb.jpg",
//     "title": "Book cover design for Georgi Gospodinov's book 'The physics of sorrow'",
//     "titleThumb": "Book cover design",
//     "intro": "<p>Below can be seen the initial sketch of the book cover I've worked on, as well as the final piece. There are two color versions of it as well as the design of the inner pages.</p><p>The main aim of the cover design was to extract the main essence of the book into something simple and understandable for the customers.</p> <p>There are the two sketches I created for the book. The first one was too detailed and didn't answer the main question one book cover have to answer - What this book is about? That's why I tried another approach and I got rid of everything that is not directly pointing out the topic of the book and the final result is on the right side.</p>",
//     "sketches": {
//         "sketch0": "/assets/images/myWork/illustrations/book-cover/sketch-1.jpg",
//         "sketch1": "/assets/images/myWork/illustrations/book-cover/sketch-2.jpg"
//     },
//     "additionalContent": "Since the sketch was approved I did some additional tweaks and continued with creating the final artwork. The fly motive was incorporated for the inner front page of the book as well as the back side of it. The two color versions can be seen below.",
//     "artworks": {
//         "artwork0": "/assets/images/myWork/illustrations/book-cover/artwork1.jpg",
//         "artwork1": "/assets/images/myWork/illustrations/book-cover/artwork5.jpg",
//         "artwork2": "/assets/images/myWork/illustrations/book-cover/artwork3.jpg",
//         "artwork3": "/assets/images/myWork/illustrations/book-cover/artwork2.jpg",
//         "artwork4": "/assets/images/myWork/illustrations/book-cover/artwork4.jpg"
//     }
// },
