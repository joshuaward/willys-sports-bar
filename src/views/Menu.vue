<template lang="pug">
	main.menu
		Hero(:title="title")
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