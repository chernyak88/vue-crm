import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Paginate from 'vuejs-paginate'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from '@/directives/tooltip.directive.js'
import messagePlugin from '@/utils/message.plugin'
import titlePlugin from '@/utils/title.plugin'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: "AIzaSyASIHnvFFfTMA7r_cAq88_MhypMU7iYWDA",
  authDomain: "vue-crm-fe99c.firebaseapp.com",
  databaseURL: "https://vue-crm-fe99c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vue-crm-fe99c",
  storageBucket: "vue-crm-fe99c.appspot.com",
  messagingSenderId: "257071983540",
  appId: "1:257071983540:web:16dabff33fc74d12cf60e1",
  measurementId: "G-4CG7GD5PX2"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
