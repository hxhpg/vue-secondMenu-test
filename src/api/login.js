import request from '@/utils/request.js';

export function loginApi(data) {  // 登录接口
  return request({
    url: '/hxh/api-test/login',
    method: 'post',
    data: data
  });
}