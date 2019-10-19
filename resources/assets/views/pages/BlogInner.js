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
            </div>
        </div>
        `
        return blogPost + blogContent
    },
    after_render: async () => {}
}

export default BlogInner;
