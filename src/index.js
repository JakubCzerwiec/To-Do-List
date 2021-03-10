import {renderLeyout} from './layout';
import {newProjectPopup} from './newProjectPopup';
import {projects} from './newProjectCreator';
import {drawProjects} from './projectOnScreen';
import {listenerNewTask} from './listeners';


import './style.css'


renderLeyout();
listenerNewTask();
drawProjects();


window['projects'] = projects;

const plusBtn = document.querySelector('.plusBtn');


// Listener for new Project
plusBtn.addEventListener('click', () => {
    newProjectPopup()
});




