import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import TodoList from '~/components/TodoList.vue'
// eslint-disable-next-line import/no-named-as-default
import API from '~/api/api'

jest.mock('~/api/api')

describe('TodoList', () => {
  test('it renders correctly', () => {
    const wrapper = mount(TodoList)
    expect(wrapper.vm).toBeTruthy()
  })
  test('list renders correctly', async () => {
    // const mockResponse = [
    //   {
    //     id: 1,
    //     todo: 'buy some milk'
    //   },
    //   {
    //     id: 2,
    //     todo: 'drink some milk'
    //   }
    // ]
    // API.getTodoList.mockResolvedValue(mockResponse)
    // const wrapper = mount(TodoList)
    // await flushPromises()
    // expect(wrapper.vm.todos).toEqual(mockResponse)
  })
  test('save button adds item correctly', () => {
    // const wrapper = mount(TodoList)
    // wrapper.setMethods({
    //   save: jest.fn()
    // })
    // const button = wrapper.find('#save-todo')

  })
})
