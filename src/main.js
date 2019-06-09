//vue引入和其它插件引入
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from "fastclick"
//轮播插件swiper引入
import VueAwesomeSwiper from 'vue-awesome-swiper'

//是否开发或生产模式
Vue.config.productionTip = false


//静态文件css引入
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'


//使用插件
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
