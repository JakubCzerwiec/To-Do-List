import {projects} from './newProjectCreator';
import {listenerNewTask} from './listeners';

// Project rendering on screen
function drawProjects () {
    let projectsDiv = document.querySelector('.projects');
    projectsDiv.innerHTML = '';
    for (let i = 0; i < projects.length; i++) {

        // Single Project div
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

                // Iteration on task array
                for (let j = 0; j < projects[i].tasks.length; j++) {
                    let task = document.createElement('div');
                    task.className = 'task';
                    task.innerHTML = `${projects[i].tasks[j]} <input class="task__checkbox" type="checkbox"/> <div class="task__removeBtn"> X </div>`;
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
    // Listener for task button
    listenerNewTask();

}

export {drawProjects}