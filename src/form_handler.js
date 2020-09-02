const handleProjectForm = (formId) => {
    const form = document.getElementById(formId);
    let info = null;
    if(form.elements.namedItem('name').value){
        info = form.elements.namedItem('name').value;
    }
    return info;
};

const handleTaskForm = (formId) => {
    const form = document.getElementById(formId);
    let info = null;
    let title = form.elements.namedItem('title').value
    let description = form.elements.namedItem('description').value
    let dueDate = form.elements.namedItem('dueDate').value
    let priority = form.elements.namedItem('priority').value
    
    if(title && description && dueDate && priority){
        info = {title, description, dueDate, priority};
    }
    return info;
};

export {handleProjectForm, handleTaskForm};
