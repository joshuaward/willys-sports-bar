<template lang="pug">
	nav#nav.nav.rye(:class="{'active': menuState}")
		ul 
			li.nav-link(@click="toggleMenu()")
				router-link(:to="{ name: 'Home' }" exact) Home
			li.nav-link(@click="toggleMenu()")
				router-link(to="/Menu") Menu
			//- li.nav-link
				//- router-link(to="/Events", @click="toggleMenu()") Events
			li.nav-link(@click="toggleMenu()")
				router-link(to="/About") About
			li.nav-link(@click="toggleMenu()")
				router-link(to="/Contact") Contact
			li.nav-link
				a(href="https://www.facebook.com/Willys-Sports-Bar-Grille-and-Casino-152793464753634/")
					i.fab.fa-facebook
				a(href="#")
					i.fab.fa-snapchat
				a(href="#")
					i.fab.fa-instagram
</template>

<script>
import ToggleMenu from '@/mixins/ToggleMenu.js'
export default {
	name: 'navigation',
	mixins: [ToggleMenu],
	data () {
		return {
		}
	}
}
</script>