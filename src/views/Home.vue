<template lang="pug">
	main.home
		Hero
		PromoBanner
		section.intro.intro-home
			.grid-container
				.grid-x
					.cell.medium-6
						h4.intro-preheading Who We Are
						h1.intro-heading Welcome
						h3.intro-subheading Our cocktail menu is inspired by vintage and contemporary recipes
						p Located in midtown and inspired by each city block, Bar embodies the energy of New York with the laid back atmosphere of living room.
						a.button.button-primary.button-info(href="/about") More Info
					.cell.medium-6
						Carousel.intro-home
		Testimonials.home
		section.fillPrimary
			.grid-container
				.grid-x
					.cell
						h2.rye.textCenter.colorSecondary Specials
						Accordion
</template>

<script>
import Hero from '@/components/hero';
import Accordion from '@/components/accordion';
import PromoBanner from '@/components/promoBanner';
import Carousel from '@/components/carousel';
import Testimonials from '@/components/testimonials';

export default {
	name: 'home',
	components: {
		Hero,
		Accordion,
		PromoBanner,
		Carousel,
		Testimonials
	},
	data() {
		return {
		};
	}
}
</script>