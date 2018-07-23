// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import {Dialog} from 'element-ui';
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'//swiper
import './js/rem.js'//使用小米rem
import FastClick from 'fastclick';//解决点击事件延迟300ms
import "babel-polyfill";//解决ie兼容es6
import store from './vuex'// vuex



Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

axios.defaults.withCredentials=true
Vue.prototype.$axios = axios;
Vue.prototype.$http = axios

Vue.use(VueAwesomeSwiper)
FastClick.attach(document.body); 
Vue.use(Dialog);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
