let Links = {
    render : async () => {
        let view =  /*html*/`
            <div class="main-header">
                <div class="hero-img hero-img--links"></div>
            </div>

            <div class="section text-center container mt-4">
                <div class="section__container">
                    <div class="d-flex flex-wrap link-wrapper mb-5">
                        <div class="link-wrapper__box">
                            <img src="/assets/images/links/work-with-me.jpg" class="img-fluid" />
                        </div>
                        <div class="link-wrapper__box p-3">
                            <p>
                                Do you have an upcoming web design or illustration project?
                            </p>
                            <a href="mailto:hristina.a.hristova@gmail.com" type="button" class="btn btn--contact">
                                Send me an email
                            </a>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap link-wrapper mb-5">
                        <div class="link-wrapper__box">
                            <img src="/assets/images/links/etsy.jpg" alt="CraftyBiscuits Etsy shop" class="img-fluid" />
                        </div>
                        <div class="link-wrapper__box p-3">
                            <p>
                                Check out my Etsy shop to see my latest goods.
                            </p>
                            <a href="https://www.etsy.com/shop/CraftyBiscuits" target="_blank" type="button" class="btn btn--contact">
                                Visit my shop
                            </a>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap link-wrapper mb-5">
                        <div class="link-wrapper__box">
                            <img src="/assets/images/links/youtube.jpg" alt="Hrisi Doodles youtube channel" class="img-fluid" />
                        </div>
                        <div class="link-wrapper__box p-3">
                            <p>
                                Visit my YouTube channel for drawing tutorials and freebies.
                            </p>
                            <a href="https://www.youtube.com/channel/UC9nWuqtJ3t2ypnRGFJRCMIw" target="_blank" type="button" class="btn btn--contact">
                                Visit me on Youtube
                            </a>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap link-wrapper mb-5">
                        <div class="link-wrapper__box">
                            <img src="/assets/images/links/about-me.jpg" class="img-fluid" />
                        </div>
                        <div class="link-wrapper__box p-3">
                            <p>
                                See my portfolio and learn more about me.
                            </p>
                            <a href="https://hhristova.com/" type="button" class="btn btn--contact">
                                Check out my site
                            </a>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap link-wrapper mb-5">
                        <div class="link-wrapper__box">
                            <img src="/assets/images/links/article.jpg" class="img-fluid" />
                        </div>
                        <div class="link-wrapper__box p-3">
                            <p>
                                Check out my blog post about finding inspirations for future projects.
                            </p>
                            <a href="https://hhristova.com/blog/finding-inspiration-for-future-projects" type="button" class="btn btn--contact">
                                Read the article
                            </a>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap link-wrapper">
                        <div class="link-wrapper__box">
                            <img src="/assets/images/links/podcast.jpg" class="img-fluid" />
                        </div>
                        <div class="link-wrapper__box p-3">
                            <p>
                                Listen to one of my favourite Perspective Collective podcast episodes with Lisa Congdon.
                            </p>
                            <a href="https://www.perspective-collective.com/153/" target="_blank" type="button" class="btn btn--contact">
                                Listen the episode
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `
        return view
    },
    after_render: async () => {}
}

export default Links;

// <p>
//     For 5 years, I have worked on design websites, web apps and experiences that
//     simplify processes and optimize the use of different tools online.
// </p>
