import {projects} from './newProjectCreator';
import {newTaskPopup} from './newTaskPopup';


function drawProjects () {
    let projectsDiv = document.querySelector('.projects');
    projectsDiv.innerHTML = '';
    for (let i = 0; i < projects.length; i++) {

        // Project div
        let proj = document.createElement('div');
        proj.className = 'project';

        // Title div
        let projTitle = document.createElement('div');
        projTitle.className = 'projTitle';
        projTitle.innerHTML = `<p>Title:</p> ${projects[i].title}`;

        proj.appendChild(projTitle);

        // Date div
        let projDate = document.createElement('div');
        projDate.className = 'projDate';
        projDate.innerHTML = `<p>Date:</p> ${projects[i].date}`;

        proj.appendChild(projDate);

        // Priority div
        let projPriority = document.createElement('div');
        projPriority.className = 'projPriority';
        projPriority.innerHTML = `<p>Priority:</p> ${projects[i].priority}`;

        proj.appendChild(projPriority);

        // Description div
        let projDescr = document.createElement('div');
        projDescr.className = 'projDescr';
        projDescr.innerHTML = `<p>Description:</p> ${projects[i].description}`;

        proj.appendChild(projDescr);

        // Tasks div
        let projTasks = document.createElement('div');
        projTasks.className = 'projTasks';

        projTasks.innerHTML = `<p>Tasks:</p>`;

            for (let j = 0; j < projects[i].tasks.length; j++) {
                let task = document.createElement('div');
                task.className = 'task';
                task.innerHTML = `${projects[i].tasks[j]}`;
                projTasks.appendChild(task);
            }

        proj.appendChild(projTasks);


        // Add task button
        let addTaskDiv = document.createElement('div');
        addTaskDiv.className = 'addTaskDiv';
        addTaskDiv.innerText = 'Add Task';

        proj.appendChild(addTaskDiv);


        

        projectsDiv.appendChild(proj);

    }

    const addTaskDiv = document.querySelectorAll('.addTask');

   /* addTaskDiv.forEach(btn => {
        btn.addEventListener('click', () => {
            newTaskPopup()
        })
    })
    */

    addTaskDiv.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            projects[index].taskCreator;
        })
    })

}

export {drawProjects}