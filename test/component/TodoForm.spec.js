import { mount } from '@vue/test-utils'
import TodoForm from '~/components/TodoForm.vue'

describe('TodoForm', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TodoForm)
    expect(wrapper.vm).toBeTruthy()
  })

  test('is todo form valid', async () => {
    const wrapper = mount(TodoForm)
    const input = await wrapper.find('#todo-input')
    input.setValue('buy some milk')
    expect(input).toBeTruthy()
    expect(wrapper.vm.input).toBe('buy some milk')
  })

  test('is save button clickable', async () => {
    const wrapper = mount(TodoForm)
    const mockSave = jest.fn()

    wrapper.setMethods({
      saveTodo: mockSave
    })

    const button = wrapper.find('#save')
    await button.trigger('click')
    expect(mockSave).toHaveBeenCalled()
  })
})
