/*
  eslint-disable no-unused-vars, no-alert, no-undef,no-underscore-dangle
*/

import Project from './project';
import Task from './task';

const initProjectStorage = () => {
  if (!localStorage.getItem('projects')) {
    const projects = [];
    const defaultProject = new Project('Example Project');
    const defaultTask = new Task('Example task', 'This is a default task', new Date(), 'High', false);
    defaultProject.addtask(defaultTask);
    projects.push(defaultProject);
    localStorage.setItem('projects', JSON.stringify(projects));
  }
};

const getProjects = () => {
  const projects = JSON.parse(localStorage.getItem('projects'));
  return projects;
};

const storeProject = (project) => {
  const projects = getProjects();
  projects.push(project);
  localStorage.setItem('projects', JSON.stringify(projects));
};

const updateProject = (project, position) => {
  const projects = getProjects();
  projects[position] = project;
  localStorage.setItem('projects', JSON.stringify(projects));
};

const countProjects = () => {
  const projects = getProjects();
  return projects.length;
};

const deleteProject = (position) => {
  const projects = getProjects();
  projects.splice(position, 1);
  localStorage.setItem('projects', JSON.stringify(projects));
};

export {
  initProjectStorage, getProjects, storeProject, countProjects, updateProject, deleteProject,
};
