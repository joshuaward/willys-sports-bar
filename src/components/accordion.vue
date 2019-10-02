<template lang="pug">
	.accordion
		accordion-item(v-for="item in data", :item="item", :key="item.title")
</template>

<script>
import accordionItem from './accordionItem'
export default {
	name: 'Accordion',
	components: {
		accordionItem
	},
	data () {
		return {
			title: 'Accordion',
			data: [
				// {
				// 	title: 'Sunday', 
				// 	text: 'This is a special for Sunday'
				// },
				{
					title: 'Monday', 
					text: 'Apps and taps: Any tall beer (25oz) and any appetizer for $10.'
				},
				{
					title: 'Tuesday', 
					text: 'Apps and taps: Any tall beer (25oz) and any appetizer for $10'
				},
				{
					title: 'Wednesday', 
					text: 'Wing night: Half-price boneless wings. Basket or the appetizer.'
				},
				{
					title: 'Thursday',
					text: 'Burger night: Buy one burger get second burger half off. Sides included.'
				},
				{
					title: 'Friday', 
					text: 'Steak night: 10oz Ribeye steak, fries, side salad, and toast for $16.95.'
				},
				// {
				// 	title: 'Saturday', 
				// 	text: 'This is a special for Saturday'
				// }
			]
		}
	},
}
</script>
