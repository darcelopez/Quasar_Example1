export function updateTask (state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
}
