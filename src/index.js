import {navbarDom} from "./navbar";
import {sidebarDom} from "./sidebar";
import {mainContentDom} from "./main_content";
import projectForm from './project_form';
import {handleProjectForm} from './form_handler';
import Project from './project';
import {initProjectStorage, getProjects, storeProject} from './storage_module';

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

const loadProject = (position) => {
    let centerContent = document.getElementById('center');
    let mainContent = document.getElementById('container');
    centerContent.removeChild(mainContent);
    centerContent.appendChild(mainContentDom(projects[position]));
}




