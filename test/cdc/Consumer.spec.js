import { pactWith } from 'jest-pact'
// eslint-disable-next-line import/named
import { Matchers } from '@pact-foundation/pact'
import { API } from '~/api/api.js'
const { eachLike, like } = Matchers

const todoRequest = {
  id: 0,
  task: 'buy some milk'
}

pactWith({ consumer: 'todo-frontend', provider: 'todo-backend', pactfileWriteMode: 'overwrite', cors: true, spec: 2 }, (provider) => {
  describe('Todos', () => {
    let client
    beforeEach(() => {
      client = new API(provider.mockService.baseUrl)
    })
    test('Get Todos', async () => {
      await provider.addInteraction({
        state: 'all todos successfully',
        uponReceiving: 'GET todos request',
        withRequest: {
          path: '/todos',
          method: 'GET'
        },
        willRespondWith: {
          headers: { 'Content-Type': 'application/json' },
          status: 200,
          body: eachLike(todoRequest)
        }
      })
      await client.getTodoList()
    })
    test('Post Todo', async () => {
      const postTodoRequest = {
        task: 'get some bread'
      }
      await provider.addInteraction({
        state: 'posted todo successfully',
        uponReceiving: 'POST todos request',
        withRequest: {
          path: '/todos',
          method: 'POST',
          body: like(postTodoRequest)
        },
        willRespondWith: {
          headers: { 'Content-Type': 'application/json' },
          status: 200,
          body: like(todoRequest)
        }
      })
      await client.addTodo(postTodoRequest)
    })
  })
})
