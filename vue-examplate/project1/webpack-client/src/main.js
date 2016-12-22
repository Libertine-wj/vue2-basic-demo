// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './todolist/Index'
import store from './store/todo.js'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render:(h)=>h(App)
})
