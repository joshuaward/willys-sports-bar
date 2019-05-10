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
			isOpen: false,
			data: [
				{title: 'Sunday', text: 'Industry Night: $3 dank beers from 6pm - Close. '},
				{title: 'Monday', text: 'Case of the Monday\'s: Discounted off sale beer.'},
				{title: 'Tuesday', text: 'The most pointless day of the week: $2 you-call-it from 8pm - Close.'},
				{title: 'Wednesday', text: 'Hump Day: $4 select craft beers.'},
				{title: 'Thursday', text: 'Thirsty Thursday: Happy Hour from 3pm - 7pm.'},
				{title: 'Friday', text: 'The only thing special on friday is YOU!'},
				{title: 'Saturday', text: 'Saturday brunch specials.'}
			]
		}
	},
}
</script>
