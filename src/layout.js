// Rendering starting page

function renderLeyout () {
    const content = document.getElementById('content');

    const header = document.createElement('h1');
    header.className = 'header';
    header.innerText = 'Stuff To Do!'
    content.appendChild(header);

    const plusBtn = document.createElement('div');
    plusBtn.className = 'plusBtn';
    plusBtn.innerText = '+';
    content.appendChild(plusBtn);

    const projects = document.createElement('div');
    projects.className = 'projects';
    content.appendChild(projects);

}

export {renderLeyout}

