<template lang="pug">
	main.home
		Hero
		PromoBanner
		section.intro.intro-home.mb-20
			.grid-container
				.grid-x
					.cell.medium-6
						h4.intro-preheading Who We Are
						h1.intro-heading Welcome
						h3.intro-subheading Our cocktail menu is inspired by vintage and contemporary recipes
						p Located in midtown and inspired by each city block, Bar embodies the energy of New York with the laid back atmosphere of living room.
						a.button.button-primary.button-info(href="/about") More Info
					.cell.medium-6
						//-carousel(:data="data", :indicators="true", :controls="true")
						
</template>

<script>
// @ is an alias to /src:controls="true"
import Vue from 'vue';
import Hero from '@/components/hero';
import PromoBanner from '@/components/promoBanner';
import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.component(VueCarousel.name, VueCarousel);

export default {
	name: 'home',
	components: {
		Hero,
		PromoBanner,
		VueCarousel
	},
	data() {
		return {
			data: [
				'<div class="example-slide">Slide 1</div>',
				'<div class="example-slide">Slide 2</div>',
				'<div class="example-slide">Slide 3</div>',
			],
		};
	}
}
</script>

<style>
  .example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }
</style>