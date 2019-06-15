<template lang="pug">
	#tabs.tabs
		.tabs-triggers
			.tabs-trigger(
				v-for='(item, index) in categories',
				:class="[index === active ? 'tabs-trigger--active' : '']",
				@click='activate(index)') {{categories[index]}}
		.tabs-content(v-if="active === 0") Content 1
			//- menu-item
		.tabs-content(v-if="active === 1") Content 2
		.tabs-content(v-if="active === 2") Content 3
</template>
	
<script>
export default {
	data() {
		return {
			active: 0,
			categories: [
				"Tab 1", 
				"Tab 2", 
				"Tab 3"
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