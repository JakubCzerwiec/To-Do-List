import {projects} from './newProjectCreator';
import {newTaskPopup} from './newTaskPopup';


function drawProjects () {
    let projectsDiv = document.querySelector('.projects');
    projectsDiv.innerHTML = '';
    for (let i = 0; i < projects.length; i++) {


        let proj = document.createElement('div');
        proj.className = 'project';

        proj.innerHTML = `${projects[i].title}, ${projects[i].date}, ${projects[i].priority}, ${projects[i].description} <div class="addTask">Add Task</div>`

        projectsDiv.appendChild(proj);

    }

    const addTaskDiv = document.querySelectorAll('.addTask');

    addTaskDiv.forEach(btn => {
        btn.addEventListener('click', () => {
            newTaskPopup()
        })
    })


}

export {drawProjects}