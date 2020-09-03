import { initProjectStorage, getProjects } from './storage_module';

import { buildMainPage, addProjectManagement, loadEventListeners } from './home_dom';

initProjectStorage();

buildMainPage(getProjects());

addProjectManagement(getProjects());

loadEventListeners(0);
