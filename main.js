!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=(()=>{const e=document.createElement("div");e.className="nav-bar";const t=document.createElement("div");t.classList.add("logo"),e.appendChild(t);const n=document.createElement("div"),a=document.createElement("input");n.classList.add("search-bar"),a.id="search",a.type="search",a.name="search",a.placeholder="Search a project",n.appendChild(a),e.appendChild(n);const c=document.createElement("div");c.className="nav";const d=document.createElement("a");d.id="addForm";const l=document.createElement("i");l.className="las la-plus",d.appendChild(l),c.appendChild(d);const r=document.createElement("a"),o=document.createElement("i");o.className="las la-chart-pie",r.appendChild(o);const i=document.createElement("span");return i.innerText=10,r.appendChild(i),c.appendChild(r),e.appendChild(c),e})();var c=(()=>{const e=document.createElement("div");e.className="sidebar";const t=document.createElement("div");t.className="projects";const n=document.createElement("div");n.className="title";const a=document.createElement("h1");a.innerText="My Projects",n.appendChild(a),t.appendChild(n);let c=0;for(;c<3;){let e=document.createElement("div");e.className="project";let n=document.createElement("i");n.className="lar la-circle",e.appendChild(n);let a=document.createElement("h2");a.innerText="Project "+(c+1),e.appendChild(a),t.appendChild(e),c+=1}return e.appendChild(t),e})();var d=(()=>{const e=document.createElement("div");e.className="main-content",e.id="container";const t=document.createElement("div");t.className="header";const n=document.createElement("h1");n.innerText="Project 1";const a=document.createElement("a"),c=document.createElement("i");c.className="las la-pencil-alt",a.appendChild(c),t.appendChild(n),t.appendChild(a),e.appendChild(t);const d=document.createElement("div");d.className="tasks";const l=document.createElement("div");l.className="task";const r=document.createElement("div");r.className="infos";const o=document.createElement("p");o.innerHTML='<i class="lar la-circle"></i> Return the book to library ';const i=document.createElement("small");i.innerText="important",r.appendChild(o),r.appendChild(i);const s=document.createElement("div");s.className="actions";const m=document.createElement("a"),p=document.createElement("i");p.className="las la-check-circle";const u=document.createElement("a"),h=document.createElement("i");h.className="las la-trash";const E=document.createElement("div");E.className="more-task";const C=document.createElement("a");return C.innerHTML='<i class="las la-plus"></i> Add Task',E.appendChild(C),u.appendChild(h),m.appendChild(p),s.appendChild(u),s.appendChild(m),l.appendChild(r),l.appendChild(s),d.appendChild(l),e.appendChild(d),e.appendChild(E),e})();var l=(()=>{const e=document.createElement("div");e.className="header";const t=document.createElement("h1");t.innerText="Add a new project",e.appendChild(t);const n=document.createElement("form");n.id="project-form";const a=document.createElement("input");a.type="text",a.name="name",a.id="name",a.placeholder="Project name",n.appendChild(a);const c=document.createElement("input");return c.type="submit",c.value="Create",c.id="addProject",n.appendChild(c),{mainHeader:e,form:n}})();const r=()=>(projects=JSON.parse(localStorage.getItem("projects")),projects);localStorage.getItem("projects")||localStorage.setItem("projects",JSON.stringify([]));const o=a,i=document.getElementById("content");i.appendChild(o);const s=document.createElement("div");s.className="center-content",s.appendChild(c),s.appendChild(d),i.appendChild(s);document.getElementById("addForm").addEventListener("click",()=>{const e=document.getElementById("container");e.innerHTML="",e.appendChild(l.mainHeader),e.appendChild(l.form)});document.getElementById("addProject").addEventListener("click",()=>{let e=(void 0)("project-form");if(e){(e=>{let t=r();t.push(e),localStorage.setItem(e,JSON.stringify(t)),console.log(r())})(new(void 0)(e));document.getElementById("container").innerHTML="",s.appendChild(d)}else alert("Please provide a name for the project")})}]);