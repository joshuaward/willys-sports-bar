<template lang="pug">
	section.section.subscribe
		.grid-container
			.grid-x
				.cell
					h1.subscribe-title.variane {{ title }}
						span.avenir we send deals, not spam.
			.grid-x
				.cell
					input.subscribe-input(type="text", placeholder="email address")
					button.subscribe-submit.button.button-full.button-secondary(type="submit") Sign Up
		.subscribe-bg(:style="{ backgroundImage: `url(${this.bgImage})` }")
</template>

<script>
	export default {
		name: 'Subscribe',
		data() {
			return {
				title: 'join the mailing list',
				bgImage: require('@/assets/img/subscribe-bg.jpg'),
			}
		}
	}
</script>
