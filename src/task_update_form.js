/*
  eslint-disable no-unused-vars, no-alert, no-undef,
  no-underscore-dangle,import/prefer-default-export
*/

const loadTaskUpdateForm = (position, task) => {
  const mainHeader = document.createElement('div');
  mainHeader.className = 'header';
  const headerOne = document.createElement('h1');
  headerOne.innerText = `Edit ${task._title}`;
  mainHeader.appendChild(headerOne);

  const form = document.createElement('form');
  form.id = 'task-update-form';
  const textFiled = document.createElement('input');
  textFiled.type = 'text';
  textFiled.name = 'title';
  textFiled.id = 'title';
  textFiled.value = task._title;
  form.appendChild(textFiled);

  const textArea = document.createElement('input');
  textArea.cols = 30;
  textArea.rows = 10;
  textArea.name = 'description';
  textArea.value = task._description;
  form.appendChild(textArea);

  const dueDate = document.createElement('input');
  dueDate.type = 'date';
  dueDate.name = 'dueDate';
  dueDate.value = task._dueDate;
  form.appendChild(dueDate);

  const priority = document.createElement('select');
  priority.name = 'priority';
  priority.value = task._priority;
  const choices = ['High', 'Medium', 'Low'];
  choices.forEach(element => {
    const option = document.createElement('option');
    option.value = element;
    option.text = element;
    priority.appendChild(option);
  });
  form.appendChild(priority);

  const subField = document.createElement('input');
  subField.setAttribute('data-project', position);
  subField.type = 'button';
  subField.value = 'Save';
  subField.id = 'updateTask';
  form.appendChild(subField);


  return { mainHeader, form };
};
export { loadTaskUpdateForm };