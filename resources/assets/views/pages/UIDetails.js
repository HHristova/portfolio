import projectsData from '../../scripts/projects.json';
import Utils from '../../scripts/services/Utils.js'

let UIDetails = {
    render : async () => {
        let request = Utils.parseRequestURL();
        return /*html*/`
        ${ projectsData
            .filter(project => project.id == request.id)
            .map(project =>
            /*html*/`
            <div class="content--custom">
                <article class="item item--current">
                    <div class="item__img" style="background-image: url(${project.url})"></div>
                    <div class="item__content">
                        <a class="item__content-back">back</a>
                        <h2 class="item__content-title">IO Donna</h2>
                        <h3 class="item__content-subtitle">Fashion artisans at work</h3>
                        <div class="item__content-text">
                            <p>Now, when anything attracted his attention he always asked what it meant; and his mother, or more frequently Uncle Maxim, would explain to him the nature of the objects or of the creatures that caused these various sounds.</p>
                            <p>His mother’s explanations, more lively and graphic, impressed the boy with greater force; but sometimes this impression would be too painful. </p>
                            <p>Upon the features of the young woman, herself suffering, could be read the expression of her inmost feelings, and in her eyes a silent protest or a look of pain, as she strove to convey to the child an idea of form and color.</p>
                        </div>
                    </div>
                </article>
            </div>`
            ).join('\n ')
        }
        `
    },
    after_render: async () => {}
}

export default UIDetails;
