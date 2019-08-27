<template lang="pug">
	#tabs.tabs
		.grid-container
			.grid-x.grid-padding-x
				.cell
					.tabs-triggers
						.tabs-trigger(
							v-for='(item, index) in categories',
							:class="[index === active ? 'tabs-trigger--active' : '']",
							@click='activate(index)') {{categories[index]}}
		.tabs-content(v-if="active === 0")
			food-menu
		.tabs-content(v-if="active === 1")
			beer-menu
		.tabs-content(v-if="active === 2")
			section.py-0
				.grid-container.menu-section
					.grid-x
						.cell.menu-title
							h2.variane.colorPrimary.mb-2 Handcrafted Cocktails
</template>
	
<script>
import foodMenu from './foodMenu';
import beerMenu from './beerMenu';

export default {
	components: {
		foodMenu,
		beerMenu
	},
	data() {
		return {
			active: 0,
			categories: [
				"Food", 
				"Beer", 
				"Spirits"
			]
		}
	},
	methods: {
		activate(index) {
			this.active = index;
		}
	},
	props: [
		'content'
	]
}
</script>