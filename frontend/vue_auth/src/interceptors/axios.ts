import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api/'

const interceptor = axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status == 403) {
      axios.interceptors.response.eject(interceptor) // used to stop infinite recursion
      const response = await axios.post('refresh', {}, { withCredentials: true })

      if (response.status == 200) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
        return axios(error.config)
      }
    }

    return Promise.reject(error)
  }
)
