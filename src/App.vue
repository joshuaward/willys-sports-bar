<template lang="pug">
	#app
		Header
		router-view
		Footer
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
	name: 'App',
	components: {
		Header,
		Footer
	}
}
</script>