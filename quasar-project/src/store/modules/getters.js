
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
export function tasksFiltered(state, getters) {
    let tasksSorted = getters.tasksSorted,
        tasksFiltered = {}
    if (state.search){
        Object.keys(tasksSorted).forEach(key => {
            let task = tasksSorted[key],
                taskNameLowerCase = task.name.toLowerCase(),
                searchLowerCase = state.search.toLowerCase()

            if (taskNameLowerCase.includes(searchLowerCase)){
                tasksFiltered[key] = task
            }
        });
        return tasksFiltered
    }
    return tasksSorted
}

export function tasksSorted(state) {
    let tasksSorted = {},
        keysOrdered = Object.keys(state.tasks)
    
    keysOrdered.sort((a,b) => {
        let taskAProp = state.tasks[a][state.sort].toLowerCase()
        let taskBProp = state.tasks[b][state.sort].toLowerCase()

        if (taskAProp > taskBProp) return 1
        else if  (taskAProp < taskBProp) return -1
        else return 0
    })

    keysOrdered.forEach(key => {
        tasksSorted[key] = state.tasks[key]
    })
    return tasksSorted
}