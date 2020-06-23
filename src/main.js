import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDGzBFy9b2h8ZNTjaBdTCbsLRNKQicBTTo',
      authDomain: 'itc-ads-faa4c.firebaseapp.com',
      databaseURL: 'https://itc-ads-faa4c.firebaseio.com',
      projectId: 'itc-ads-faa4c',
      storageBucket: 'itc-ads-faa4c.appspot.com',
      messagingSenderId: '203078521927',
      appId: '1:203078521927:web:a78465b0460da6ce8e8d62',
      measurementId: 'G-K1M8V6YX9C'
    })
  }
})
