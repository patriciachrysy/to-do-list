const mainContentDom = () => {
    const mainContent = document.createElement('div');
    mainContent.className = 'main-content';
    mainContent.id = 'container';
    const mainHeader = document.createElement('div');
    mainHeader.className = 'header';

    const headerOne = document.createElement('h1');
    headerOne.innerText = 'Project 1';
    const iconLink = document.createElement('a')
    const icon = document.createElement('i');
    icon.className = 'las la-pencil-alt';

    iconLink.appendChild(icon);
    mainHeader.appendChild(headerOne);
    mainHeader.appendChild(iconLink);
    mainContent.appendChild(mainHeader)

    const mainTask = document.createElement('div');
    mainTask.className = 'tasks';
    const subTask = document.createElement('div');
    subTask.className = 'task';
    const mainInfo = document.createElement('div');
    mainInfo.className = 'infos';
    

    const paragraph = document.createElement('p')
    paragraph.innerHTML = `<i class="lar la-circle"></i> Return the book to library `
    const priority = document.createElement('small');
    priority.innerText = 'important';
    mainInfo.appendChild(paragraph);
    mainInfo.appendChild(priority);

    const mainActions = document.createElement('div');
    mainActions.className = 'actions';
    const mainLink = document.createElement('a');
    const mainIcons = document.createElement('i');
    mainIcons.className = 'las la-check-circle';



    const mainLink2 = document.createElement('a');
    const mainIcons2 = document.createElement('i');
    mainIcons2.className = 'las la-trash';

    const addTask = document.createElement('div')
    addTask.className = 'more-task';
    const addTaskLink = document.createElement('a')
    addTaskLink.innerHTML = `<i class="las la-plus"></i> Add Task`; 
    
    addTask.appendChild(addTaskLink);

    mainLink2.appendChild(mainIcons2);
    mainLink.appendChild(mainIcons);
    mainActions.appendChild(mainLink2)
    mainActions.appendChild(mainLink);
    subTask.appendChild(mainInfo);
    subTask.appendChild(mainActions);
    mainTask.appendChild(subTask);
    mainContent.appendChild(mainTask);
    mainContent.appendChild(addTask);
    
    return mainContent;
};

export default mainContentDom();