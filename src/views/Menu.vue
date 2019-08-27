<template lang="pug">
	main.menu
		Hero(:title="title")
		section
			.grid-container
				.grid-x.grid-padding-x
					Tabs
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