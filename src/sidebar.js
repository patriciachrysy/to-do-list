const sidebarDom = () => {
    const sideBar = document.createElement('div');
    sideBar.className = 'sidebar';
    const projects = document.createElement('div');
    projects.className = 'projects';
    const title = document.createElement('div');
    title.className = 'title';
    const titleHeader = document.createElement('h1');
    titleHeader.innerText = 'My Projects';
    title.appendChild(titleHeader);
    projects.appendChild(title);

    let i = 0;
    while (i < 3){
        let project = document.createElement('div');
        project.className = 'project';
        let icon = document.createElement('i');
        icon.className = 'lar la-circle';
        project.appendChild(icon);
        let projectHeader = document.createElement('h2');
        projectHeader.innerText = `Project ${i + 1}`;
        project.appendChild(projectHeader);
        projects.appendChild(project);
        i += 1;
    }
    sideBar.appendChild(projects);

    return sideBar;

};

export default sidebarDom();