export class Project {
    constructor(name){
        this.name = name
        this.tasks = []
    }

    get name() {
        return this.name
    }

    set name(value) {
        this.name = value
    }

    get tasks() {
        return this.tasks
    }

    set tasks(task) {
        this.tasks.push(task)
    }
}