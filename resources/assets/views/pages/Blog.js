'use strict';

import * as RequestService from '../../scripts/services/RequestService.js';

let Blog = {
    render : async () => {
        let title =  /*html*/`
            <div class="main-header">
                <div class="hero-img hero-img--blog"></div>
            </div>

        `;

        let blogPosts = `
            <div class="mb-3 d-flex container flex-wrap justify-content-between blog-flex">
        `;

        await RequestService.getBlogIndex().then((response) => {
            for (let i = response.data.length; i--;) {
                blogPosts += `
                <div class="blog-item d-flex align-items-center mb-3">
                     <a href="/blog/${response.data[i].id}"
                         class="box-thumb box-thumb--blog d-inline-block"
                         style="background-image: url('${response.data[i].thumb}');">
                     </a>
                     <div class="box-content p-4">
                         <a href="/blog/${response.data[i].id}">
                             <div class="blog-title pt-2">
                                 ${response.data[i].title}
                             </div>
                         </a>
                         <small class="blog-date">${response.data[i].date}</small>
                         <span class="d-block blog-summary">
                             ${response.data[i].summary}
                         </span>
                     </div>
                </div>
                `;
            }
        });

        blogPosts += `
            </div>
        `;

        return title + blogPosts
    },
    after_render: async () => {}
};

export default Blog;
