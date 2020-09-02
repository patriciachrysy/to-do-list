import {navbarDom} from "./navbar";
import {sidebarDom} from "./sidebar";
import {mainContentDom} from "./main_content";
import projectForm from './project_form';
import taskForm from './task_form';
import {handleProjectForm, handleTaskForm} from './form_handler';
import Project from './project';
import Task from './task'
import {initProjectStorage, getProjects, storeProject, updateProject} from './storage_module';

initProjectStorage();

const projects = getProjects();

const nav = navbarDom(projects.length);
const content = document.getElementById('content');
content.appendChild(nav);

const centerContent = document.createElement('div');
centerContent.id = 'center'
centerContent.className = 'center-content';
centerContent.appendChild(sidebarDom(projects));
centerContent.appendChild(mainContentDom(projects[0]));
content.appendChild(centerContent);

const addProjectForm = document.getElementById('addForm');


console.log(document.querySelectorAll('#add-task'))

const manageForm = () => {
    let valid = handleProjectForm('project-form');
    if (valid){
        let project = new Project(valid);
        storeProject(project);
        const maincontent = document.getElementById('container');
        const sidebar = document.getElementById('project-nav');
        centerContent.removeChild(maincontent);
        centerContent.removeChild(sidebar);
        centerContent.appendChild(sidebarDom(getProjects()))
        centerContent.appendChild(mainContentDom(project));
        switchProject();
    }else {
        alert('Please provide a name for the project');
    } 
}

const manageTaskForm = (position) => {
    let valid = handleTaskForm('task-form');
    if (valid){
        let task = new Task(valid.title, valid.description, valid.dueDate, valid.priority, false);
        let project = projects[position]
        project._tasks.push(task)
        updateProject(project, position)
        const maincontent = document.getElementById('container');
        centerContent.removeChild(maincontent);
        centerContent.appendChild(mainContentDom(project));
        switchProject();
    }else {
        alert('Please provide a name for the project');
    } 
}

addProjectForm.addEventListener('click', () => {
    const mainContent = document.getElementById('container');
    mainContent.innerHTML = '';
    mainContent.appendChild(projectForm.mainHeader);
    mainContent.appendChild(projectForm.form);

    const addProject = document.getElementById('addProject');
    addProject.addEventListener('click', manageForm);
    
})

const addTaskEvent = (position) => {
        const addTaskForm = document.getElementById('add-task')
        addTaskForm.addEventListener('click', () => {
        const mainContent = document.getElementById('container');
        mainContent.innerHTML = '';
        mainContent.appendChild(taskForm(position).mainHeader);
        mainContent.appendChild(taskForm(position).form);
    
        const addTask = document.getElementById('addTask');
        addTask.addEventListener('click', manageTaskForm);
        
    })
} 
addTaskEvent(0);



const loadProject = (position) => {
    console.log('About to load the project');
    let mainContent = document.getElementById('container');
    centerContent.removeChild(mainContent);
    centerContent.appendChild(mainContentDom(projects[position]));
    addTaskEvent(position);
}


const switchProject = () => {
    const projectNav = document.querySelectorAll('.project');
    console.log(projectNav);
    projectNav.forEach(element => {
        element.addEventListener('click', () => loadProject(element.getAttribute('data-position')))
    });
}

switchProject();








