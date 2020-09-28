

import {newTaskPopup} from './newTaskPopup';

const projects = [];
const projectFactory = (title, date, priority, description, tasks) => {
    return {title, date, priority, description, tasks};
}

function newProjectCreator () {

        let projectTitle = document.getElementById('title').value;
        let projectDate = document.getElementById('date').value;
        let projectPriority = document.getElementById('priority').value;
        let projectDescription = document.getElementById('description').value;
        let projectTasks = [];
        const taskCreator = newTaskPopup();

        let project = projectFactory(projectTitle, projectDate, projectPriority, projectDescription, projectTasks, taskCreator);

        projects.push(project);
        console.log(projects);

}

export {newProjectCreator, projects}