// For testing purposes only
const state = {

  tasks: {
    'ID1':{
      name: 'Go to shop',
      completed: false,
      dueDate: '2023/04/01',
      dueTime: '18:30'
    },
    'ID2':{
      name: 'Get bananas',
      completed: false,
      dueDate: '2023/04/01',
      dueTime: '18:30'
    },
    'ID3':{
      name: 'Get apples',
      completed: false,
      dueDate: '2023/04/01',
      dueTime: '18:30'
    },
    
  }
    // tasks: [
    //   {
    //     id: 1,
    //     name: 'Go to shop',
    //     completed: false,
    //     dueDate: '2023/04/01',
    //     dueTime: '18:30'
    //   },
    //   {
    //     id: 2,
    //     name: 'Get bananas',
    //     completed: false,
    //     dueDate: '2023/04/01',
    //     dueTime: '18:30'
    //   },
    //   {
    //     id: 3,
    //     name: 'Get apples',
    //     completed: false,
    //     dueDate: '2023/04/01',
    //     dueTime: '18:30'
    //   }
    // ]

}

const mutations = {
  updateTask (state, payload) {
    console.log('payload:', payload)
    Object.assign(state.tasks[payload.id], payload.updates)
}
}

const actions = {
  updateTask ({ commit }, payload) {
    console.log('Update Task action')
    console.log('Payload', payload)
    commit('updateTask', payload)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}