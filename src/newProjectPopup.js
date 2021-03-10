import {newProjectCreator} from './newProjectCreator';
import {drawProjects} from './projectOnScreen';
import {listenerNewTask} from './listeners';

// Project popup
function newProjectPopup () {
    const content = document.getElementById('content');

    const projectPopup = document.createElement('div');
    projectPopup.className = 'projectPopup';
    projectPopup.innerHTML = `<div class="newProjectPopup">
                                <form class="newProject">
                                    <label >Title</label>
                                    <input type="text" id="title" name="title" placeholder="Insert title" required>

                                    <label >Date</label>
                                    <input type="text" id="date" name="date" placeholder="yyyy/mm/dd"  required>

                                    <label >Priority</label>
                                    <select name="priority" id="priority">
                                        <option disabled selected value>Choose priority</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>

                                    </select>

                                    <label >Description</label>
                                    <input type="textarea" id="description" name="description"  required>

                                    <input type="submit" id="add" value="Create New Project">

                                </form>
                            </div>`;

    content.appendChild(projectPopup);

    // Submit for new project
    const addNewProject = document.querySelector('.newProject');
    addNewProject.addEventListener('submit', (e) => {
        e.preventDefault();
        newProjectCreator();
        content.removeChild(projectPopup);
        drawProjects ();
        
    });

}

export {newProjectPopup}