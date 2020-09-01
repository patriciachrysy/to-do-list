const initProjectStorage = () => {
    if(!localStorage.getItem('projects')){
        localStorage.setItem('projects', JSON.stringify([]));
    }
}

const getProjects = () => {
    projects = JSON.parse(localStorage.getItem('projects'));
    return projects;
}

const storeProject = (project) => {
    let projects = getProjects();
    projects.push(project);
    localStorage.setItem(project, JSON.stringify(projects));
    console.log(getProjects());
}

export {initProjectStorage, getProjects, storeProject};
