import axios from 'axios'
import Promise from 'bluebird'

axios.defaults.promise = Promise

const instance = axios.create({
  baseURL: '/api/',
  timeout: 5000,
  responseType: 'json'
})

export default instance
