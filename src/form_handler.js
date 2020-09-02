const handleProjectForm = (formId) => {
    const form = document.getElementById(formId);
    let info = null;
    if(form.elements.namedItem('name').value){
        info = form.elements.namedItem('name').value;
    }
    return info;
};

export {handleProjectForm};
