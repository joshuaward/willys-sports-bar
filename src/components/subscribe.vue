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
					button.subscribe-submit(type="submit") Submit
		.subscribe-bg
			img(src="@/assets/img/carousel-1.jpg")
</template>

<script>
	export default {
		name: 'Subscribe',
		data() {
			return {
				title: 'join the mailing list'
			}
		}
	}
</script>
