/*
  eslint-disable no-unused-vars, no-alert, no-undef,no-underscore-dangle
*/

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get tasks() {
    return this._tasks;
  }

  set tasks(tasks) {
    this._tasks = tasks;
  }

  addtask(task) {
    this._tasks.push(task);
  }
}

export default Project;