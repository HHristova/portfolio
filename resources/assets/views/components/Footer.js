import Instafeed from 'instafeed.js'
import ScrollReveal from 'scrollreveal'

let Footer = {
    render: async () => {
        let view =  /*html*/`
        <div class="cookie-consent bg-white shadow" id="cookie-consent"><span data-v-93de06f6="" class="cookie-consent__close text-black-light" id="cookie-close"></span>
        <span data-v-93de06f6="" class="text-10 font-medium tracking-2p2 leading-1 uppercase text-black-light d-block mb-2">I use cookies &amp; I hope it's ok 😊</span> <p data-v-93de06f6="" class="text-body text-grey-darkest mb-2">This website uses cookies to ensure you get the selected season experience all over the website.</p> <span data-v-93de06f6="" class="button -hollow w-full block cursor-pointer" id="cookieAgree">Got it!</span></div>

        <div class="section text-center container pt-0">
            <div class="section__container">

                <h1 class="section__container__title d-inline-block text-center mt-5 px-3">
                    <span class="section__container__title__span">What's new on Instagram</span>
                </h1>
                <div id="instafeed"></div>

                <div class="section__container__content ig-btn-wrapper">
                    <a href="https://www.instagram.com/hristova.drawings/" target="_blank" class="btn btn--secondary">
                        <i class="fab fa-instagram social-icons__inst" aria-hidden="true"></i> Follow me
                    </a>
                </div>

                <div class="separator"></div>

                <img src="/assets/images/footer-img1.png" class="img-fluid contact-img"
                    alt="Let's work together - contact me" />
                <div class="contact-me mb-4">
                    I’m available for commissions and collaborations.
                    <a href="mailto:hristina.a.hristova@gmail.com">Email me</a>
                    and I will get back to you. 😊
                </div>
                <div class="section__container__content">
                    <a href="mailto:hristina.a.hristova@gmail.com" class="btn btn--contact">
                        ✉️ Say hello!
                    </a>
                </div>
            </div>
        </div>

        <footer class="text-center">
            <p>Follow me:</p>
            <div class="copyright">
                <div class="social-icons">
                    <a href="https://www.instagram.com/hristova.drawings/" target="_blank">
                        <i class="fab fa-instagram social-icons__inst" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/hristina-hristova-design/" target="_blank">
                        <i class="fab fa-linkedin social-icons__bh" aria-hidden="true"></i>
                    </a>
                    <a href="https://dribbble.com/HHristova" target="_blank">
                        <i class="fab fa-dribbble social-icons__db" aria-hidden="true"></i>
                    </a>
                    <a href="https://github.com/HHristova" target="_blank">
                        <i class="fab fa-github social-icons__gh" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.etsy.com/shop/CraftyBiscuits" target="_blank">
                        <i class="fab fa-etsy social-icons__e" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="copyright__box">
                    © <span id="year"></span>
                    <a href="http://www.hhristova.com">Hristina Hristova</a>.
                    All rights reserved.
                </div>
                <small class="d-block pt-2">
                    <i>
                        Made with ♥️ and ♫ late in the evenings
                    </i>
                </small>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => {
        // Get current year and add it in the footer
        const currentYear = new Date().getFullYear();
        document.getElementById('year').innerHTML = currentYear;

        // Get latest IG posts
        var feed = new Instafeed({
          accessToken: 'IGQVJXY1piLTd5OG1GVWRGU1FXU2Q1Y3JkaGU2d3hJVGJrbXRydlZAMbkZAqQUZALZAUJCQWhuQ3V6TkMyQUJUalRrMEtYOWltalM2V3RHSWZAFYVZAnVGZAlTUdpc2hzZAWpFZAi1YalRpci1B',
          limit: 4,
          template: `
              <a href="{{link}}"><img title="{{caption}}" src="{{image}}" /><p>{{caption}}</p></a>
              `
        });
        feed.run();

        // ScrollReveal animations
        ScrollReveal().reveal('#instafeed', {
            duration: 1500,
            scale: '.95',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            viewFactor: 0.4
        });
    }
}

export default Footer;
