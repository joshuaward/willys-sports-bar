import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// other javascripts
const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('nav')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('menu-open')
  navigation.classList.toggle('menu-open')
})

const navLinks = document.querySelectorAll('nav > ul > .nav-link > a')
navLinks.forEach(navLink => navLink.addEventListener('click', () => {
  hamburger.classList.toggle('menu-open')
  navigation.classList.toggle('menu-open')
}))