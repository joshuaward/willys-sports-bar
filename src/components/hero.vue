<template lang="pug">
	section.hero
		.grid-container.full
			.grid-x
				.cell.hours
					h3 Hours
					div Sunday: 10:00 am - 12:00 am
					div Monday - Thursday: 11:00 am - 1:00 am 
						span.open (open)
					div Friday: 11:00 am - 2:00 am
					div Saturday: 10:00 am - 2:00 am

</template>

<script>
// @ is an alias to /src
import Hero from '@/components/hero';

export default {
	name: 'home',
	components: {
		Hero,
	}
}
</script>
