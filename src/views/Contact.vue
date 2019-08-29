<template lang="pug">
	main.contact
		Hero(:title="title")
		PromoBanner
		section.contact
			.grid-container
				.grid-x.grid-padding-x
					.cell.large-6
						h2 Contact Us
					.cell.large-6
						iframe.map(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.600752368966!2d-97.13979368413966!3d44.89077327909833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52cd282d48ada645%3A0xb00d6282db2ffba!2sWilly's%20Sports%20Bar!5e0!3m2!1sen!2sus!4v1567037704666!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="")

</template>

<script>
import Hero from '@/components/hero';
import PromoBanner from '@/components/promoBanner';
import Testimonials from '@/components/testimonials';

export default {
	name: 'about',
	components: {
		Hero,
		PromoBanner,
		Testimonials
	},
	data() {
		return {
			title: 'Contact',
		}
	}
}

</script>