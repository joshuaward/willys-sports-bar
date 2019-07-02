<template lang="pug">
	header.header(:class="{'header-unsticky': scrolled, 'header-sticky': background}",  v-on="handleScroll()")
		.grid-container
			.grid-x.align-justify.align-middle
				.cell.auto
					router-link.logo(to="/")
						span.rye.colorWhite Willy's 
						span.variane.colorSecondary Sportsbar
						span.colorPrimary & Casino
				.cell.auto
					button.hamburger(@click.stop="toggleMenu()", :class="{ active: isActive }")
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
			var b = document.querySelector('body');
			const links = document.querySelectorAll('.nav-link > a')
			const nav = document.querySelector('#nav')
			const hamburger = document.querySelector('.hamburger')
			if(this.isActive) {
				this.isActive = false;
				b.classList.remove('active');
			} else {
				this.isActive = true;
				b.classList.add('active');
			}
			links.forEach(link => link.addEventListener('click', () => {
				nav.classList.toggle('active');
				hamburger.classList.toggle('active');
				b.classList.toggle('active');
			}))
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
