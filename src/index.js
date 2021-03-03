import {renderLeyout} from './layout';
import {newProjectPopup} from './newProjectPopup';
import {projects} from './newProjectCreator';
import {drawProjects} from './projectOnScreen';


import './style.css'


renderLeyout();
drawProjects();


const plusBtn = document.querySelector('.plusBtn');

plusBtn.addEventListener('click', () => {
    newProjectPopup()
});

