

import {newTaskCreator} from './newTaskCreator';


function newTaskPopup () {
    const content = document.getElementById('content');

    
    const taskPopup = document.createElement('div');
    taskPopup.className = 'taskPopup';
    taskPopup.innerHTML = `<div class="newTaskPopup">
                                <form class="newTask">
                                    <label >Title</label>
                                    <input type="text" id="titleTask" name="title" placeholder="Insert title" required>

                                    <label >Date</label>
                                    <input type="text" id="dateTask" name="date" placeholder="yyyy/mm/dd"  required>

                                    <label >Priority</label>
                                    <select name="priority" id="priorityTask">
                                        <option disabled selected value>Choose priority</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>

                                    </select>

                                    <label >Description</label>
                                    <input type="textarea" id="descriptionTask" name="description" rows="10" cols="50" required>

                                    <input type="submit" id="addTask" value="Create New Task">



                                </form>
                            </div>`;

    content.appendChild(taskPopup);

    const addNewTask = document.querySelector('.newTask');
    addNewTask.addEventListener('submit', (e) => {
        e.preventDefault();
        newTaskCreator();
        content.removeChild(taskPopup);
        
});

}

export {newTaskPopup}