export class Task {
    constructor(title, description, dueDate, priority, status){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.status = status
    }

    get title() {
        return this.title
    }

    set title(value) {
        this.title = value
    }

    get description() {
        return this.description
    }

    set description(value) {
        this.description = value
    }

    get dueDate() {
        return this.dueDate
    }

    set dueDate(value) {
        this.dueDate = value
    }
    
    get priority() {
        return this.priority
    }

    set priority(value) {
        this.priority = value
    }
    
    get status() {
        return this.status
    }

    set status(value) {
        this.status = value
    }
}