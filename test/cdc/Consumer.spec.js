import { pactWith } from 'jest-pact'
import { Matchers } from '@pact-foundation/pact'
import { HTTPMethod } from '@pact-foundation/pact/src/common/request'
import { API } from '~/api/api.js'

const todoRequest = {
  id: 0,
  task: 'buy some milk'
}

pactWith({
  consumer: 'todo-frontend',
  provider: 'todo-backend'
}, (provider) => {
  let client
  describe('Todos', () => {
    beforeEach(() =>
      provider.addInteraction({
        state: 'Get todos successfully',
        uponReceiving: 'When todos (GET) request comes',
        withRequest: {
          headers: { Accept: 'application/json' },
          path: '/todos',
          method: HTTPMethod.GET
        },
        willRespondWith: {
          headers: { 'Content-Type': 'application/json' },
          status: 200,
          body: Matchers.eachLike(todoRequest)
        }
      })
    )
    it('get todos status ok', async () => {
      client = new API(provider.mockService.baseUrl)
      await client.getTodoList()
    })
  })
})
