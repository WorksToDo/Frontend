import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import TodoList from '~/components/TodoList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const mockTodoList = [{ id: 0, todo: 'buy some milk' }, { id: 1, todo: 'drink some milk' }]

describe('TodoList', () => {
  let store
  const state = {
    todos: mockTodoList
  }

  // eslint-disable-next-line prefer-const
  store = new Vuex.Store({
    state
  })

  test('is a Vue instance', () => {
    const wrapper = mount(TodoList)
    expect(wrapper.vm).toBeTruthy()
  })

  test('is a todo list renders correctly?', () => {
    const wrapper = shallowMount(TodoList, {
      store,
      localVue
    })
    const item0 = wrapper.find('#todo0')
    const item1 = wrapper.find('#todo1')

    expect(item0.innerHTML).toBe(store.state.todos[0].todo)
    expect(item1.innerHTML).toBe(store.state.todos[1].todo)
  })
})
