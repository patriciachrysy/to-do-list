import {navbarDom} from "./navbar";
import {sidebarDom} from "./sidebar";
import {mainContentDom} from "./main_content";
import projectForm from './project_form';
import {loadProjectUpdateForm} from './project_update_form';
import {loadTaskForm} from './task_form';
import {handleProjectForm, handleTaskForm} from './form_handler';
import Project from './project';
import Task from './task'
import {loadTaskUpdateForm} from './task_update_form';
import {getProjects, storeProject, updateProject, deleteProject} from './storage_module';

const content = document.getElementById('content');
const centerContent = document.createElement('div');

const buildMainPage = (projects) => {
    const nav = navbarDom(projects.length);
    content.appendChild(nav);

    centerContent.id = 'center'
    centerContent.className = 'center-content';
    centerContent.appendChild(sidebarDom(projects));
    centerContent.appendChild(mainContentDom(projects[0]));
    content.appendChild(centerContent);
}

const loadEventListeners = (position) => {
    switchProject();
    addTaskEvent(position);
    addTaskUpdateEvent(position);
    addTaskDeletionEvent(position);
    addTaskStatusUpdateEvent(position);
    addProjectUpdateEvent(position);
    addProjectDeletionEvent(position);
}

const manageForm = (projects) => {
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
        projects = getProjects();
        loadEventListeners(projects.length - 1)
    }else {
        alert('Please provide a name for the project');
    } 
}

const addProjectManagement = (projects) => {
    const addProjectForm = document.getElementById('addForm');
    addProjectForm.addEventListener('click', () => {
        const mainContent = document.getElementById('container');
        mainContent.innerHTML = '';
        mainContent.appendChild(projectForm.mainHeader);
        mainContent.appendChild(projectForm.form);
    
        const addProject = document.getElementById('addProject');
        addProject.addEventListener('click', () => manageForm(projects));
        
    })
}

const loadProject = (position) => {
    let mainContent = document.getElementById('container');
    centerContent.removeChild(mainContent);
    centerContent.appendChild(mainContentDom(getProjects()[position]));
    loadEventListeners(position)
}

const switchProject = () => {
    const projectNav = document.querySelectorAll('.project');
    projectNav.forEach(element => {
        element.addEventListener('click', () => loadProject(element.getAttribute('data-position')))
    });
}

const manageTaskForm = (position) => {
    let valid = handleTaskForm('task-form');
    if (valid){
        let task = new Task(valid.title, valid.description, valid.dueDate, valid.priority, false);
        let project = getProjects()[position]
        project._tasks.push(task)
        updateProject(project, position)
        const maincontent = document.getElementById('container');
        centerContent.removeChild(maincontent);
        centerContent.appendChild(mainContentDom(project));
        loadEventListeners(position);
    }else {
        alert('Please provide provide all task informations');
    } 
}

const addTaskEvent = (position) => {
    const addTaskForm = document.getElementById('add-task')
    addTaskForm.addEventListener('click', () => {
        const mainContent = document.getElementById('container');
        mainContent.innerHTML = '';
        mainContent.appendChild(loadTaskForm(position).mainHeader);
        mainContent.appendChild(loadTaskForm(position).form);

        const addTask = document.getElementById('addTask');
        addTask.addEventListener('click', () => manageTaskForm(position));
        
    })
} 

const manageUpdateTaskForm = (taskPos, projectPos) => {
    let valid = handleTaskForm('task-update-form');
    if (valid){
        console.log(valid)
        let project = getProjects()[projectPos]
        let task = project._tasks[taskPos]
        task._title = valid.title
        task._description = valid.description
        task._dueDate = valid.dueDate
        task._priority = valid.priority
        project._tasks[taskPos] = task
        updateProject(project, projectPos)
        const maincontent = document.getElementById('container');
        centerContent.removeChild(maincontent);
        centerContent.appendChild(mainContentDom(project));
        loadEventListeners(projectPos)
    }else {
        alert('Please provide all task informations');
    } 
}

const updateTask = (taskPos, projectPos) => {
    let project = getProjects()[projectPos];
    let task = project._tasks[taskPos];
    const mainContent = document.getElementById('container');
    mainContent.innerHTML = '';
    mainContent.appendChild(loadTaskUpdateForm(projectPos, task).mainHeader);
    mainContent.appendChild(loadTaskUpdateForm(projectPos,task).form);

    const addTask = document.getElementById('updateTask');
    addTask.addEventListener('click', () => manageUpdateTaskForm(taskPos, projectPos));
        
}

const addTaskUpdateEvent = (position) => {
    let project = getProjects()[position];
    if(project._tasks.length > 0){ 
        const updateButtons = document.querySelectorAll('#task-update');
        updateButtons.forEach(button => {
            let taskPosition = button.parentElement.parentElement.getAttribute('data-task');
            button.addEventListener('click', () => updateTask(taskPosition, position));

        })
        
    }
}

const deleteTask = (taskPos, projectPos) => {
    let project = getProjects()[projectPos];
    project._tasks.splice(taskPos, 1);
    updateProject(project, projectPos);
    const maincontent = document.getElementById('container');
    centerContent.removeChild(maincontent);
    centerContent.appendChild(mainContentDom(project));
    loadEventListeners(projectPos);
}

const addTaskDeletionEvent = (position) => {
    let project = getProjects()[position];
    if(project._tasks.length > 0){ 
        const deleteButtons = document.querySelectorAll('#task-delete');
        deleteButtons.forEach(button => {
            let taskPosition = button.parentElement.parentElement.getAttribute('data-task');
            button.addEventListener('click', () => deleteTask(taskPosition, position));

        })
        
    }
}

const updateTaskStatus = (taskPos, projectPos) => {
    let project = getProjects()[projectPos];
    let task = project._tasks[taskPos];
    task._status = !task._status;
    project._tasks[taskPos] = task;
    updateProject(project, projectPos);
    const maincontent = document.getElementById('container');
    centerContent.removeChild(maincontent);
    centerContent.appendChild(mainContentDom(project));
    loadEventListeners(projectPos);
}

const addTaskStatusUpdateEvent = (position) => {
    let project = getProjects()[position];
    if(project._tasks.length > 0){ 
        const statusButtons = document.querySelectorAll('#task-status');
        statusButtons.forEach(button => {
            let taskPosition = button.parentElement.parentElement.getAttribute('data-task');
            button.addEventListener('click', () => updateTaskStatus(taskPosition, position));

        })
        
    }
}

const manageUpdateProjectForm = (position) => {
    let valid = handleProjectForm('project-update-form');
    if (valid){
        let project = getProjects()[position];
        project._name = valid;
        updateProject(project, position);
        const maincontent = document.getElementById('container');
        const sidebar = document.getElementById('project-nav');
        centerContent.removeChild(maincontent);
        centerContent.removeChild(sidebar);
        centerContent.appendChild(sidebarDom(getProjects()))
        centerContent.appendChild(mainContentDom(project));
        loadEventListeners(position)
    }else {
        alert('Please provide a name for the project');
    } 
}

const updateCurrentProject = (position) => {
    let project = getProjects()[position];
    const mainContent = document.getElementById('container');
    mainContent.innerHTML = '';
    mainContent.appendChild(loadProjectUpdateForm(project).mainHeader);
    mainContent.appendChild(loadProjectUpdateForm(project).form);

    const updTask = document.getElementById('updateProject');
    updTask.addEventListener('click', () => manageUpdateProjectForm(position));
        
}

const addProjectUpdateEvent = (position) => {
    let button = document.getElementById('update-project');
    button.addEventListener('click', () => updateCurrentProject(position));
}

const deleteCurrentProject = (projectPos) => {
    let project = getProjects()[projectPos];
    deleteProject(projectPos);
    let projects = getProjects();
    const maincontent = document.getElementById('container');
    const sidebar = document.getElementById('project-nav');
    centerContent.removeChild(maincontent);
    centerContent.removeChild(sidebar);
    centerContent.appendChild(sidebarDom(getProjects()))
    centerContent.appendChild(mainContentDom(projects[0]));
    loadEventListeners(0);
}



const addProjectDeletionEvent = (position) => {
    if(getProjects().length > 1){
        let button = document.getElementById('delete-project');
        button.addEventListener('click', () => deleteCurrentProject(position));
    }
    
}


export {content, centerContent, buildMainPage, addProjectManagement, loadEventListeners}