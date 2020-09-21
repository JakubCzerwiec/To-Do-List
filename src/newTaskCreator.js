const tasks = [];
const taskFactory = (title, date, priority, description) => {
    return {title, date, priority, description, tasks}
}

function newTaskCreator () {

        let taskTitle = document.getElementById('titleTask').value;
        let taskDate = document.getElementById('dateTask').value;
        let taskPriority = document.getElementById('priorityTask').value;
        let taskDescription = document.getElementById('descriptionTask').value;
        

        let task = taskFactory(taskTitle, taskDate, taskPriority, taskDescription);

        tasks.push(task);
        console.log(tasks)
}

export {newTaskCreator, tasks}