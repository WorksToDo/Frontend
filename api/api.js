import axios from 'axios'

export class API {
  constructor (URL) {
    if (URL === undefined || URL === '') {
      URL = process.env.BACKEND_URL || 'wrong-url'
    }
    if (URL.endsWith('/')) {
      URL = URL.substr(0, URL.length - 1)
    }
    this.URL = URL
    axios.defaults.baseURL = URL
  }

  withPath (path) {
    if (!path.startsWith('/')) {
      path = '/' + path
    }
    return `${this.URL}${path}`
  }

  // eslint-disable-next-line require-await
  async getTodoList () {
    return await axios.get(this.withPath('/todos')).then(r => r.data)
  }

  async addTodo (todo) {
    return await axios.post(this.withPath('/todos'), todo).then(r => r.data)
  }
}
export default new API(process.env.BACKEND_URL)
