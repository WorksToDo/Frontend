import { pactWith } from 'jest-pact'
// eslint-disable-next-line import/named
import { Matchers } from '@pact-foundation/pact'
import { API } from '~/api/api.js'
const { eachLike } = Matchers

const todoRequest = {
  id: 0,
  task: 'buy some milk'
}

pactWith({ consumer: 'todo-frontend', provider: 'todo-backend' }, (provider) => {
  describe('Todos', () => {
    let client
    beforeEach(() => {
      client = new API(provider.mockService.baseUrl)
    })
    test('Get Todos', async () => {
      await provider.addInteraction({
        state: 'Get todos successfully',
        uponReceiving: 'When todos (GET) request comes',
        withRequest: {
          path: '/todos',
          method: 'GET'
        },
        willRespondWith: {
          headers: { 'Content-Type': 'application/json; charset=UTF-8' },
          status: 200,
          body: eachLike(todoRequest)
        }
      })
      await client.getTodoList()
    })
  })
})
