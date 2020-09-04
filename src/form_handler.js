/*
  eslint-disable no-unused-vars, no-alert, no-undef,no-underscore-dangle
*/

const handleProjectForm = (formId) => {
  const form = document.getElementById(formId);
  let info = null;
  if (form.elements.namedItem('name').value) {
    info = form.elements.namedItem('name').value;
  }
  return info;
};

const handleTaskForm = (formId) => {
  const form = document.getElementById(formId);
  let info = null;
  const title = form.elements.namedItem('title').value;
  const description = form.elements.namedItem('description').value;
  const dueDate = form.elements.namedItem('dueDate').value;
  const priority = form.elements.namedItem('priority').value;

  if (title && description && dueDate && priority) {
    info = {
      title, description, dueDate, priority,
    };
  }
  return info;
};

export { handleProjectForm, handleTaskForm };
