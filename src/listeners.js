// Listener for new Task in Projects
const addTaskBtn = document.querySelectorAll('.addTaskDiv');

function listenerNewTask () {
    addTaskBtn.forEach((item, index) => {
        item.addEventListener('click', () => {
            projects[index].tasks.push('1');
            
        })
    })
}


export {listenerNewTask}