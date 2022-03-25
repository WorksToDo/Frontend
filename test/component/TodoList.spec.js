import { mount, createLocalVue } from '@vue/test-utils'
import TodoList from '~/components/TodoList.vue'

describe('TodoList', () => {
  test('it renders correctly', () => {
    const wrapper = mount(TodoList)
    expect(wrapper.vm).toBeTruthy()
  })
  test('list renders correctly', () => {
    const mockTodos = [{
      id: 1,
      task: 'buy some milk'
    }, {
      id: 2,
      task: 'drink some milk'
    }
    ]
    const localVue = createLocalVue()
    const wrapper = mount(TodoList, {
      localVue,
      propsData: {
        todos: mockTodos
      }
    })
    expect(wrapper.vm.todos).toHaveLength(mockTodos.length)
  })
})
