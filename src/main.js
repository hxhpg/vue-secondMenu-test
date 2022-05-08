import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import axios from 'axios';

import App from './App.vue';
import store from './store';
import router from './router/index.js';

import echarts from 'echarts';
import VueI18n from 'vue-i18n';
import { messages } from './components/common/i18n.js';
import { formatSeconds } from './utils/tools.js';
import 'babel-polyfill';
import './assets/css/main.css';
import './assets/css/theme.scss';

Vue.use(ElementUI);
Vue.use(ViewUI);
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zh',
  messages
});

Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.prototype.$formatSeconds = formatSeconds; // 全局使用该工具函数

Array.prototype.pushNoRepeat = function(){ // 往数组里添加不重复数据
  for(var i=0; i<arguments.length; i++){
    var ele = arguments[i];
    if(this.indexOf(ele) == -1){
      this.push(ele);
    }
  }
}

Vue.config.productionTip = false;

// 使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | 后台管理系统`;
  const role = localStorage.getItem('ms_username');
  if (!role && to.path !== '/Login') {
    next('/Login');
  } else if (to.meta.permission) {  // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    role === 'admin' ? next() : next('/403');
  } else {
    // 简单的判断IE10及以下，该组件不兼容
    if (navigator.userAgent.indexOf('MSIE') > -1) {
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        confirmButtonText: '确定'
      });
    } else {
      next();
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
});