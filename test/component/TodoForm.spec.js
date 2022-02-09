import { mount } from '@vue/test-utils'
import TodoForm from '~/components/TodoForm.vue'

describe('TodoForm', () => {
  it('renders correctly', () => {
    const wrapper = mount(TodoForm)
    expect(wrapper.vm).toBeTruthy()
  })
  it('todo input renders correctly', () => {
    const wrapper = mount(TodoForm)
    const todoInput = wrapper.find('#todo-input')
    expect(todoInput.attributes().placeholder).toEqual('Enter a todo...')
  })
  it('todo input connected to component data model successfully', () => {
    const todoText = 'buy some milk'
    const wrapper = mount(TodoForm)
    const todoInput = wrapper.find('#todo-input')
    todoInput.setValue(todoText)
    expect(wrapper.vm.$data.todoInp).toEqual(todoText)
  })
  it('calls save function on click to save button', async () => {
    const wrapper = mount(TodoForm)
    wrapper.setMethods({
      saveTodo: jest.fn()
    })
    await wrapper.find('#save-button').trigger('click')
    expect(wrapper.vm.saveTodo).toHaveBeenCalled()
  })
})
