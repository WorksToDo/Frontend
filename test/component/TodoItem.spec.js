import { mount } from '@vue/test-utils'
import TodoItem from '~/components/TodoItem.vue'

describe('TodoItem', () => {
  // it renders correctly with given props
  test('is renders correctly with given props', () => {
    const wrapper = mount(TodoItem, {
      propsData: {
        item: {
          id: 2,
          todo: 'buy some milk'
        }
      }
    })
    const listItem = wrapper.find('.todo-item')
    expect(listItem.text()).toContain('buy some milk')
  })
})
