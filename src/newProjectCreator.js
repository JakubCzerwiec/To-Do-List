function newProjectCreator () {
    const projectFactory = (title, date, priority, description) => {
        return {title, date, priority, description}
    }

    const  newProjectForm = document.querySelector('.newProject');

    newProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let projectTitle = document.getElementById('title').value;
        let projectDate = document.getElementById('date').value;
        let projectPriority = document.getElementById('priority');
        let projectDescription = document.getElementById('description');


        let project = projectFactory(projectTitle, projectDate, projectPriority, projectDescription);

        projects.push(project);
        console.log(projects)
    })
}

export {newProjectCreator}