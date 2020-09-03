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
import {initProjectStorage, getProjects, storeProject, updateProject} from './storage_module';

initProjectStorage();

let projects = getProjects();

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
        projects = getProjects();
        switchProject();
        addTaskEvent(projects.length - 1);
        addTaskUpdateEvent(projects.length - 1);
        addTaskDeletionEvent(projects.length - 1);
        addTaskStatusUpdateEvent(projects.length - 1);
        addProjectUpdateEvent(projects.length - 1);
    }else {
        alert('Please provide a name for the project');
    } 
}

const manageUpdateProjectForm = (position) => {
    let valid = handleProjectForm('project-update-form');
    if (valid){
        let project = projects[position];
        project._name = valid;
        updateProject(project, position);
        const maincontent = document.getElementById('container');
        const sidebar = document.getElementById('project-nav');
        centerContent.removeChild(maincontent);
        centerContent.removeChild(sidebar);
        centerContent.appendChild(sidebarDom(getProjects()))
        centerContent.appendChild(mainContentDom(project));
        switchProject();
        addTaskEvent(position);
        addTaskUpdateEvent(position);
        addTaskDeletionEvent(position);
        addTaskStatusUpdateEvent(position);
        addProjectUpdateEvent(position);
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
        addTaskEvent(position);
        addTaskUpdateEvent(position);
        addTaskDeletionEvent(position);
        addTaskStatusUpdateEvent(position);
        addProjectUpdateEvent(position);
    }else {
        alert('Please provide provide all task informations');
    } 
}

const manageUpdateTaskForm = (taskPos, projectPos) => {
    let valid = handleTaskForm('task-update-form');
    if (valid){
        console.log(valid)
        let project = projects[projectPos]
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
        switchProject();
        addTaskEvent(projectPos);
        addTaskUpdateEvent(projectPos);
        addTaskDeletionEvent(projectPos);
        addTaskStatusUpdateEvent(projectPos);
        addProjectUpdateEvent(projectPos);
    }else {
        alert('Please provide all task informations');
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
        mainContent.appendChild(loadTaskForm(position).mainHeader);
        mainContent.appendChild(loadTaskForm(position).form);
    
        const addTask = document.getElementById('addTask');
        addTask.addEventListener('click', () => manageTaskForm(position));
        
    })
} 
addTaskEvent(0);



const loadProject = (position) => {
    let mainContent = document.getElementById('container');
    centerContent.removeChild(mainContent);
    centerContent.appendChild(mainContentDom(projects[position]));
    addTaskEvent(position);
    addTaskDeletionEvent(position);
    addTaskUpdateEvent(position);
    addTaskStatusUpdateEvent(position);
    addProjectUpdateEvent(position);
}

const deleteTask = (taskPos, projectPos) => {
    let project = projects[projectPos];
    project._tasks.splice(taskPos, 1);
    updateProject(project, projectPos);
    const maincontent = document.getElementById('container');
    centerContent.removeChild(maincontent);
    centerContent.appendChild(mainContentDom(project));
    switchProject();
    addTaskDeletionEvent(projectPos);
    addTaskUpdateEvent(projectPos);
    addTaskEvent(projectPos);
    addTaskStatusUpdateEvent(projectPos);
    addProjectUpdateEvent(projectPos);
}

const addTaskDeletionEvent = (position) => {
    let project = projects[position];
    if(project._tasks.length > 0){ 
        const deleteButtons = document.querySelectorAll('#task-delete');
        deleteButtons.forEach(button => {
            let taskPosition = button.parentElement.parentElement.getAttribute('data-task');
            button.addEventListener('click', () => deleteTask(taskPosition, position));

        })
        
    }
}

const updateTask = (taskPos, projectPos) => {
    let project = projects[projectPos];
    let task = project._tasks[taskPos];
    const mainContent = document.getElementById('container');
    mainContent.innerHTML = '';
    mainContent.appendChild(loadTaskUpdateForm(projectPos, task).mainHeader);
    mainContent.appendChild(loadTaskUpdateForm(projectPos,task).form);

    const addTask = document.getElementById('updateTask');
    addTask.addEventListener('click', () => manageUpdateTaskForm(taskPos, projectPos));
        
}

const addTaskUpdateEvent = (position) => {
    let project = projects[position];
    if(project._tasks.length > 0){ 
        const updateButtons = document.querySelectorAll('#task-update');
        updateButtons.forEach(button => {
            let taskPosition = button.parentElement.parentElement.getAttribute('data-task');
            button.addEventListener('click', () => updateTask(taskPosition, position));

        })
        
    }
}

const updateTaskStatus = (taskPos, projectPos) => {
    let project = projects[projectPos];
    let task = project._tasks[taskPos];
    task._status = !task._status;
    project._tasks[taskPos] = task;
    updateProject(project, projectPos);
    const maincontent = document.getElementById('container');
    centerContent.removeChild(maincontent);
    centerContent.appendChild(mainContentDom(project));
    switchProject();
    addTaskDeletionEvent(projectPos);
    addTaskUpdateEvent(projectPos);
    addTaskEvent(projectPos);
    addTaskStatusUpdateEvent(projectPos);
    addProjectUpdateEvent(projectPos);
}

const addTaskStatusUpdateEvent = (position) => {
    let project = projects[position];
    if(project._tasks.length > 0){ 
        const statusButtons = document.querySelectorAll('#task-status');
        statusButtons.forEach(button => {
            let taskPosition = button.parentElement.parentElement.getAttribute('data-task');
            button.addEventListener('click', () => updateTaskStatus(taskPosition, position));

        })
        
    }
}

const updateCurrentProject = (position) => {
    let project = projects[position];
    const mainContent = document.getElementById('container');
    mainContent.innerHTML = '';
    mainContent.appendChild(loadProjectUpdateForm(project).mainHeader);
    mainContent.appendChild(loadProjectUpdateForm(project).form);

    const updTask = document.getElementById('updateProject');
    updTask.addEventListener('click', () => manageUpdateProjectForm(position));
        
}

const addProjectUpdateEvent = (position) => {
    let project = projects[position];
    let button = document.getElementById('update-project');
    button.addEventListener('click', () => updateCurrentProject(position));
}

addTaskDeletionEvent(0);
addTaskUpdateEvent(0);
addTaskStatusUpdateEvent(0);
addProjectUpdateEvent(0);



const switchProject = () => {
    const projectNav = document.querySelectorAll('.project');
    projectNav.forEach(element => {
        element.addEventListener('click', () => loadProject(element.getAttribute('data-position')))
    });
}

switchProject();








