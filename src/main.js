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
// const hamburger = document.querySelector('.hamburger')
// const navigation = document.querySelector('nav')
// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('menu-open')
//   navigation.classList.toggle('menu-open')
// })

// const navLinks = document.querySelectorAll('nav > ul > .nav-link > a')
// navLinks.forEach(navLink => navLink.addEventListener('click', () => {
//   hamburger.classList.toggle('menu-open')
//   navigation.classList.toggle('menu-open')
// }))

//PARALLAX FUNCTION
document.addEventListener('scroll', () => {
	const top = window.pageYOffset;
	const one = document.querySelector('.plax-1'); 
	const two = document.querySelector('.plax-2');
	const three = document.querySelector('.plax-3');
	const four = document.querySelector('.plax-4');
	const five = document.querySelector('.plax-5');
	
	one.style.bottom = (-(top * 0.15) + 'px');
	two.style.bottom = (-(top * 0.2) + 'px');
	three.style.bottom = (-(top * 0.3) + 'px');
	four.style.bottom = (-(top * 0.4) + 'px');
	five.style.bottom = (-(top * 0.5) + 'px');
});