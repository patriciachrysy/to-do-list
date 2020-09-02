const loadTaskForm = (position) => {

    const mainHeader = document.createElement('div');
    mainHeader.className = 'header';
    const headerOne = document.createElement('h1');
    headerOne.innerText = 'Add a new task';
    mainHeader.appendChild(headerOne);

    const form = document.createElement('form')
    form.id = 'task-form'
    const textFiled = document.createElement('input')
    textFiled.type = 'text'
    textFiled.name = 'title'
    textFiled.id = 'title'
    textFiled.placeholder = 'Task Title'
    form.appendChild(textFiled)

    const textArea = document.createElement('input');
    textArea.cols = 30
    textArea.rows = 10
    textArea.name = 'description'
    textArea.placeholder = 'Enter Task Description'
    form.appendChild(textArea)

    const dueDate = document.createElement('input');
    dueDate.type = 'date'
    dueDate.name = 'dueDate'
    dueDate.placeholder = 'Task Due Date'
    form.appendChild(dueDate);

    const priority = document.createElement('select')
    priority.name = 'priority'
    priority.placeholder = 'Choose Priority'
    let choices = ['High', 'Medium', 'Low'];
    choices.forEach(element => {
        const option = document.createElement('option')
        option.value = element
        option.text = element
        priority.appendChild(option);
    })
    form.appendChild(priority);

    const subField = document.createElement('input')
    subField.setAttribute('data-project', position)
    subField.type = 'button'
    subField.value = 'Create'
    subField.id = 'addTask'
    form.appendChild(subField)


    return {mainHeader, form};

}
export {loadTaskForm};