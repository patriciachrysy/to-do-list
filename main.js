!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=e=>{const t=document.createElement("div");t.id="project-nav",t.className="sidebar";const n=document.createElement("div");n.className="projects";const a=document.createElement("div");a.className="title";const c=document.createElement("h1");return c.innerText="My Projects",a.appendChild(c),n.appendChild(a),e.forEach(t=>{let a=document.createElement("div");a.setAttribute("data-position",e.indexOf(t)),a.className="project";let c=document.createElement("i");c.className="lar la-circle",a.appendChild(c);let d=document.createElement("h2");d.innerText=t._name,a.appendChild(d),n.appendChild(a)}),t.appendChild(n),t},c=e=>{const t=document.createElement("div");t.className="main-content",t.id="container";const n=document.createElement("div");n.className="header";const a=document.createElement("h1");a.innerText=e._name;const c=document.createElement("a"),r=document.createElement("i");r.className="las la-pencil-alt",c.appendChild(r),n.appendChild(a),n.appendChild(c),t.appendChild(n);const l=document.createElement("div");l.className="tasks",e._tasks.forEach(e=>{let t=d(e);l.appendChild(t)}),t.appendChild(l);const s=document.createElement("div");s.className="more-task";const o=document.createElement("a");return o.innerHTML='<i class="las la-plus"></i> Add Task',s.appendChild(o),t.appendChild(s),t},d=e=>{const t=document.createElement("div");t.className="task";const n=document.createElement("div");n.className="infos";const a=document.createElement("p");a.innerHTML=`<i class="lar la-circle"></i> ${e._title} `;const c=document.createElement("small");c.innerText=e._priority,n.appendChild(a),n.appendChild(c),t.appendChild(n);const d=document.createElement("div");d.className="actions";const r=document.createElement("a"),l=document.createElement("i");l.className="las la-check-circle",r.appendChild(l);const s=document.createElement("a"),o=document.createElement("i");return o.className="las la-trash",s.appendChild(o),d.appendChild(r),d.appendChild(s),t.appendChild(d),t};var r=(()=>{const e=document.createElement("div");e.className="header";const t=document.createElement("h1");t.innerText="Add a new project",e.appendChild(t);const n=document.createElement("form");n.id="project-form";const a=document.createElement("input");a.type="text",a.name="name",a.id="name",a.placeholder="Project name",n.appendChild(a);const c=document.createElement("input");return c.type="button",c.value="Create",c.id="addProject",n.appendChild(c),{mainHeader:e,form:n}})();var l=class{constructor(e){this.name=e,this.tasks=[]}get name(){return this._name}set name(e){this._name=e}get tasks(){return this._tasks}set tasks(e){this._tasks=e}addtask(e){this._tasks.push(e)}};var s=class{constructor(e,t,n,a,c){this.title=e,this.description=t,this.dueDate=n,this.priority=a,this.status=c}get title(){return this._title}set title(e){this._title=e}get description(){return this._description}set description(e){this._description=e}get dueDate(){return this._dueDate}set dueDate(e){this._dueDate=e}get priority(){return this._priority}set priority(e){this._priority=e}get status(){return this._status}set status(e){this._status=e}};const o=()=>JSON.parse(localStorage.getItem("projects"));(()=>{if(!localStorage.getItem("projects")){let e=new Array,t=new l("Example Project"),n=new s("Example task","This is a default task",new Date,"High",!1);t.addtask(n),e.push(t),localStorage.setItem("projects",JSON.stringify(e)),console.log(o())}})();const i=o(),m=(e=>{const t=document.createElement("div");t.className="nav-bar";const n=document.createElement("div");n.classList.add("logo"),t.appendChild(n);const a=document.createElement("div"),c=document.createElement("input");a.classList.add("search-bar"),c.id="search",c.type="search",c.name="search",c.placeholder="Search a project",a.appendChild(c),t.appendChild(a);const d=document.createElement("div");d.className="nav";const r=document.createElement("a");r.id="addForm";const l=document.createElement("i");l.className="las la-plus",r.appendChild(l),d.appendChild(r);const s=document.createElement("a"),o=document.createElement("i");o.className="las la-chart-pie",s.appendChild(o);const i=document.createElement("span");return i.innerText=" "+e,s.appendChild(i),d.appendChild(s),t.appendChild(d),t})(i.length),p=document.getElementById("content");p.appendChild(m);const u=document.createElement("div");u.id="center",u.className="center-content",u.appendChild(a(i)),u.appendChild(c(i[0])),p.appendChild(u);const h=document.getElementById("addForm"),E=()=>{let e=(e=>{const t=document.getElementById(e);let n=null;return t.elements.namedItem("name").value&&(n=t.elements.namedItem("name").value),n})("project-form");if(e){let t=new l(e);(e=>{let t=o();t.push(e),localStorage.setItem("projects",JSON.stringify(t)),console.log(o())})(t);const n=document.getElementById("container"),d=document.getElementById("project-nav");u.removeChild(n),u.removeChild(d),u.appendChild(a(o())),u.appendChild(c(t)),C()}else alert("Please provide a name for the project")};h.addEventListener("click",()=>{const e=document.getElementById("container");e.innerHTML="",e.appendChild(r.mainHeader),e.appendChild(r.form);document.getElementById("addProject").addEventListener("click",E)});const C=()=>{const e=document.querySelectorAll(".project");console.log(e),e.forEach(e=>{e.addEventListener("click",()=>(e=>{console.log("About to load the project");let t=document.getElementById("container");u.removeChild(t),u.appendChild(c(i[e]))})(e.getAttribute("data-position")))})};C()}]);