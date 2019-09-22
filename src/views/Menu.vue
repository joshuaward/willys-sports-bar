<template lang="pug">
	main.menu
		Hero(:title="title")
		Tabs
		Testimonials.menu-testimonials
</template>

<script>
import Hero from '@/components/hero';
import Tabs from '@/components/tabs';
import Testimonials from '@/components/testimonials';

export default {
	name: 'home',
	components: {
		Hero,
		Tabs,
		Testimonials
	},
	data() {
		return {
			title: 'Menu',
		}
	}
}
</script>