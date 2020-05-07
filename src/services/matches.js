import axios from 'axios'
import api from '@/api_details'

export default {
    getMatches () {
        return new Promise((resolve, reject) => {
          axios.get(`${api.url}/matches`)
            .then(resolve)
            .catch(function (error) {
              if (error.response) {
                reject(error.response.data)
              } else if (error.request) {
                reject([{
                  'type': 'generic',
                  'text': 'Failed to load matches. Please try later.'
                }])
              }
            })
        })
      },
}