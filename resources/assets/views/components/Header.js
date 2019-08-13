window.$ = window.jQuery = require('jquery');

let Header = {
    render: async () => {
        let view =  /*html*/`
            <header>
                <nav class="navbar navbar-expand navbar-light container p-0">
                  <a class="navbar-brand ml-2 ml-sm-0" href="#/">
                      <h1 class="logo mb-0">
                          <img src="public/assets/images/logo-hhristova.png" />
                      </h1>
                  </a>

                  <div class="collapse navbar-collapse" id="main-nav">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link --about" href="#/">About <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link --work" href="#/work">Work</a>
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
    }
}

export default Header;
