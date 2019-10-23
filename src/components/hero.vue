<template lang="pug">
	section.hero
		.grid-container
			.grid-x.grid-padding-x
				.cell
					h1.title {{ title }}
				.cell
					.hours
						a.zipDish(href="https://wtn.zipdishdelivery.com/order/rv/61" target="_blank")
							img.zipDish-logo(src="@/assets/img/zip-dish-logo.png" alt="Zip Dish Logo")
						h3 Hours
						ul.hours-list
							li Sunday: 10:00 am - 12:00 am
							li Monday - Thursday: 11:00 am - 1:00 am 
								//- span.open (open)
							li Friday: 11:00 am - 2:00 am
							li Saturday: 10:00 am - 2:00 am
						.hours-happy
							h4 Happy Hour Mon - Fri 4:00pm - 7:00pm
			
		.plax
</template>

<script>

export default {
	name: 'hero',
	components: {
	},
	data() {
		return {
		}
	},
	props: [
		'title'
	]
}
</script>
