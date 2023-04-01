export function updateTask (state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
}

export function deleteTask (state, payload) {
    console.log('Delete id=', payload)
    delete state.tasks[payload]
}
