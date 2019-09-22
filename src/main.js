import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//PARALLAX FUNCTION
document.addEventListener('scroll', () => {
	const top = window.pageYOffset;
	const plax = document.querySelector('.plax'); 	
	plax.style.bottom = (-(top * 0.15) + 'px');
});

// window['myGlobal'] = process.env.NODE_ENV