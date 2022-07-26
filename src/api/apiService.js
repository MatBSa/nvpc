import http from './http-common';

const get = () => {
  return http.get(`/user/MatBSa/repos`);
};

export default {
  get,
};