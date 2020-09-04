/*
  eslint-disable no-unused-vars, no-alert, no-undef,
  no-underscore-dangle,import/prefer-default-export
*/

const sidebarDom = (allProjects) => {
  const sideBar = document.createElement('div');
  sideBar.id = 'project-nav';
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
    const project = document.createElement('div');
    project.setAttribute('data-position', allProjects.indexOf(element));
    project.className = 'project';
    const icon = document.createElement('i');
    icon.className = 'lar la-circle';
    project.appendChild(icon);
    const projectHeader = document.createElement('h2');
    projectHeader.innerText = element._name;
    project.appendChild(projectHeader);
    projects.appendChild(project);
  });

  sideBar.appendChild(projects);


  return sideBar;
};

export { sidebarDom };