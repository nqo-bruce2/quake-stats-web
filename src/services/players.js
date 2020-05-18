import axios from 'axios'
import api from '@/api_details'

export default {
    getSignedupPlayers () {
        return new Promise((resolve, reject) => {
          axios.get(`${api.url}/players`)
            .then(resolve)
            .catch(function (error) {
              if (error.response) {
                reject(error.response.data)
              } else if (error.request) {
                reject([{
                  'type': 'generic',
                  'text': 'Failed to load players. Please try later.'
                }])
              }
            })
        })
      },

    getAllStats () {
      return new Promise((resolve, reject) => {
        axios.get(`${api.url}/allstats`)
          .then(resolve)
          .catch(function (error) {
            if (error.response) {
              reject(error.response.data)
            } else if (error.request) {
              reject([{
                'type': 'generic',
                'text': 'Failed to load all stats. Please try later.'
              }])
            }
          })
      })
    }
}