<template lang="pug">
	nav#nav.rye
		ul 
			li.nav-link
				router-link(to="/", @click="toggleMenu()") Home
			li.nav-link
				router-link(to="/Menu", @click="toggleMenu()") Menu
			li.nav-link
				router-link(to="/Events", @click="toggleMenu()") Events
			li.nav-link
				router-link(to="/About", @click="toggleMenu()") About
			li.nav-link
				router-link(to="/Contact", @click="toggleMenu()") Contact
			li.nav-link
				a(href="https://www.facebook.com/Willys-Sports-Bar-Grille-and-Casino-152793464753634/")
					i.fab.fa-facebook
				a(href="#")
					i.fab.fa-snapchat
				a(href="#")
					i.fab.fa-instagram
</template>

<script>
export default {
	name: 'navigation',
	data () {
		return {
			title: 'Navigation',
		}
	},
	methods: {
			
	}
}
</script>