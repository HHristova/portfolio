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
                            <img src="/assets/images/links/etsy.jpg" class="img-fluid" />
                        </div>
                        <div class="link-wrapper__box p-3">
                            <p>
                                Checkout my Etsy shop to see my latest goods.
                            </p>
                            <a href="https://www.etsy.com/shop/CraftyBiscuits" target="_blank" type="button" class="btn btn--contact">
                                Visit my shop
                            </a>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap link-wrapper mb-5">
                        <div class="link-wrapper__box">
                            <img src="/assets/images/links/article.jpg" class="img-fluid" />
                        </div>
                        <div class="link-wrapper__box p-3">
                            <p>
                                Check out the blog post I wrote about finding inspirations for future projects.
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
