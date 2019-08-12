let Error404 = {
    render : async () => {
        let view =  /*html*/`
        <div class="section text-center p-5">
            <h1>Whoops!</h1>
            <p>It looks like you've got lost!</p>
            <a href="#/" type="button" class="btn btn--contact">
                Go to Home
            </a>
        </div>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default Error404;
