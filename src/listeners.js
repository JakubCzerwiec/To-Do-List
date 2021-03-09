// Listener for new Task in Projects


function listenerNewTask () {
    const addTaskBtn = document.querySelectorAll('.addTaskDiv');
    
    addTaskBtn.forEach((item, index) => {
        item.addEventListener('click', () => {
            projects[index].tasks.push('1');
            
        })
    })
}


export {listenerNewTask}