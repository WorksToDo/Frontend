import { mount, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'
import TodoList from '~/components/TodoList.vue'
import mockStore from '~/store/mock/index'

Vue.use(Vuex)

describe('TodoList', () => {
  const store = {
    state: {},
    actions: {},
    mutations: {},
    getters: {
      'mock/getTodos': jest.fn()
    }
  }

  test('is a Vue instance', () => {
    const wrapper = mount(TodoList, {
      mocks: {
        $store: store
      }
    })
    expect(wrapper.vm).toBeTruthy()
    console.log(store.getters['mock/getTodos'])
  })

  test('is a todo list renders correctly?', () => {
    const wrapper = mount(TodoList, {
      store
    })
    const item0 = wrapper.find('#todo0')
    expect(item0).toBeTruthy()
  })
})
