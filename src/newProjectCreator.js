
// Defining projects variable and some example projects
let projects = [{
    title: 'Example', 
    date: '12/03/2021', 
    priority: 'Medium', 
    description: 'Stuff to do', 
    tasks: ['Nothing for now', 'But soon something!']
    },
    {
    title: 'Example2', 
    date: '12/03/2021', 
    priority: 'Medium', 
    description: 'Stuff to do', 
    tasks: ['Something to do', 'Alleluja']
    }
];

// Projects factory function
const projectFactory = (title, date, priority, description, tasks) => {
    return {title, date, priority, description, tasks};
}

// Projects creator function
function newProjectCreator () {

        let projectTitle = document.getElementById('title').value;
        let projectDate = document.getElementById('date').value;
        let projectPriority = document.getElementById('priority').value;
        let projectDescription = document.getElementById('description').value;
        let projectTasks = [];

        let project = projectFactory(projectTitle, projectDate, projectPriority, projectDescription, projectTasks);

        projects.push(project);
        console.log(projects);

}

export {newProjectCreator};
export {projects};