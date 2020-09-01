export const StorageModule = (() => {
    const initProjectStorage = () => {
        localStorage.setItem('projects', []);
    }

    const getProjects = () => {
        projects = JSON.parse(localStorage.getItem('projects'));
        return projects;
    }

    const storeProject = (project) => {
        let projects = getProjects();
        projects.push(project);
        localStorage.setItem(project, JSON.stringify(projects));
    }

})()