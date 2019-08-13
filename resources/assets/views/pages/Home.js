import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal'

let Home = {
    render : async () => {
        let view =  /*html*/`
            <div class="main-header">
                <div class="hero-img hero-img--about">
                    <p class="hero-img__subtitle text-center">
                        <span id="dynamic-content"></span>
                    </p>
                </div>
            </div>

            <div class="section text-center container">
                <div class="section__container">
                    <h1 class="section__container__title d-inline-block text-center px-3">
                        <span class="section__container__title__span">About Me</span>
                    </h1>

                    <div class="about-me">
                        <div class="about-me__image">
                            <img src="public/assets/images/hhristova-img.jpg" class="img-responsive"
                                alt="Hristina Hristova image"/>
                        </div>
                        <div class="about-me__content">
                            Hey there,
                            <br/>
                            My name is Hristina Hristova. I am a web designer that creates
                            wireframes for web apps and translate them to actual user-friendly
                            interfaces that people can understand and interact with.
                            <br>
                            For 5 years, I have worked on design websites and experiences that
                            simplify processes and optimize the use of different tools online.
                            <br><br>
                            During my day-to-day job I started more and more to sketch and draw
                            illustrations and different graphic elements that can help the overall
                            design concept. This is how I found my other passion - drawing.
                            Because of it I am studying my second master degree of illustration in
                            New Bulgarian University and I am eager to learn more in this field.
                            <br><br>
                            When away from the keyboard, I can be found at concerts,
                            riding a bicycle, snowboarding with a noisy speaker, among the shelves
                            of the bookstores or laughing out loud in the parks.
                            <br><br>
                            You can check <a href="#/work"><strong>My work</strong></a> or just say 'Hi' with the link below.
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
    }

}

export default Home;
