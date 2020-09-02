import Project from './project';
import Task from './task';

const initProjectStorage = () => {
    if(!localStorage.getItem('projects')){
        let projects = new Array;
        let defaultProject = new Project('Example Project');
        let defaultTask = new Task('Example task', 'This is a default task', new Date, 'High', false);
        defaultProject.addtask(defaultTask);
        projects.push(defaultProject);
        localStorage.setItem('projects', JSON.stringify(projects));
        console.log(getProjects());
    }
}

const getProjects = () => {
    let projects = JSON.parse(localStorage.getItem('projects'));
    return projects;
}

const storeProject = (project) => {
    let projects = getProjects();
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
    console.log(getProjects());
}

export {initProjectStorage, getProjects, storeProject};
