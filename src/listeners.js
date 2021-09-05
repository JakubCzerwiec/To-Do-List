import { projects } from './newProjectCreator';
import {drawProjects} from './projectOnScreen';


// Listener for new Task in Projects
function listenerNewTask () {
    const addTaskBtn = document.querySelectorAll('.addTaskDiv');

    // Listener for click -> new taks popup
    addTaskBtn.forEach((item, index) => {
        item.addEventListener('click', () => {

            const content = document.getElementById('content');

            // New taks popup
            const taskPopup = document.createElement('div');
            taskPopup.className = 'taskPopup';
            taskPopup.innerHTML = `<div class="newTaskPopup">
                                        <form class="newTask">
            
                                            <label >Description</label>
                                            <input type="textarea" id="descriptionTask" name="description" rows="10" cols="50" required>
        
                                            <input type="submit" id="addTask" value="Create New Task">
        
                                        </form>
                                    </div>`;
        
            content.appendChild(taskPopup);
            
            // Submit for new task
            const addNewTask = document.querySelector('.newTask');
            addNewTask.addEventListener('submit', (e) => {

                let newTaskDes = document.getElementById('descriptionTask').value;

                let newTask = `${newTaskDes}`;
                e.preventDefault();
                projects[index].tasks.push(newTask);
               
                content.removeChild(taskPopup);
                drawProjects ();
            });

            
        })
    })
}


function listenerDeleteTask () {
    const removeTask = document.querySelectorAll('.task__removeBtn');

    removeTask.forEach((item, index) => {
        item.addEventListener('click', () => {
            delete projects[index].tasks;
        })
    })
}


export {listenerNewTask};
export {listenerDeleteTask};