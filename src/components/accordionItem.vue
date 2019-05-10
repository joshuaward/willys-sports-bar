<template lang="pug">
	.accordion-item(@click="open = !open", :class="{ 'is-open': open }")
			.accordion-trigger {{ item.title }}
			transition(
				name="slide", 
				v-on:enter="enter", 
				v-on:after-enter="afterEnter", 
				v-on:leave="leave",
				v-bind:css="false", duration="250")
				.accordion-content(v-if="open")
					p {{ item.text }}
</template>

<script>
	export default {
		data() {
			return {
				open: false,
				height: 0
			}
		},
		props: [
			'item'
		],
		methods: {
			enter(el, done) {
				let clone = el.cloneNode(true)
				clone.style.height = "auto"
				el.parentElement.insertAdjacentElement('beforeend', clone)
				setTimeout(()=>{
					this.height = clone.offsetHeight
					console.log(this.height)
					el.style.height = `${this.height}px`
					el.parentElement.removeChild(clone)
				})
				done()
			},
			leave(el, done) {
				el.style.height = `${el.offsetHeight}px`
				setTimeout(()=> {
					el.style.height = '0px'
				})
				done()
			}
		}
	}
</script>
