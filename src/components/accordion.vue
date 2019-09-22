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
				{title: 'Sunday', text: 'This is a special for Sunday'},
				{title: 'Monday', text: 'This is a special for Monday'},
				{title: 'Tuesday', text: 'This is a special for Tuesday'},
				{title: 'Wednesday', text: 'This is a special for Wednesday'},
				{title: 'Thursday', text: 'This is a special for Thursday'},
				{title: 'Friday', text: 'This is a special for Friday'},
				{title: 'Saturday', text: 'This is a special for Saturday'}
			]
		}
	},
}
</script>
