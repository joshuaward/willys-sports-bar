<template lang="pug">
	header.header(:class="{'header-unsticky': scrolled, 'header-sticky': background}",  v-on="handleScroll()")
		.grid-container
			.grid-x.align-justify.align-middle
				.cell.auto
					router-link.logo(to="/")
						span.rye.colorWhite Willy's 
						span.variane.colorSecondary Sportsbar
						span.colorPrimary & Casino
				// .cell.auto
				// 	button.hamburger(@click.stop.prevent="toggleMenu()", :class="{ active: menuState }")
						span
				Navigation
</template>

<script>
import Navigation from '@/components/navigation';
import ToggleMenu from '@/mixins/ToggleMenu.js'

export default {
	name: 'Header',
	mixins: [ToggleMenu],
	components: {
		Navigation
  },
	data () {
		return {
			title: 'Header',
			limitPosition: 600,
			scrolled: false,
			background: false,
			lastPosition: 0,
			top: 0
		}
	},
	methods: {
		handleScroll() {
			if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
				this.scrolled = true;
			} 
			if (this.lastPosition > window.scrollY) {
				this.scrolled = false;
			}
			if (window.scrollY > this.top) {
				this.background = true;
			}
			if (window.scrollY === this.top) {
				this.background = false;
			}
			this.lastPosition = window.scrollY;
    }
	},
	created() {
		window.addEventListener("scroll", this.handleScroll);
	},
	destroyed() {
		window.removeEventListener("scroll", this.handleScroll);
	}
}
</script>
