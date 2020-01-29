import projectsData from '../../scripts/uiprojects.json';
import Utils from '../../scripts/services/Utils.js'

let UiProjectDetails = {
    render : async () => {
        let request = Utils.parseRequestURL();

        let projectFiltered = projectsData.filter(project => project.id == request.id);

        return /*html*/`
        ${ projectFiltered
            .map(project =>
            /*html*/`
            <div class="content--custom">
                <article class="item item--current">
                    <div class="item__content px-2 px-md-3">
                        <h2 class="section__container__title section__container__title--sm m-neg
                            d-inline-block px-3">
                            <span class="section__container__title__span">
                                ${project.title}
                            </span>
                        </h2>
                        <div class="js-button mb-4" data-toggle="modal" data-target="#modalPicture"
                            value="Expand photo" role="button">
                            <div class="item__img" style="background-image: url(${project.thumb})"
                                data-img="${project.url}" alt="${project.title}"></div>
                            <a href="" class="d-block text-center mt-2 open-gallery">
                                <small>View project in full size</small>
                            </a>
                        </div>
                        <div class="item__content-text max-chars">
                            ${project.content}
                            ${project.content2}
                        </div>
                    </div>
                </article>
            </div>

            <div id="modalPicture" class="modal fade pr-0" tabindex="-1"
                role="dialog" aria-labelledby="modalPictureLabel" aria-hidden="true">
              <div class="modal-dialog m-0" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <img class="close__icon"
                        src="/public/assets/images/close-icon.svg" alt="Close icon">
                      <span class="sr-only">Close</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <img class="js-modal-image" src="" alt="" />
                  </div>
                </div>
              </div>
            </div>`
            ).join('\n ')
        }
        `
    },
    after_render: async () => {
        // Projects gallery handler
        $(document).on('click', '.js-button', function() {
            var imageAlt = $(this).find('.item__img').attr('alt');
            var imageSrc = $(this).find('.item__img').attr('data-img');
            $('.js-modal-image').attr('src', imageSrc);
            $('.js-modal-image').attr('alt', imageAlt);
        });

        $(document).on('click', '.open-gallery', function(e) {
            e.preventDefault();
            $('.js-button').click();
        });
    }
}

export default UiProjectDetails;
