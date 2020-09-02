!function(e){var t={};function n(a){if(t[a])return t[a].exports;var d=t[a]={i:a,l:!1,exports:{}};return e[a].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(a,d,function(t){return e[t]}.bind(null,d));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=e=>{const t=document.createElement("div");t.id="project-nav",t.className="sidebar";const n=document.createElement("div");n.className="projects";const a=document.createElement("div");a.className="title";const d=document.createElement("h1");return d.innerText="My Projects",a.appendChild(d),n.appendChild(a),e.forEach(t=>{let a=document.createElement("div");a.setAttribute("data-position",e.indexOf(t)),a.className="project";let d=document.createElement("i");d.className="lar la-circle",a.appendChild(d);let c=document.createElement("h2");c.innerText=t._name,a.appendChild(c),n.appendChild(a)}),t.appendChild(n),t},d=e=>{const t=document.createElement("div");t.className="main-content",t.id="container";const n=document.createElement("div");n.className="header";const a=document.createElement("h1");a.innerText=e._name;const d=document.createElement("a"),l=document.createElement("i");l.className="las la-pencil-alt",d.appendChild(l),n.appendChild(a),n.appendChild(d),t.appendChild(n);const r=document.createElement("div");r.className="tasks",e._tasks.forEach(e=>{let t=c(e);r.appendChild(t)}),t.appendChild(r);const o=document.createElement("div");o.id="add-task",o.className="more-task";const s=document.createElement("a");return s.innerHTML='<i class="las la-plus"></i> Add Task',o.appendChild(s),t.appendChild(o),t},c=e=>{const t=document.createElement("div");t.className="task";const n=document.createElement("div");n.className="infos";const a=document.createElement("p");a.innerHTML=`<i class="lar la-circle"></i> ${e._title} `;const d=document.createElement("small");d.innerText=e._priority,n.appendChild(a),n.appendChild(d),t.appendChild(n);const c=document.createElement("div");c.className="actions";const l=document.createElement("a"),r=document.createElement("i");r.className="las la-check-circle",l.appendChild(r);const o=document.createElement("a"),s=document.createElement("i");return s.className="las la-trash",o.appendChild(s),c.appendChild(l),c.appendChild(o),t.appendChild(c),t};var l=(()=>{const e=document.createElement("div");e.className="header";const t=document.createElement("h1");t.innerText="Add a new project",e.appendChild(t);const n=document.createElement("form");n.id="project-form";const a=document.createElement("input");a.type="text",a.name="name",a.id="name",a.placeholder="Project name",n.appendChild(a);const d=document.createElement("input");return d.type="button",d.value="Create",d.id="addProject",n.appendChild(d),{mainHeader:e,form:n}})();var r=(e=>{const t=document.createElement("div");t.className="header";const n=document.createElement("h1");n.innerText="Add a new task",t.appendChild(n);const a=document.createElement("form");a.id="task-form";const d=document.createElement("input");d.type="text",d.name="title",d.id="title",d.placeholder="Task Title",a.appendChild(d);const c=document.createElement("input");c.cols=30,c.rows=10,c.name="description",c.placeholder="Enter Task Description",a.appendChild(c);const l=document.createElement("input");l.type="date",l.name="dueDate",l.placeholder="Task Due Date",a.appendChild(l);const r=document.createElement("select");r.name="priority",r.placeholder="Choose Priority";["High","Medium","Low"].forEach(e=>{const t=document.createElement("option");t.value=e,t.text=e,r.appendChild(t)}),a.appendChild(r);const o=document.createElement("input");return o.setAttribute("data-project",e),o.type="button",o.value="Create",o.id="addTask",a.appendChild(o),{mainHeader:t,form:a}})();var o=class{constructor(e){this.name=e,this.tasks=[]}get name(){return this._name}set name(e){this._name=e}get tasks(){return this._tasks}set tasks(e){this._tasks=e}addtask(e){this._tasks.push(e)}};var s=class{constructor(e,t,n,a,d){this.title=e,this.description=t,this.dueDate=n,this.priority=a,this.status=d}get title(){return this._title}set title(e){this._title=e}get description(){return this._description}set description(e){this._description=e}get dueDate(){return this._dueDate}set dueDate(e){this._dueDate=e}get priority(){return this._priority}set priority(e){this._priority=e}get status(){return this._status}set status(e){this._status=e}};const i=()=>JSON.parse(localStorage.getItem("projects"));(()=>{if(!localStorage.getItem("projects")){let e=new Array,t=new o("Example Project"),n=new s("Example task","This is a default task",new Date,"High",!1);t.addtask(n),e.push(t),localStorage.setItem("projects",JSON.stringify(e)),console.log(i())}})();const m=i(),p=(e=>{const t=document.createElement("div");t.className="nav-bar";const n=document.createElement("div");n.classList.add("logo"),t.appendChild(n);const a=document.createElement("div"),d=document.createElement("input");a.classList.add("search-bar"),d.id="search",d.type="search",d.name="search",d.placeholder="Search a project",a.appendChild(d),t.appendChild(a);const c=document.createElement("div");c.className="nav";const l=document.createElement("a");l.id="addForm";const r=document.createElement("i");r.className="las la-plus",l.appendChild(r),c.appendChild(l);const o=document.createElement("a"),s=document.createElement("i");s.className="las la-chart-pie",o.appendChild(s);const i=document.createElement("span");return i.innerText=" "+e,o.appendChild(i),c.appendChild(o),t.appendChild(c),t})(m.length),u=document.getElementById("content");u.appendChild(p);const h=document.createElement("div");h.id="center",h.className="center-content",h.appendChild(a(m)),h.appendChild(d(m[0])),u.appendChild(h);const E=document.getElementById("addForm");console.log(document.querySelectorAll("#add-task"));const C=()=>{let e=(e=>{const t=document.getElementById(e);let n=null;return t.elements.namedItem("name").value&&(n=t.elements.namedItem("name").value),n})("project-form");if(e){let t=new o(e);(e=>{let t=i();t.push(e),localStorage.setItem("projects",JSON.stringify(t)),console.log(i())})(t);const n=document.getElementById("container"),c=document.getElementById("project-nav");h.removeChild(n),h.removeChild(c),h.appendChild(a(i())),h.appendChild(d(t)),y()}else alert("Please provide a name for the project")},v=e=>{let t=(e=>{const t=document.getElementById(e);let n=null,a=t.elements.namedItem("title").value,d=t.elements.namedItem("description").value,c=t.elements.namedItem("dueDate").value,l=t.elements.namedItem("priority").value;return a&&d&&c&&l&&(n={title:a,description:d,dueDate:c,priority:l}),n})("task-form");if(t){let n=new s(t.title,t.description,t.dueDate,t.priority,!1),a=m[e];a._tasks.push(n),((e,t)=>{let n=i();n[t]=e,localStorage.setItem("projects",JSON.stringify(n))})(a,e);const c=document.getElementById("container");h.removeChild(c),h.appendChild(d(a)),y()}else alert("Please provide a name for the project")};E.addEventListener("click",()=>{const e=document.getElementById("container");e.innerHTML="",e.appendChild(l.mainHeader),e.appendChild(l.form);document.getElementById("addProject").addEventListener("click",C)});const f=e=>{document.getElementById("add-task").addEventListener("click",()=>{const t=document.getElementById("container");t.innerHTML="",t.appendChild(r(e).mainHeader),t.appendChild(r(e).form);document.getElementById("addTask").addEventListener("click",v)})};f(0);const y=()=>{const e=document.querySelectorAll(".project");console.log(e),e.forEach(e=>{e.addEventListener("click",()=>(e=>{console.log("About to load the project");let t=document.getElementById("container");h.removeChild(t),h.appendChild(d(m[e])),f(e)})(e.getAttribute("data-position")))})};y()}]);