<template lang="pug">
	main.home
		Hero(:title="title")
		PromoBanner
		section.intro.intro-home
			.grid-container
				.grid-x
					.cell.medium-6
						h4.intro-preheading Who We Are
						h1.intro-heading Welcome
						h3.intro-subheading Our cocktail menu is inspired by vintage and contemporary recipes
						p Located in midtown and inspired by each city block, Bar embodies the energy of New York with the laid back atmosphere of living room.
						a.button.button-primary(href="#0")
							span More Info
							i.fas.fa-info-circle
					.cell.medium-6
						Carousel.intro-home
		Testimonials.home
		section.fillPrimary
			.grid-container
				.grid-x
					.cell
						h2.rye.textCenter.colorSecondary.mb-2 Specials
			Accordion
		section.cards
			.grid-container
				.grid-x.grid-padding-x
					.cell.medium-6.large-4(v-for="item in cards")
						Card(:item="item", :key="item.title")
		Subscribe
</template>

<script>
import Hero from '@/components/hero';
import Accordion from '@/components/accordion';
import PromoBanner from '@/components/promoBanner';
import Carousel from '@/components/carousel';
import Testimonials from '@/components/testimonials';
import Card from '@/components/card';
import Subscribe from '@/components/subscribe';

export default {
	name: 'home',
	components: {
		Hero,
		Accordion,
		PromoBanner,
		Carousel,
		Testimonials,
		Card,
		Subscribe
	},
	data() {
		return {
			title: 'Home',
			bgImage: require('@/assets/img/subscribe-bg.jpg'),
			cards: [
				{
					image: require('@/assets/img/card-craft-beer.jpg'),
					title: 'Craft Beer',
					content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.'
				},
				{
					image: require('@/assets/img/card-original-drinks.jpg'),
					title: 'Original Drinks',
					content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.'
				},
				{
					image: require('@/assets/img/card-delicious-food.jpg'),
					title: 'Delicious Food',
					content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.'
				}
			]
		};
	}
}
</script>