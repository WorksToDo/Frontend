import axios from 'axios'

export class API {
  constructor (URL) {
    if (URL === undefined || URL === '') {
      URL = process.env.TODO_APP_BASE_API_URL
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
    return `${this.url}${path}`
  }

  // eslint-disable-next-line require-await
  async getTodoList () {
    return await axios.get(this.withPath('/todos')).then(r => r.status)
  }
}
export default new API('https://localhost:3000')
