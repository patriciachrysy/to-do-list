const loadProjectUpdateForm = (project) => {

    const mainHeader = document.createElement('div');
    mainHeader.className = 'header';
    const headerOne = document.createElement('h1');
    headerOne.innerText = `Update "${project._name}"`;
    mainHeader.appendChild(headerOne);

    const form = document.createElement('form')
    form.id = 'project-update-form'
    const textFiled = document.createElement('input')
    textFiled.type = 'text'
    textFiled.name = 'name'
    textFiled.id = 'name'
    textFiled.value = project._name
    form.appendChild(textFiled)
    const subField = document.createElement('input')
    subField.type = 'button'
    subField.value = 'Save'
    subField.id = 'updateProject'
    form.appendChild(subField)


    return {mainHeader, form};

}
export {loadProjectUpdateForm};