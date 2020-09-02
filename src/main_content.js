const mainContentDom = (project) => {
    const mainContent = document.createElement('div');
    mainContent.className = 'main-content';
    mainContent.id = 'container';
    const mainHeader = document.createElement('div');
    mainHeader.className = 'header';

    const headerOne = document.createElement('h1');
    headerOne.innerText = project._name;
    const iconLink = document.createElement('a')
    const icon = document.createElement('i');
    icon.className = 'las la-pencil-alt';

    iconLink.appendChild(icon);
    mainHeader.appendChild(headerOne);
    mainHeader.appendChild(iconLink);
    mainContent.appendChild(mainHeader)

    const mainTask = document.createElement('div');
    mainTask.className = 'tasks';

    project._tasks.forEach(element => {
        let task = displayTask(element);
        mainTask.appendChild(task);
    });
    mainContent.appendChild(mainTask);

    const addTask = document.createElement('div')
    addTask.id = 'add-task'
    addTask.className = 'more-task';
    const addTaskLink = document.createElement('a')
    addTaskLink.innerHTML = `<i class="las la-plus"></i> Add Task`; 
    
    addTask.appendChild(addTaskLink);
    mainContent.appendChild(addTask);
    
    return mainContent;
};

const displayTask = (task) => {

    const subTask = document.createElement('div');
    subTask.className = 'task';

    const mainInfo = document.createElement('div');
    mainInfo.className = 'infos';
    const paragraph = document.createElement('p')
    paragraph.innerHTML = `<i class="lar la-circle"></i> ${task._title} `
    const priority = document.createElement('small');
    priority.innerText = task._priority;
    mainInfo.appendChild(paragraph);
    mainInfo.appendChild(priority);
    subTask.appendChild(mainInfo);

    const mainActions = document.createElement('div');
    mainActions.className = 'actions';
    const mainLink = document.createElement('a');
    const mainIcons = document.createElement('i');
    mainIcons.className = 'las la-check-circle';
    mainLink.appendChild(mainIcons);
    const mainLink2 = document.createElement('a');
    const mainIcons2 = document.createElement('i');
    mainIcons2.className = 'las la-trash';
    mainLink2.appendChild(mainIcons2);

    mainActions.appendChild(mainLink);
    mainActions.appendChild(mainLink2);
    subTask.appendChild(mainActions);

    return subTask;

}

export {mainContentDom};