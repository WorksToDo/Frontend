import axios from 'axios'
import { API } from '~/api/api'
jest.mock('axios')
describe('Api', () => {
  describe('api object initializes correctly', () => {
    test('with given URL not ends with a backslash', () => {
      const testURL = 'http://testing-url'
      const api = new API(testURL)
      expect(api.URL).toEqual(testURL)
    })
    test('with given URL ends with a backslash', () => {
      const testURL = 'http://testing-url/'
      const expectedURL = 'http://testing-url'
      const api = new API(testURL)
      expect(api.URL).toEqual(expectedURL)
    })
    test('with given undefined url, expected to fill with string wrong-url', () => {
      const testURL = undefined
      const expectedURL = 'wrong-url'
      const api = new API(testURL)
      expect(api.URL).toEqual(expectedURL)
    })
    test('with given empty string url, expected to fill with string wrong-url', () => {
      const testURL = ''
      const expectedURL = 'wrong-url'
      const api = new API(testURL)
      expect(api.URL).toEqual(expectedURL)
    })
  })
  describe('withPath function of API class returns full url of related endpoint correctly', () => {
    const testURL = 'https://test-url'
    const api = new API(testURL)
    test('with given an endpoint not starting with backslash', () => {
      const testEndpoint = 'todos'
      const endpointURL = api.withPath(testEndpoint)
      const expectedURL = `${testURL}/${testEndpoint}`
      expect(endpointURL).toEqual(expectedURL)
    })
    test('with given a correct endpoint starting with backslash', () => {
      const testEndpoint = '/todos'
      const endpointURL = api.withPath(testEndpoint)
      const expectedURL = `${testURL}${testEndpoint}`
      expect(endpointURL).toEqual(expectedURL)
    })
  })
  describe('api calls', () => {
    const api = new API('http://backend-host')
    test('getTodoList function of API class returns returns todos coming from backend correctly', async () => {
      const testMockData = [
        {
          id: 1,
          task: 'buy some milk'
        },
        {
          id: 2,
          task: 'drink some milk'
        }
      ]
      axios.get.mockResolvedValue({
        data: testMockData
      })
      const todos = await api.getTodoList()
      expect(todos).toEqual(testMockData)
    })
    describe('postTodo function of API class returns returns', () => {
      test('added todo if valid request sends', async () => {
        const testMockData = {
          task: 'buy some milk'
        }
        const expectedResponse = {
          id: 1,
          task: 'bu some milk'
        }
        axios.post.mockResolvedValue({
          data: expectedResponse
        })
        const addedTodo = await api.addTodo(testMockData)
        expect(addedTodo).toEqual(expectedResponse)
      })
      test('Bad Request if not volid request sends', async () => {
        const testMockData = {
          notTask: 's'
        }
        const expectedResponse = 'Bad Request'
        axios.post.mockResolvedValue({
          data: expectedResponse
        })
        const resp = await api.addTodo(testMockData)
        expect(resp).toEqual(expectedResponse)
      })
    })
  })
})
