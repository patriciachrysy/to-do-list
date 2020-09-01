import navBar from "./navbar";
import sideBar from "./sidebar";

const nav = navBar;
const content = document.getElementById('content');
content.appendChild(nav);

const centerContent = document.createElement('div');
centerContent.className = 'center-content';
centerContent.appendChild(sideBar);
content.appendChild(centerContent);