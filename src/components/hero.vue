<template lang="pug">
	section.hero.plax-1
		.grid-container.full
			.grid-x
				.cell.hours
					h3 Hours
					ul.hours-list
						li Sunday: 10:00 am - 12:00 am
						li Monday - Thursday: 11:00 am - 1:00 am 
							span.open (open)
						li Friday: 11:00 am - 2:00 am
						li Saturday: 10:00 am - 2:00 am
					.hours-happy
						h4 Happy Hour Mon - Fri 4:00pm - 7:00pm
		scrollTop
</template>

<script>
import scrollTop from '@/components/scrollTop';

export default {
	name: 'hero',
	components: {
		scrollTop,
	}
}
</script>
