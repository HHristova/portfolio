import projectsData from '../../scripts/uiprojects.json';

let UiCaseStudy = {
    // heading : async () => {
    //     let request = Utils.parseRequestURL();
    //     return newsData[request.id].title;
    // },
    headerBg : async () => {
        return '#98e6d1'
    },
    render : async () => {
        return /*html*/`
        <div class="caseStudy-wrapper mt-5">
            <img src="public/assets/images/myWork/case-studies/files/GT-casestudy-part1.jpg"
                class="img-fluid" alt="GoTenant Case Study Part 1">
            <img src="public/assets/images/myWork/case-studies/files/GT-casestudy-part2.jpg"
                class="img-fluid" alt="GoTenant Case Study Part 2">
            <img src="public/assets/images/myWork/case-studies/files/GT-casestudy-part3.jpg"
                class="img-fluid" alt="GoTenant Case Study Part 3">
            <img src="public/assets/images/myWork/case-studies/files/GT-casestudy-part4.jpg"
                class="img-fluid" alt="GoTenant Case Study Part 4">
            <img src="public/assets/images/myWork/case-studies/files/GT-casestudy-part5.jpg"
                class="img-fluid" alt="GoTenant Case Study Part 5">
        </div>
        `
    },
    after_render: async () => {}
}

export default UiCaseStudy;
