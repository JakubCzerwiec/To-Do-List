import {renderLeyout} from './layout';
import {newProjectPopup} from './newProjectPopup';

import './style.css'

const projects = [];
renderLeyout();

const plusBtn = document.querySelector('.plusBtn');


plusBtn.addEventListener('click', () => {
    newProjectPopup()
})