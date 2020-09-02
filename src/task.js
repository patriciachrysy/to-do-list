class Task {
    constructor(title, description, dueDate, priority, status){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.status = status
    }

    get title() {
        return this._title
    }

    set title(value) {
        this._title = value
    }

    get description() {
        return this._description
    }

    set description(value) {
        this._description = value
    }

    get dueDate() {
        return this._dueDate
    }

    set dueDate(value) {
        this._dueDate = value
    }
    
    get priority() {
        return this._priority
    }

    set priority(value) {
        this._priority = value
    }
    
    get status() {
        return this._status
    }

    set status(value) {
        this._status = value
    }
}

export default Task;