import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal'

let About = {
    render: async () => {
        let view = /*html*/ `
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
                            <a class="dropdown-item" href="javascript:getDropdownSeason()" data-season="spring">
                                Spring <span>🌺</span>
                            </a>
                            <a class="dropdown-item" href="javascript:getDropdownSeason()" data-season="summer">
                                Summer <span>🌴</span>
                            </a>
                            <a class="dropdown-item" href="javascript:getDropdownSeason()" data-season="autumn">
                                Autumn <span>🍁</span>
                            </a>
                            <a class="dropdown-item" href="javascript:getDropdownSeason()" data-season="winter">
                                Winter <span>❄️</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="scroll-down d-none d-sm-block">
                    <div class="arrow"></div>
                </div>
            </div>

            <div class="section text-center container mt-4">
                <div class="section__container">
                    <h1 class="section__container__title d-inline-block text-center px-2">
                        <span class="section__container__title__span">About Me</span>
                    </h1>

                    <div class="about-me d-flex align-items-center w-100 mt-md-1">
                        <div class="about-me-wrapper">
                            <div class="about-me__image"></div>
                        </div>
                            <div class="about-me__content text-left mt-3 mt-lg-0 px-md-3 px-lg-0">
                            <p>
                                Hey, hey 👋,
                                <br>
                                I'm Hristina 👧 - a designer and an illustrator.
                                I’m an optimist, an environmentalist and I will be more things yet to come.
                                </p>
                                <p>
                                My graphic and web design side is all about creating visually appealing art pieces and user-friendly interfaces, while the illustration one is creating magical
                                drawings that make people smile. I really love poster designs, collages, typography, and basically everything that’s connected to visual communication and
                                I'm trying to spread dreams and happiness, one sketch at a time.💫
                            </p>
                            <p>
                                I'm also working on lots of music related design projects 🎶 and successfully combine two of my biggest passions - music and art. When I'm not glued to a canvas,
                                I can be found at concerts 🎸,
                                snowboarding with a noisy speaker 🏂, among the shelves
                                of the bookstores 📚 or laughing out loud in the parks 🏞️.
                            </p>
                            <p>
                                You can check <a href="/ui-graphics"><strong>my graphic design projects ✒️</strong></a> and
                                <a href="/illustrations"><strong>illustrations 🎨</strong></a>
                                or just <a href="mailto:hristina.a.hristova@gmail.com"><strong>say 'Hey!' 👋</strong></a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="colored-wrapper text-center">
                <h1 class="section__container__title d-inline-block text-center mt-5 px-2">
                    <span class="section__container__title__span">Things I do Well</span>
                </h1>

                <div class="d-flex flex-wrap mt-3">
                    <div class="flex-skills mx-md-3 mt-5 mt-md-0">
                        <div class="skills-image skills-image--width">
                            <img src="/assets/images/illustrations2.jpg" class="img-fluid"
                                alt="Illustrations icon"/>
                        </div>
                        <div class="about-me__content about-me__content--weight mx-auto mt-3">
                            Illustrations
                        </div>
                        <p>
                            I love drawing dreamy illustrations
                            and magical universes.
                        </p>
                    </div>
                    <div class="flex-skills mx-md-3 mt-5 mt-md-0">
                        <div class="skills-image skills-image--width">
                            <img src="/assets/images/graphic-design2.jpg" class="img-fluid"
                                alt="Graphic design icon"/>
                        </div>
                        <div class="about-me__content about-me__content--weight mx-auto mt-3">
                            Graphic Design
                        </div>
                        <p>
                            I have plenty of music related graphic designs under my belt.
                        </p>
                    </div>
                    <div class="flex-skills mx-md-3">
                        <div class="skills-image skills-image--width">
                            <img src="/assets/images/web-design-front-end2.jpg"
                                class="img-fluid"
                                alt="Web design and front-end development icon"/>
                        </div>
                        <div class="about-me__content about-me__content--weight mx-auto mt-3">
                            Web Design
                        </div>
                        <p>
                            The intersection of visual designs and user experience is one of my favourite places.
                        </p>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <h1 class="section__container__title d-inline-block text-center mt-5 px-2">
                    <span class="section__container__title__span">... And My Happy Clients</span>
                </h1>

                <div class="d-flex flex-wrap mt-3">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                    <div class="carousel-box">
                      <div class="carousel-content">
                        <i class="fas fa-quote-left quote" aria-hidden="true"></i><br>
                        Hristina is a talented artist, fast, flexible, and a good communicator. She has excelled at
                        designing the poster
                        and the tote bags for our first Erasmus+ training project in Bulgaria based on
                        our input and rough concepts. We and our participants have been really happy with the
                        quality of her work. We expect to do more projects with her in the future.
                      </div>
                      <div class="testimonial-client">
                        <a href="https://www.facebook.com/search/top?q=get%20on%20board" target="_blank">Non-goverment organisation "Get On Board"</a>
                        <img src="assets/images/testimonials/get-on-board.jpg" class="d-block" alt="...">
                      </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                    <div class="carousel-box">
                      <div class="carousel-content">
                        <i class="fas fa-quote-left quote" aria-hidden="true"></i><br>
                        Youth center Vratsa wants to express its gratitude to Hristina for volunteering to create the
                        visual identity of youth initiatives 'Create together'. She helped us to make our materials look much
                        more youth-friendly and, in this way, to attract more young people to participate in our initiatives.
                        Hristina is a real professional. We are excited to work with her.
                      </div>
                      <div class="testimonial-client">
                        <a href="https://www.facebook.com/youth.center.vratsa" target="_blank">Youth Center Vratsa</a>
                        <img src="assets/images/testimonials/youth-center.png" class="d-block" alt="...">
                      </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                    <div class="carousel-box">
                      <div class="carousel-content">
                        <i class="fas fa-quote-left quote" aria-hidden="true"></i><br>
                        Работихме с <a href="https://www.instagram.com/hristova.drawings/" target="_blank">@hristova.drawings</a> по няколко проекта,
                        предимно постери и сме възхитени! Отношението й към нас беше прекрасно, великолепно
                        се справи с всяко изискване и на всичкото отгоре: страстта й не затихна нито веднъж
                        по време на процеса! Сигурни сме, че и в бъдеще ще работим заедно!
                      </div>
                      <div class="testimonial-client">
                        <a href="https://www.facebook.com/kmediabulgaria" target="_blank">Продуцентска къща Кадърѣ Медия</a>
                        <img src="assets/images/testimonials/kmedia.jpg" class="d-block" alt="...">
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
        `
        return view
    },
    after_render: async () => {
        function getDropdownSeason(season) {
            document.body.className = '';
            document.body.classList.add('--' + this.getAttribute('data-season'));
            setCookie('season', this.getAttribute('data-season'));
        }

        // Typed.js homepage header initialisation
        const options = {
            strings: ['', 'Graphic and web designer.', 'Illustrator.', 'Music lover.', 'Snowboarder.', 'Snooker fan.'],
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
            if (document.querySelector('.' + animatedElements[i])) {
                ScrollReveal().reveal('.' + animatedElements[i], {
                    duration: 1700
                }, 200);
            }
        }
    }

}

export default About;

// <p>
//     For 5 years, I have worked on design websites, web apps and experiences that
//     simplify processes and optimize the use of different tools online.
// </p>
