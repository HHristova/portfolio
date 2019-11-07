import BlogPostsData from '../../scripts/blogposts.json';
import Utils from '../../scripts/services/Utils.js'

let BlogInner = {
    render : async () => {
        let request = Utils.parseRequestURL();
        let blogPost =  /*html*/`
        ${ BlogPostsData
            .filter(blogPost => blogPost.id == request.id)
            .map(blogPost =>
            /*html*/`
            <div class="IllustrationProject-wrapper mt-bg">
                <div class="item__content px-2 px-md-3">
                    <div class="max-chars blog-content">
                        <h2 class="section__container__title section__container__title--sm m-neg
                            d-inline-block px-3">
                            <span class="section__container__title__span">
                                ${blogPost.title}
                            </span>
                        </h2>
                        <img src="${blogPost.mainImage}" alt="${blogPost.title}" class="img-fluid" />
                        <small class="my-2 d-block"><i>${blogPost.mainImageCredit}</i></small>
                    </div>
            `).join('\n ')
        }
        `

        let blogContentLength = Object.keys(BlogPostsData[request.id].content).length;
        let blogContent = '';
        for(var i = 0; i < blogContentLength; i++) {
            blogContent += `
            <div class="max-chars blog-content">
                ${BlogPostsData[request.id].content['p'+i]}
            </div>
            `;
        }

        blogContent += `
                <a href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" data-pin-shape="round" data-pin-tall="true"></a>
            </div>
        </div>
        `

        let modals =  /*html*/`
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        `

        return blogPost + blogContent + modals
    },
    after_render: async () => {

        // Illustrations gallery handler
        $(document).on('click', '.js-button--blog', function() {
            var imageSrc = $(this).attr('data-img');
            $('.js-modal-image').attr('src', imageSrc);
        });
    }
}

export default BlogInner;
