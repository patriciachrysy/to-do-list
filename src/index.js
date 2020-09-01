import navBar from "./navbar";
import sideBar from "./sidebar";
import mainContent from "./main_content";

const nav = navBar;
const content = document.getElementById('content');
content.appendChild(nav);

const centerContent = document.createElement('div');
centerContent.className = 'center-content';
centerContent.appendChild(sideBar);
centerContent.appendChild(mainContent);
content.appendChild(centerContent);

