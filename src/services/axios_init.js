import axios from 'axios'

import router from '@/router'


axios.interceptors.response.use(
  res => res,
  // eslint-disable-next-line
  err => {
    switch (err.response.status) {
      case 401:
        router.push({
          path: '/'
        })
        break
      default:
        return Promise.reject(err)
    }
  }
)

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Content-Type'] = 'application/json'

export default axios
