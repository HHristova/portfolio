window.$ = window.jQuery = require('jquery');

let Header = {
    render: async () => {
        let view =  /*html*/`
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark container p-0">
                  <a class="navbar-brand ml-2 ml-sm-0" href="/">
                      <h1 class="logo mb-0"></h1>
                  </a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="main-nav">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link" data-url="" href="/">
                            About me<span class="sr-only">(current)</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-url="graphics-ui" href="/graphics-ui">Graphics & UI</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-url="illustrations" href="/illustrations">Illustrations</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-url="blog" href="/blog">Blog</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-url="shop" href="https://www.etsy.com/shop/CraftyBiscuits" target="_blank">Shop</a>
                      </li>
                    </ul>
                  </div>
                </nav>
            </header>
        `
        return view
    },
    after_render: async () => {
        let currentNav = '.nav-item .nav-link[href^="' + window.location.hash + '"]';

        $(window).scroll(function() {
           var hT = $('header').offset().top;
               if (hT > $('header').outerHeight()) {
                   $('header').addClass('header--top');
               } else {
                   $('header').removeClass('header--top');
               }
        });
    }
}

export default Header;
