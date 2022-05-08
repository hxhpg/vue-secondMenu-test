import axios from 'axios';
import store from '@/store/index.js';
import { Message } from 'element-ui';

// 创建 axios 实例
const service = axios.create({
  baseURL: 'https://api.example.com',
  // withCredentials: true,
  timeout: 60000
});

// 请求拦截器
service.interceptors.request.use(config => {
  config.headers['authToken'] = store.state.authToken;
  config.headers['ms_username'] = localStorage.getItem('ms_username');
  return config;
}, error => {
  console.log('request error',error);
  return Promise.reject(error);
});

// 响应拦截器
service.interceptors.response.use(response => {
  return response;
}, error => {
  console.log('response error', error);
  Message({
    message: error.message,
    type: 'error'
  });
  return Promise.reject(error);
});

export default service;