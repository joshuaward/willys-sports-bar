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
						
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/hero';
import PromoBanner from '@/components/promoBanner';

export default {
	name: 'home',
	components: {
		Hero,
		PromoBanner
	}
}
</script>
