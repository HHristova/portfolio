let Error404 = {
    render : async () => {
        let view =  /*html*/`
        <div class="section section--blue text-center py-5 px-2 px-md-5">
            <div class="no-found-wrapper pt-md-3 mx-auto">
                <img src="/assets/images/404.jpg" alt="404 image" class="img-fluid" />
            </div>
            <h1>Whoops!</h1>
            <p>
                It looks like you've got lost!<br>
                But you can say 'Hi!' to Gennie the Fox!
                She is happy to meet you!
                😉🦊👋
            </p>
            <a href="/" type="button" class="btn btn--contact">
                Go to Homepage
            </a>
        </div>
        `
        return view
    },
    after_render: async () => {}
}

export default Error404;
