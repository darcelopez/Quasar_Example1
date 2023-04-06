
export function tasksTodo(state, getters) {
    let tasksFiltered = getters.tasksFiltered
    let task2do = {}
    Object.keys(tasksFiltered).forEach(key => {
        let task = tasksFiltered[key]
        if (!task.completed){
            task2do[key] = task
        }
    });
    return task2do
}
export function tasksCompleted(state, getters) {
    let tasksFiltered = getters.tasksFiltered
    let taskCompleted = {}
    Object.keys(tasksFiltered).forEach(key => {
        let task = tasksFiltered[key]
        if (task.completed){
            taskCompleted[key] = task
        }
    });
    return taskCompleted
}
export function tasksFiltered(state) {
    let tasksFiltered = {}
    if (state.search){
        Object.keys(state.tasks).forEach(key => {
            let task = state.tasks[key],
                taskNameLowerCase = task.name.toLowerCase(),
                searchLowerCase = state.search.toLowerCase()

            if (taskNameLowerCase.includes(searchLowerCase)){
                tasksFiltered[key] = task
            }
        });
        return tasksFiltered
    }
    return state.tasks
}