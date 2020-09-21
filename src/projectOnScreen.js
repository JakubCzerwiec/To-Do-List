import {projects} from './newProjectCreator';

function drawProjects () {
    let projectsDiv = document.querySelector('.projects');
    projectsDiv.innerHTML = '';
    for (let i = 0; i < projects.length; i++) {


        let proj = document.createElement('div');
        proj.className = 'project';

        proj.innerHTML = `${projects[i].title}, ${projects[i].date}, ${projects[i].priority}, ${projects[i].description} `

        projectsDiv.appendChild(proj);
    }
}

export {drawProjects}