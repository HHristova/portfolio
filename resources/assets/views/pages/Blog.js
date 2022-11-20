import BlogPostsData from '../../scripts/blogposts.json';
import ScrollReveal from 'scrollreveal'

let Blog = {
    render : async () => {
        let title =  /*html*/`
        <div class="main-header">
                <div class="hero-img hero-img--blog"></div>
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
                     <span class="d-block blog-summary">
                         ${BlogPostsData[i].summary}
                     </span>
                 </div>
              </div>
            `;
        }

        blogPosts += `
            </div>
        `

        return title + blogPosts
    },
    after_render: async () => {
        // ScrollReveal animations
        ScrollReveal().reveal('.section__container__title, .btn.btn--contact, .separator, .contact-img, .contact-me', {
            duration: 1500,
            scale: '.95',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            viewFactor: 0.4
        });

        var animatedElements = [
            'blog-item'
        ];

        for (var i = 0; i < animatedElements.length; i++) {
            if (document.querySelector('.' + animatedElements[i])) {
                ScrollReveal().reveal('.' + animatedElements[i], {
                    duration: 1700
                }, 200);
            }
        }
    }
}

export default Blog;
