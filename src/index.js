import navBar from "./navbar";
import sideBar from "./sidebar";
import {mainContentDom} from "./main_content";
import projectForm from './project_form';
import {handleProjectForm} from './form_handler';
import Project from './project';
import {initProjectStorage, getProjects, storeProject} from './storage_module';

initProjectStorage();

const nav = navBar;
const content = document.getElementById('content');
content.appendChild(nav);

const centerContent = document.createElement('div');
centerContent.className = 'center-content';
centerContent.appendChild(sideBar);
const projects = getProjects();
centerContent.appendChild(mainContentDom(projects[0]));
content.appendChild(centerContent);

const addProjectForm = document.getElementById('addForm');

const manageForm = () => {
    let valid = handleProjectForm('project-form');
    if (valid){
        let project = new Project(valid);
        storeProject(project);
        const maincontent = document.getElementById('container');
        centerContent.removeChild(maincontent);
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






