import {renderLeyout} from './layout';
import {newProjectPopup} from './newProjectPopup';


import './style.css'



renderLeyout();

const plusBtn = document.querySelector('.plusBtn');

plusBtn.addEventListener('click', () => {
    newProjectPopup()
});

