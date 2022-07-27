import http from './http-common'

const get = () => {
  return http.get(`/users/MatBSa/repos`)
}

export default {
  get,
}