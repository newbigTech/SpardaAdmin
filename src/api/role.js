
import fetch from '../utils/fetch'

export function getMockData() {
  return fetch({
    url: 'http://localhost:9528/static/data.json',
    method: 'get'
  })
}

