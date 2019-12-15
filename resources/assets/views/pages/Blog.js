import BlogPostsData from '../../scripts/blogposts.json';

let Blog = {
    render : async () => {
        let title =  /*html*/`
        <div class="px-4 mt-bg">
            <div class="section__container text-center">
                <h1 class="section__container__title text-center d-inline-block px-3">
                    <span class="section__container__title__span">
                        Blog
                    </span>
                </h1>
            </div>
        </div>
        `

        let blogPosts = `
            <div class="mb-3 d-flex container flex-wrap justify-content-between blog-flex">
        `;

        for(var i = BlogPostsData.length; i--;) {
            blogPosts += `
            <div class="blog-item d-flex align-items-center mb-3">
                 <a href="/blog/${BlogPostsData[i].id}"
                     class="box-thumb box-thumb--blog d-inline-block"
                     style="background-image: url('${BlogPostsData[i].thumb}');">
                 </a>
                 <div class="box-content p-4">
                     <a href="/blog/${BlogPostsData[i].id}">
                         <div class="blog-title pt-2">
                             ${BlogPostsData[i].title}
                         </div>
                     </a>
                     <small class="blog-date">${BlogPostsData[i].date}</small>
                     <span class="d-block blog-summary">
                         ${BlogPostsData[i].summary}
                     </span>
                 </div>
              </div>
            `;
        }

        blogPosts += `
            </div>
            <div class="section__container text-center">
                <div class="separator"></div>

                <h1 class="section__container__title d-inline-block px-3">
                    <span class="section__container__title__span">Let's get in touch</span>
                </h1>
                <div class="section__container__content">
                    <a href="mailto:hristina.a.hristova@gmail.com" type="button" class="btn btn--contact">
                        ✉️ Say hello!
                    </a>
                </div>
            </div>
        `

        return title + blogPosts
    },
    after_render: async () => {}
}

export default Blog;
