import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal'

let About = {
    render : async () => {
        let view =  /*html*/`
            <div class="main-header">
                <div class="hero-img hero-img--about">
                    <p class="hero-img__subtitle text-center">
                        <span id="dynamic-content"></span>
                    </p>
                    <div class="btn-group dropup hero-dropdown">
                        <button class="btn btn-sm dropdown-toggle"
                            type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Change website season
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#" data-season="summer">
                                Summer <span>🌴</span>
                            </a>
                            <a class="dropdown-item" href="#" data-season="autumn">
                                Autumn <span>🍁</span>
                            </a>
                            <a class="dropdown-item" href="#" data-season="winter">
                                Winter <span>❄️</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="scroll-down d-none d-sm-block">
                    <div class="arrow"></div>
                </div>
            </div>

            <div class="section text-center container">
                <div class="section__container">
                    <h1 class="section__container__title d-inline-block text-center px-3">
                        <span class="section__container__title__span">About Me</span>
                    </h1>

                    <div class="about-me d-flex w-100">
                        <div class="about-me__image">
                            <img src="public/assets/images/hhristova-img.jpg" class="img-fluid"
                                alt="Hristina Hristova image"/>
                        </div>
                        <div class="about-me__content text-left">
                            👋 Hey there,
                            <br/>
                            My name is Hristina Hristova. I am a web designer and front-end dev
                            that creates wireframes for web apps and translate them to actual user-friendly
                            interfaces that people can understand and interact with.
                            <br>
                            For 5 years, I have worked on design websites and experiences that
                            simplify processes and optimize the use of different tools online.
                            <br><br>
                            During my day-to-day job I started more and more to sketch and draw
                            illustrations and different graphic elements that can help the overall
                            design concept. This is how I found my other passion - drawing.
                            Because of it I am studying my second master degree of illustration in
                            New Bulgarian University and I always strive for learning new things.
                            <br><br>
                            When away from the keyboard, I can be found at concerts,
                            riding a bicycle, snowboarding with a noisy speaker, among the shelves
                            of the bookstores or laughing out loud in the parks.
                            <br><br>
                            You can check <a href="#/work"><strong>my UI designs ✒️</strong></a> and
                            <a href="#/illustrations"><strong>my illustrations 🎨</strong></a>
                            or just say 'Hi' with the link below.
                        </div>
                    </div>

                    <h1 class="section__container__title d-inline-block text-center mt-5 px-3">
                        <span class="section__container__title__span">Things I do Well</span>
                    </h1>

                    <div class="d-flex flex-wrap mt-3">
                        <div class="flex-skills mx-md-3">
                            <div class="about-me__image about-me__image--width">
                                <img src="public/assets/images/web-design-front-end.jpg"
                                    class="img-fluid"
                                    alt="Web design and front-end development icon"/>
                            </div>
                            <div class="about-me__content about-me__content--weight mx-auto mt-3">
                                Web Design & Front-End
                            </div>
                            <p>
                                Most of the stuff I do are visual designs, but my front-end skills are also
                                sharp and up to date.
                            </p>
                        </div>
                        <div class="flex-skills mx-md-3 mt-5 mt-md-0">
                            <div class="about-me__image about-me__image--width">
                                <img src="public/assets/images/graphic-design.jpg" class="img-fluid"
                                    alt="Graphic design icon"/>
                            </div>
                            <div class="about-me__content about-me__content--weight mx-auto mt-3">
                                Graphic Design
                            </div>
                            <p>
                                I have some print design goodies under my belt.
                            </p>
                        </div>
                        <div class="flex-skills mx-md-3 mt-5 mt-md-0">
                            <div class="about-me__image about-me__image--width">
                                <img src="public/assets/images/illustrations.jpg" class="img-fluid"
                                    alt="Illustrations icon"/>
                            </div>
                            <div class="about-me__content about-me__content--weight mx-auto mt-3">
                                Illustrations
                            </div>
                            <p>
                                I also love working on whimsical illustrations
                                and cute characters.
                            </p>
                        </div>
                    </div>

                    <div class="separator"></div>

                    <h1 class="section__container__title d-inline-block px-3">
                        <span class="section__container__title__span">Get in touch</span>
                    </h1>
                    <div class="section__container__content">
                        <a href="mailto:hristina.a.hristova@gmail.com" type="button" class="btn btn--contact">
                            <i class="far fa-envelope" aria-hidden="true"></i> Message Me
                        </a>
                    </div>
                </div>
            </div>
        `
        return view
    }
    , after_render: async () => {
        // Typed.js homepage header initialisation
        const options = {
            strings: ['', 'web designer.', 'illustrator.', 'snowboarder.', 'snooker fan.'],
            typeSpeed: 30,
            backSpeed: 30,
            contentType: null,
            showCursor: true,
            loop: true
        }

        const typed = new Typed(document.getElementById("dynamic-content"), options);

        // ScrollReveal animations
        ScrollReveal().reveal('.section__container__title, .about-me, .section__container__content', {
            duration: 1500,
            scale: '.95',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            viewFactor: 0.4
        });

        var animatedElements = [
           'flex-skills'
        ];

        for (var i = 0; i < animatedElements.length; i++) {
            if (document.querySelector('.'+animatedElements[i])) {
                ScrollReveal().reveal('.'+animatedElements[i], { duration: 1700 }, 200);
            }
        }
    }

}

export default About;
