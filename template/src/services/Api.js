import axios from 'axios'
import store from '../store/index'

const Api = ({
  baseURL,
  noHeaders,
  headers,
  options
}) => {
  let sessionToken = store.state.Auth && store.state.Auth.token

  const generateHeaders = () => {
    if (!noHeaders) {
      return {
        'authorization': `Bearer ${sessionToken}`,
        ...headers
      }
    }
    return {
      ...headers
    }
  }

  let baseApiUrl = process.env.VUE_APP_API_URL
  const newInstance = axios.create({
    baseURL: baseURL || baseApiUrl,
    headers: generateHeaders(),
    ...options
  })

  return newInstance
}

export default Api
