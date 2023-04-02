
export function tasksTodo(state) {
    let task2do = {}
    Object.keys(state.tasks).forEach(key => {
        let task = state.tasks[key]
        if (!task.completed){
            task2do[key] = task
        }
    });
    return task2do
}
export function tasksCompleted(state) {
    let taskCompleted = {}
    Object.keys(state.tasks).forEach(key => {
        let task = state.tasks[key]
        if (task.completed){
            taskCompleted[key] = task
        }
    });
    return taskCompleted
}