const loadProjectForm = () => {
  const mainHeader = document.createElement('div');
  mainHeader.className = 'header';
  const headerOne = document.createElement('h1');
  headerOne.innerText = 'Add a new project';
  mainHeader.appendChild(headerOne);

  const form = document.createElement('form');
  form.id = 'project-form';
  const textFiled = document.createElement('input');
  textFiled.type = 'text';
  textFiled.name = 'name';
  textFiled.id = 'name';
  textFiled.placeholder = 'Project name';
  form.appendChild(textFiled);
  const subField = document.createElement('input');
  subField.type = 'button';
  subField.value = 'Create';
  subField.id = 'addProject';
  form.appendChild(subField);


  return { mainHeader, form };
};
export default loadProjectForm();