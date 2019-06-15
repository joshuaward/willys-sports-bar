<template lang="pug">
	#tabs.tabs
		.tabs-triggers
			.tabs-trigger(
				v-for='(item, index) in categories',
				:class="[index === active ? 'tabs-trigger--active' : '']",
				@click='activate(index)') {{categories[index]}}
		.tabs-content(v-if="active === 0")
			food-menu
		.tabs-content(v-if="active === 1")
			section.py-0
				.grid-container.menu-section
					.grid-x
						.cell.menu-title
							h2.variane.colorPrimary.mb-2 Draught Beer
		.tabs-content(v-if="active === 2")
			section.py-0
				.grid-container.menu-section
					.grid-x
						.cell.menu-title
							h2.variane.colorPrimary.mb-2 Handcrafted Cocktails
</template>
	
<script>
import foodMenu from './foodMenu';

export default {
	components: {
		foodMenu
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