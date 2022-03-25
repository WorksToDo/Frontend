import { mount, createLocalVue } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import index from '~/pages/index'
import API from '~/api/api'

jest.mock('~/api/api')

describe('Index View', () => {
  test('it renders correctly', () => {
    const localVue = createLocalVue()
    const wrapper = mount(index, localVue)
    expect(wrapper).toBeTruthy()
  })
  test('get todos on page mounted', async () => {
    const mockTodoData = [{
      id: 1,
      task: 'buy some milk'
    },
    {
      id: 2,
      task: 'drink some milk'
    }
    ]
    API.getTodoList.mockResolvedValue(mockTodoData)

    const localVue = createLocalVue()
    const wrapper = mount(index, localVue)
    await flushPromises()
    expect(wrapper.vm.$data.todos).toEqual(mockTodoData)
  })
})
