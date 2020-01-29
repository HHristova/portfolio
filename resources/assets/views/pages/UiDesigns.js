import projectsData from '../../scripts/uiprojects.json';
import ScrollReveal from 'scrollreveal'

let UiDesigns = {
    render : async () => {
        let startPage =  /*html*/`
        <div class="main-header">
            <div class="hero-img hero-img--work"></div>
        </div>

        <div class="section pt-4">
            <div class="section__container text-center">
                <p>
                    Here's a selection of some of my work.<br>
                    For more you can visit me on
                    <strong><a href="https://dribbble.com/HHristova" target="_blank">dribbble</a></strong>,
                    <strong><a href="https://www.behance.net/hhristova" target="_blank">behance</a></strong> or
                    <strong><a href="https://www.instagram.com/hhristova_/" target="_blank">instagram</a></strong>.
                </p>

                <h1 class="section__container__title text-center d-inline-block px-3">
                    <span class="section__container__title__span">
                        Case Studies
                    </span>
                </h1>

                <div class="mb-5">
                    <div class="grid-wrapper">
                        <div class="grid-item"></div>
                        <div class="grid-item">
                            <a href="ui-designs-case-study/go-tenant-design" class="box-thumb d-inline-block">
                                <p class="box-content d-inline">
                                    <span>
                                        GoTenant Design Case Study
                                    </span><br>
                                    <small>Design, Illustration</small>
                                </p>
                                <img src="/public/assets/images/myWork/case-studies/thumbs/GT-thumb.jpg"
                                    class="img-fluid" alt="GoTenant Case Study Thumbnail">
                            </a>
                        </div>
                    </div>
                </div>

                <h1 class="section__container__title d-inline-block px-3">
                    <span class="section__container__title__span">
                        UI Designs
                    </span>
                </h1>

                <div class="masonry">
        `
        let projects = '';

        for(var i = 0; i < projectsData.length; i++) {
            projects += `
                <figure id="picture-item"
                    class="picture-item show"
                    data-groups='["${projectsData[i].filterId}"]'>
                    <div class="picture-item__inner">
                        <a href="/ui-designs/${projectsData[i].id}">
                            <div class="box-thumb">
                                <p class="box-content d-inline">
                                    <span>
                                        ${projectsData[i].title}
                                    </span>
                                </p>
                                <img src="${projectsData[i].thumb}" data-img="${projectsData[i].url}"
                                    alt="${projectsData[i].title}" />
                            </div>
                        </a>
                    </div>
                </figure>
            `;
        }

        let endPage =  /*html*/`
            </div>

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
    </div>
        `
        return startPage + projects + endPage
    },
    after_render: async () => {
        // ScrollReveal animations
        ScrollReveal().reveal('.section__container p, .section__container__title, .caseStudy-thumb', {
            duration: 1500,
            scale: '.95',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            viewFactor: 0.3
        });
    }
}

export default UiDesigns;
