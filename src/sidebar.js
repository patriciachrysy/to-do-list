const sidebarDom = (allProjects) => {
    const sideBar = document.createElement('div');
    sideBar.id = 'project-nav'
    sideBar.className = 'sidebar';
    const projects = document.createElement('div');
    projects.className = 'projects';
    const title = document.createElement('div');
    title.className = 'title';
    const titleHeader = document.createElement('h1');
    titleHeader.innerText = 'My Projects';
    title.appendChild(titleHeader);
    projects.appendChild(title);

    allProjects.forEach(element => {
        let project = document.createElement('div');
        project.setAttribute('data-position', allProjects.indexOf(element))
        project.className = 'project';
        let icon = document.createElement('i');
        icon.className = 'lar la-circle';
        project.appendChild(icon);
        let projectHeader = document.createElement('h2');
        projectHeader.innerText = element._name;
        project.appendChild(projectHeader);
        projects.appendChild(project); 
    });

    sideBar.appendChild(projects);


    return sideBar;

};

export {sidebarDom};