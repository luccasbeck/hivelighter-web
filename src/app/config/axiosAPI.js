import axios from 'axios'
import { BACKEND_BASE_URL, TOKEN_ERROR_CODE } from './index'

const axiosAPI = axios.create({
  baseURL: BACKEND_BASE_URL,
})

axiosAPI.interceptors.request.use(
  function (request) {
    if (
      request.url !== `/register/automaticEmailAccount` &&
      request.url !== `/register/login/checkPassword`
    ) {
      request.headers['X-Access-Token'] = `${localStorage.getItem('access_token')}`
      request.headers['Content-Type'] = 'application/json'
      request.headers['Access-Control-Allow-Origin'] = '*'
    }
    return request
  },
  function (error) {
    return Promise.reject(error)
  },
)

axiosAPI.interceptors.response.use(
  function (response) {
    let data = response.data
    if (data.code && response.data.code === TOKEN_ERROR_CODE) {
      localStorage.removeItem('access_token')
      window.location.href = `/signin`
      return
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  },
)

export default axiosAPI
