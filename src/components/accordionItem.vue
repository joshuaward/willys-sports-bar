<template lang="pug">
	.accordion-item(@click="open = !open", :class="{ 'is-open': open }")
		.accordion-trigger {{ item.title }}
		.accordion-content(v-if="open")
			p {{ item.text }}
</template>

<script>
	export default {
		name: 'accordion-item',
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
		// 	enter(el, done) {
		// 		let clone = el.cloneNode(true)
		// 		clone.style.height = "auto"
		// 		el.parentElement.insertAdjacentElement('beforeend', clone)
		// 		setTimeout(()=>{
		// 			this.height = clone.offsetHeight
		// 			el.style.height = `${this.height}px`
		// 			el.parentElement.removeChild(clone)
		// 		})
		// 		done()
		// 	},
		// 	leave(el, done) {
		// 		el.style.height = `${el.offsetHeight}px`
		// 		setTimeout(()=> {
		// 			el.style.height = '0px'
		// 		})
		// 		done()
		// 	}
		}
	}
</script>
