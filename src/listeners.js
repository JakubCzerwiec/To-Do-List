import {drawProjects} from './projectOnScreen';
import {newTaskPopup} from './newTaskPopup';

// Listener for new Task in Projects


function listenerNewTask () {
    const addTaskBtn = document.querySelectorAll('.addTaskDiv');

    addTaskBtn.forEach((item, index) => {
        item.addEventListener('click', () => {

            const content = document.getElementById('content');

    
            const taskPopup = document.createElement('div');
            taskPopup.className = 'taskPopup';
            taskPopup.innerHTML = `<div class="newTaskPopup">
                                        <form class="newTask">
                                            <label >Title</label>
                                            <input type="text" id="titleTask" name="title" placeholder="Insert title" required>
              
                                            <label >Description</label>
                                            <input type="textarea" id="descriptionTask" name="description" rows="10" cols="50" required>
        
                                            <input type="submit" id="addTask" value="Create New Task">
        
        
        
                                        </form>
                                    </div>`;
        
            content.appendChild(taskPopup);
        
            const addNewTask = document.querySelector('.newTask');
            addNewTask.addEventListener('submit', (e) => {

                let newTaskTitle = document.getElementById('titleTask').value;
                let newTaskDes = document.getElementById('descriptionTask').value;

                let newTask = `${newTaskTitle} ${newTaskDes}`
                e.preventDefault();
                projects[index].tasks.push(newTask);
               
                content.removeChild(taskPopup);
                drawProjects ();
            });

            
            
        })
    })
}


export {listenerNewTask}