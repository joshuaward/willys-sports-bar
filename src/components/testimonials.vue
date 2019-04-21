<template lang="pug">
	section.testimonials
		.grid-container
			.grid-x
				.cell.medium-8
					h2.anotherHand.colorSecondary Word on the streets...
					blockquote.testimonial
						p Solid burgers, must be 15 different versions on the menu. Peanut butter burger is definitely something to try.
					.testimonial-author
						em - Some Guy

</template>

<script>
export default {
	name: 'Testimonials',
	data () {
		return {
			title: 'Testimonials'
		}
	}
}
</script>
