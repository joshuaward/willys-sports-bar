<template lang="pug">
	section.testimonials
		.grid-container
			.grid-x.align-center
				.cell.medium-8
					h2.variane Word on the streets...
					blockquote.testimonial
						p Solid burgers, must be 15 different versions on the menu. Peanut butter burger is definitely something to try.
					.testimonial-author
						| — 
						em.colorSecondary Some Guy

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
