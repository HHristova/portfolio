let Footer = {
    render: async () => {
        let view =  /*html*/`
        <div class="section text-center container pt-0">
            <div class="section__container">
                <div class="separator"></div>

                <img src="/assets/images/footer-img.png" class="img-fluid contact-img"
                    alt="Let's work together - contact me" />
                <div class="contact-me mb-4">
                    I’m available for commissions and collaborations.
                    <a href="mailto:hristina.a.hristova@gmail.com">Email me</a>
                    and I will get back to you. I’m
                    looking forward to chatting with you about your future project!
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
                    <a href="https://dribbble.com/HHristova" target="_blank">
                        <i class="fab fa-dribbble social-icons__db" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.behance.net/hhristova" target="_blank">
                        <i class="fab fa-behance social-icons__bh" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/hristova.drawings/" target="_blank">
                        <i class="fab fa-instagram social-icons__inst" aria-hidden="true"></i>
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
                        Made with ♥️ late in the evenings
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
    }
}

export default Footer;
