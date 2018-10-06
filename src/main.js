import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import VueLazyLoad from 'vue-lazyload'
import store from './store'

Vue.config.productionTip = false
fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

// /* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'
//
// console.log('test')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
