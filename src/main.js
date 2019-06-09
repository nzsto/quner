//vue引入和其它插件引入
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from "fastclick"


//静态文件引入
import './assets/styles/reset.css'
import './assets/styles/border.css'

//是否开发或生产模式
Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  fastClick,
  components: { App },
  template: '<App/>'
})
