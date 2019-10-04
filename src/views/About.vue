<template lang="pug">
	main.about
		Hero(:title="title")
		PromoBanner
		section.fillPrimary
			.grid-container
				.grid-x.grid-padding-x
					.cell.medium-7.large-8.order-sm-2.order-md-1
						.about-content
							h2.rye.colorSecondary.mb-2 The Beginning
							p Everything started when we were little kids. We grew up in bars and restaurants ran by our family. Our playgrounds spanned from Webster’s Westwood Inn to right here in Watertown, chasing cousins around and helping out at The Drake, The Wheel Inn and our parents bar, Buckshot Willy’s. 
					.cell.medium-5.large-4.order-sm-1.order-md-2
						.about-image.about-image--beginning
		section.fillSecondary
			.grid-container
				.grid-x.grid-padding-x
					.cell.medium-5.large-4
						.about-image.about-image--middle
					.cell.medium-7.large-8
						.about-content
							h2.rye.colorPrimary.mb-2 The Middle
							p We knew going through high school that someday it may be our turn! When the opportunity finally presented itself we jumped on it. Joining with our uncle Greg Meyer, we changed the name and game plan of a small Bar/Lounge to create Willy’s Sports Bar & Grille!!
		section.fillAccent
			.grid-container
				.grid-x.grid-padding-x
					.cell.medium-7.large-8.order-sm-2.order-md-1
						.about-content
							h2.rye.colorSecondary.mb-2 The Dream
							p Now that we are on our own, we need to continue our families tradition. Creating a nice atmosphere, great food, great service and keeping all that right here in Watertown. That is the dream! 
					.cell.medium-5.large-4.order-sm-1.order-md-2
						.about-image.about-image--dream
		Testimonials.about-testimonials
		//- Subscribe
</template>

<script>
import Hero from '@/components/hero';
import PromoBanner from '@/components/promoBanner';
import Subscribe from '@/components/subscribe';
import Testimonials from '@/components/testimonials';

export default {
	name: 'about',
	components: {
		Hero,
		PromoBanner,
		Subscribe,
		Testimonials
	},
	data() {
		return {
			title: 'About',
			parallax: require('@/assets/img/plax-1.jpg')
		}
	}
}
</script>