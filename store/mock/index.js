export const state = () => ({
  todos: [
    {
      id: 0,
      todo: 'buy some milk'
    },
    {
      id: 1,
      todo: 'buy some biscuit'
    },
    {
      id: 2,
      todo: 'buy some bread'
    }
  ]
})
export const mutations = {
  addTodo (state, todo) {
    if (todo != null) {
      state.todos.push(todo)
    }
  }
}
export const actions = {
  addTodo ({ commit }, newTodo) {
    commit('addTodo', newTodo)
  }
}
export const getters = {
  getTodos (state) {
    return state.todos
  }
}
