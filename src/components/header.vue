<template lang="pug">
	header.header
		.grid-container
			.grid-x.align-justify
				.cell.logo
					router-link(to="/")
						span.rye.colorWhite Willy's 
						span.anotherHand.colorSecondary Sportsbar
						span.colorPrimary & Casino
				button.hamburger(@click="menuToggle()")
					span
				Navigation
</template>

<script>
import Navigation from '@/components/navigation';

export default {
	name: 'Header',
	components: {
		Navigation
  },
	data () {
		return {
			title: 'Header'
		}
	},
	methods () {
		return {
			menuToggle: function menuToggle() {
				this.isOpen = true
			}
		}
	}
}
</script>