<template lang="pug">
	main.home
		Hero
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/hero';

export default {
	name: 'home',
	components: {
		Hero,
	}
}
</script>
