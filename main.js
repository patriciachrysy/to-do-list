!function(e){var t={};function n(a){if(t[a])return t[a].exports;var d=t[a]={i:a,l:!1,exports:{}};return e[a].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(a,d,function(t){return e[t]}.bind(null,d));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=class{constructor(e){this.name=e,this.tasks=[]}get name(){return this._name}set name(e){this._name=e}get tasks(){return this._tasks}set tasks(e){this._tasks=e}addtask(e){this._tasks.push(e)}};var d=class{constructor(e,t,n,a,d){this.title=e,this.description=t,this.dueDate=n,this.priority=a,this.status=d}get title(){return this._title}set title(e){this._title=e}get description(){return this._description}set description(e){this._description=e}get dueDate(){return this._dueDate}set dueDate(e){this._dueDate=e}get priority(){return this._priority}set priority(e){this._priority=e}get status(){return this._status}set status(e){this._status=e}};const l=()=>JSON.parse(localStorage.getItem("projects")),c=(e,t)=>{let n=l();n[t]=e,localStorage.setItem("projects",JSON.stringify(n))},r=e=>{const t=document.createElement("div");t.id="project-nav",t.className="sidebar";const n=document.createElement("div");n.className="projects";const a=document.createElement("div");a.className="title";const d=document.createElement("h1");return d.innerText="My Projects",a.appendChild(d),n.appendChild(a),e.forEach(t=>{let a=document.createElement("div");a.setAttribute("data-position",e.indexOf(t)),a.className="project";let d=document.createElement("i");d.className="lar la-circle",a.appendChild(d);let l=document.createElement("h2");l.innerText=t._name,a.appendChild(l),n.appendChild(a)}),t.appendChild(n),t},i=e=>{const t=document.createElement("div");t.className="main-content",t.id="container";const n=document.createElement("div");n.className="header";const a=document.createElement("h1");a.innerText=e._name;const d=document.createElement("div"),c=document.createElement("a");c.id="update-project";const r=document.createElement("i");if(r.className="las la-pencil-alt",l().length>1){const e=document.createElement("a");e.id="delete-project";const t=document.createElement("i");t.className="las la-trash",e.appendChild(t),d.appendChild(e)}c.appendChild(r),n.appendChild(a),d.appendChild(c),n.appendChild(d),t.appendChild(n);const i=document.createElement("div");i.className="tasks",e._tasks.forEach(t=>{let n=o(t,e._tasks.indexOf(t));i.appendChild(n)}),t.appendChild(i);const s=document.createElement("div");s.id="add-task",s.className="more-task";const m=document.createElement("a");return m.innerHTML='<i class="las la-plus"></i> Add Task',s.appendChild(m),t.appendChild(s),t},o=(e,t)=>{console.log(typeof e._dueDate);const n=document.createElement("div");e._status?n.className="task green-bg":new Date(e._dueDate)<new Date?n.className="task red-bg":n.className="task",n.setAttribute("data-task",t);const a=document.createElement("div");a.className="infos";const d=document.createElement("p");d.innerHTML=`<i class="lar la-circle"></i> ${e._title} `;const l=document.createElement("small");l.innerText=e._priority+" - Deadline: "+e._dueDate,a.appendChild(d),a.appendChild(l),n.appendChild(a);const c=document.createElement("div");c.className="actions";const r=document.createElement("a");r.id="task-update";const i=document.createElement("i");i.className="las la-pencil-alt",r.appendChild(i);const o=document.createElement("a");o.id="task-status";const s=document.createElement("i");e._status?s.className="las la-check-circle":s.className="las la-times-circle",o.appendChild(s);const m=document.createElement("a");m.id="task-delete";const p=document.createElement("i");return p.className="las la-trash",m.appendChild(p),c.appendChild(r),c.appendChild(o),c.appendChild(m),n.appendChild(c),n};var s=(()=>{const e=document.createElement("div");e.className="header";const t=document.createElement("h1");t.innerText="Add a new project",e.appendChild(t);const n=document.createElement("form");n.id="project-form";const a=document.createElement("input");a.type="text",a.name="name",a.id="name",a.placeholder="Project name",n.appendChild(a);const d=document.createElement("input");return d.type="button",d.value="Create",d.id="addProject",n.appendChild(d),{mainHeader:e,form:n}})();const m=e=>{const t=document.createElement("div");t.className="header";const n=document.createElement("h1");n.innerText=`Update "${e._name}"`,t.appendChild(n);const a=document.createElement("form");a.id="project-update-form";const d=document.createElement("input");d.type="text",d.name="name",d.id="name",d.value=e._name,a.appendChild(d);const l=document.createElement("input");return l.type="button",l.value="Save",l.id="updateProject",a.appendChild(l),{mainHeader:t,form:a}},p=e=>{const t=document.createElement("div");t.className="header";const n=document.createElement("h1");n.innerText="Add a new task",t.appendChild(n);const a=document.createElement("form");a.id="task-form";const d=document.createElement("input");d.type="text",d.name="title",d.id="title",d.placeholder="Task Title",a.appendChild(d);const l=document.createElement("input");l.cols=30,l.rows=10,l.name="description",l.placeholder="Enter Task Description",a.appendChild(l);const c=document.createElement("input");c.type="date",c.name="dueDate",c.placeholder="Task Due Date",a.appendChild(c);const r=document.createElement("select");r.name="priority",r.placeholder="Choose Priority";["High","Medium","Low"].forEach(e=>{const t=document.createElement("option");t.value=e,t.text=e,r.appendChild(t)}),a.appendChild(r);const i=document.createElement("input");return i.setAttribute("data-project",e),i.type="button",i.value="Create",i.id="addTask",a.appendChild(i),{mainHeader:t,form:a}},u=e=>{const t=document.getElementById(e);let n=null;return t.elements.namedItem("name").value&&(n=t.elements.namedItem("name").value),n},h=e=>{const t=document.getElementById(e);let n=null,a=t.elements.namedItem("title").value,d=t.elements.namedItem("description").value,l=t.elements.namedItem("dueDate").value,c=t.elements.namedItem("priority").value;return a&&d&&l&&c&&(n={title:a,description:d,dueDate:l,priority:c}),n},E=(e,t)=>{const n=document.createElement("div");n.className="header";const a=document.createElement("h1");a.innerText="Edit "+t._title,n.appendChild(a);const d=document.createElement("form");d.id="task-update-form";const l=document.createElement("input");l.type="text",l.name="title",l.id="title",l.value=t._title,d.appendChild(l);const c=document.createElement("input");c.cols=30,c.rows=10,c.name="description",c.value=t._description,d.appendChild(c);const r=document.createElement("input");r.type="date",r.name="dueDate",r.value=t._dueDate,d.appendChild(r);const i=document.createElement("select");i.name="priority",i.value=t._priority;["High","Medium","Low"].forEach(e=>{const t=document.createElement("option");t.value=e,t.text=e,i.appendChild(t)}),d.appendChild(i);const o=document.createElement("input");return o.setAttribute("data-project",e),o.type="button",o.value="Save",o.id="updateTask",d.appendChild(o),{mainHeader:n,form:d}},C=document.getElementById("content"),v=document.createElement("div"),f=e=>{g(),k(e),j(e),I(e),N(e),T(e),x(e)},y=e=>{let t=u("project-form");if(t){let n=new a(t);(e=>{let t=l();t.push(e),localStorage.setItem("projects",JSON.stringify(t)),console.log(l())})(n);const d=document.getElementById("container"),c=document.getElementById("project-nav");v.removeChild(d),v.removeChild(c),v.appendChild(r(l())),v.appendChild(i(n)),e=l(),f(e.length-1)}else alert("Please provide a name for the project")},g=()=>{document.querySelectorAll(".project").forEach(e=>{e.addEventListener("click",()=>(e=>{let t=document.getElementById("container");v.removeChild(t),v.appendChild(i(l()[e])),f(e)})(e.getAttribute("data-position")))})},k=e=>{document.getElementById("add-task").addEventListener("click",()=>{const t=document.getElementById("container");t.innerHTML="",t.appendChild(p(e).mainHeader),t.appendChild(p(e).form);document.getElementById("addTask").addEventListener("click",()=>(e=>{let t=h("task-form");if(t){let n=new d(t.title,t.description,t.dueDate,t.priority,!1),a=l()[e];a._tasks.push(n),c(a,e);const r=document.getElementById("container");v.removeChild(r),v.appendChild(i(a)),f(e)}else alert("Please provide provide all task informations")})(e))})},_=(e,t)=>{let n=l()[t]._tasks[e];const a=document.getElementById("container");a.innerHTML="",a.appendChild(E(t,n).mainHeader),a.appendChild(E(t,n).form);document.getElementById("updateTask").addEventListener("click",()=>((e,t)=>{let n=h("task-update-form");if(n){console.log(n);let a=l()[t],d=a._tasks[e];d._title=n.title,d._description=n.description,d._dueDate=n.dueDate,d._priority=n.priority,a._tasks[e]=d,c(a,t);const r=document.getElementById("container");v.removeChild(r),v.appendChild(i(a)),f(t)}else alert("Please provide all task informations")})(e,t))},j=e=>{if(l()[e]._tasks.length>0){document.querySelectorAll("#task-update").forEach(t=>{let n=t.parentElement.parentElement.getAttribute("data-task");t.addEventListener("click",()=>_(n,e))})}},I=e=>{if(l()[e]._tasks.length>0){document.querySelectorAll("#task-delete").forEach(t=>{let n=t.parentElement.parentElement.getAttribute("data-task");t.addEventListener("click",()=>((e,t)=>{let n=l()[t];n._tasks.splice(e,1),c(n,t);const a=document.getElementById("container");v.removeChild(a),v.appendChild(i(n)),f(t)})(n,e))})}},N=e=>{if(l()[e]._tasks.length>0){document.querySelectorAll("#task-status").forEach(t=>{let n=t.parentElement.parentElement.getAttribute("data-task");t.addEventListener("click",()=>((e,t)=>{let n=l()[t],a=n._tasks[e];a._status=!a._status,n._tasks[e]=a,c(n,t);const d=document.getElementById("container");v.removeChild(d),v.appendChild(i(n)),f(t)})(n,e))})}},b=e=>{let t=l()[e];const n=document.getElementById("container");n.innerHTML="",n.appendChild(m(t).mainHeader),n.appendChild(m(t).form);document.getElementById("updateProject").addEventListener("click",()=>(e=>{let t=u("project-update-form");if(t){let n=l()[e];n._name=t,c(n,e);const a=document.getElementById("container"),d=document.getElementById("project-nav");v.removeChild(a),v.removeChild(d),v.appendChild(r(l())),v.appendChild(i(n)),f(e)}else alert("Please provide a name for the project")})(e))},T=e=>{document.getElementById("update-project").addEventListener("click",()=>b(e))},B=e=>{l()[e];(e=>{let t=l();t.splice(e,1),localStorage.setItem("projects",JSON.stringify(t))})(e);let t=l();const n=document.getElementById("container"),a=document.getElementById("project-nav");v.removeChild(n),v.removeChild(a),v.appendChild(r(l())),v.appendChild(i(t[0])),f(0)},x=e=>{if(l().length>1){document.getElementById("delete-project").addEventListener("click",()=>B(e))}};var D;(()=>{if(!localStorage.getItem("projects")){let e=new Array,t=new a("Example Project"),n=new d("Example task","This is a default task",new Date,"High",!1);t.addtask(n),e.push(t),localStorage.setItem("projects",JSON.stringify(e)),console.log(l())}})(),(e=>{const t=(e=>{const t=document.createElement("div");t.className="nav-bar";const n=document.createElement("div");n.classList.add("logo"),t.appendChild(n);const a=document.createElement("div"),d=document.createElement("input");a.classList.add("search-bar"),d.id="search",d.type="search",d.name="search",d.placeholder="Search a project",a.appendChild(d),t.appendChild(a);const l=document.createElement("div");l.className="nav";const c=document.createElement("a");c.id="addForm";const r=document.createElement("i");r.className="las la-plus",c.appendChild(r),l.appendChild(c);const i=document.createElement("a"),o=document.createElement("i");o.className="las la-chart-pie",i.appendChild(o);const s=document.createElement("span");return s.innerText=" "+e,i.appendChild(s),l.appendChild(i),t.appendChild(l),t})(e.length);C.appendChild(t),v.id="center",v.className="center-content",v.appendChild(r(e)),v.appendChild(i(e[0])),C.appendChild(v)})(l()),D=l(),document.getElementById("addForm").addEventListener("click",()=>{const e=document.getElementById("container");e.innerHTML="",e.appendChild(s.mainHeader),e.appendChild(s.form),document.getElementById("addProject").addEventListener("click",()=>y(D))}),f(0)}]);