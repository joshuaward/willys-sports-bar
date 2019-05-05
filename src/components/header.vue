<template lang="pug">
	header.header(:class="{'header-unsticky': scrolled, 'header-sticky': background}",  v-on="handleScroll()")
		.grid-container
			.grid-x.align-justify
				.cell.logo
					router-link(to="/")
						span.rye.colorWhite Willy's 
						span.variane.colorSecondary Sportsbar
						span.colorPrimary & Casino
				button.hamburger(@click="toggleMenu()", :class="{ active: isActive }")
					span
				Navigation(:class="{ active: isActive }")
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
			title: 'Header',
			isActive: false,
			limitPosition: 600,
			scrolled: false,
			background: false,
			lastPosition: 0,
			top: 0
		}
	},
	methods: {
		toggleMenu() {
			if(this.isActive) {
				this.isActive = false;
			} else {
				this.isActive = true;
			}
		},
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