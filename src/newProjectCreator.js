const projects = [];
const projectFactory = (title, date, priority, description) => {
    return {title, date, priority, description}
}

function newProjectCreator () {

        let projectTitle = document.getElementById('title').value;
        let projectDate = document.getElementById('date').value;
        let projectPriority = document.getElementById('priority').value;
        let projectDescription = document.getElementById('description').value;

        let project = projectFactory(projectTitle, projectDate, projectPriority, projectDescription);

        projects.push(project);
        console.log(projects);

}

export {newProjectCreator, projects}