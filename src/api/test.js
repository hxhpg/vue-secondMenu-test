import request from '@/utils/request.js';

export function testApi(data) {  // 测试接口
  return request({
    url: '/hxh/api-test/testApi',
    method: 'post',
    data: data
  });
}