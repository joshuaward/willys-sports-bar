<template lang="pug">
	main.menu
		Hero(:title="title")
		Tabs
		Testimonials.menu-testimonials
</template>

<script>
import Hero from '@/components/hero';
import Tabs from '@/components/tabs';

export default {
	name: 'home',
	components: {
		Hero,
		Tabs
	},
	data() {
		return {
			title: 'Menu',
		}
	}
}
</script>