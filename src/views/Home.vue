<template lang="pug">
	main.home
		Hero(:title="title")
		PromoBanner
		section.intro.intro-home
			.grid-container
				.grid-x.grid-padding-x
					.cell.medium-6
						h4.intro-preheading Who We Are
						h1.intro-heading Welcome
						h3.intro-subheading Our cocktail menu is inspired by anything and everything that makes you thirsty
						p Located in Watertown, SD and inspired by midwestern comfort, Willy's embodies the energy of the upper midwest with the laid back atmosphere of your favorite place.
						router-link.button.button-primary(to="/About")
							span More Info
							i.fas.fa-info-circle
					.cell.medium-6
						Carousel.intro-home
		section.fillPrimary
			.grid-container
				.grid-x.grid-padding-x
					//- .cell
					//- 	h2.rye.textCenter.colorSecondary.mb-2 Specials
					.cell.medium-8
						h2.variane.textCenter.colorSecondary.mb-2 Daily Specials
						Accordion
					.cell.medium-4(style="overflow:hidden")
						h2.variane.textCenter.colorSecondary.mb-2 Lunch Specials
						.fb-page(data-href="https://www.facebook.com/pg/Willys-Sports-Bar-Grille-and-Casino-152793464753634" data-tabs="timeline" data-width="" data-height="400" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false")
							blockquote.fb-xfbml-parse-ignore(cite="https://www.facebook.com/pg/Willys-Sports-Bar-Grille-and-Casino-152793464753634")
								a(href="https://www.facebook.com/pg/Willys-Sports-Bar-Grille-and-Casino-152793464753634") Willy's: Sports Bar, Grille, and Casino
		section.cards
			.grid-container
				.grid-x.grid-padding-x
					.cell.medium-6.large-4(v-for="item in cards")
						Card(:item="item", :key="item.title")
		Testimonials.home-testimonials
		//- Subscribe
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
					content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.',
					link: '/Menu'
				},
				{
					image: require('@/assets/img/card-original-drinks.jpg'),
					title: 'Original Drinks',
					content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.',
					link: '/Menu'
				},
				{
					image: require('@/assets/img/card-delicious-food.jpg'),
					title: 'Delicious Food',
					content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.',
					link: '/Menu'
				}
			]
		};
	}
}
</script>