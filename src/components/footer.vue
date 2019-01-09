<template lang="pug">
	footer.footer
		.grid-container
			.grid-x
				.cell.medium-6.large-4 {{title}}
				.cell.medium-6.large-4.logo
					router-link(:to="{ name: 'Home' }" exact)
						span.rye.colorWhite Willy's 
						span.anotherHand.colorSecondary Sportsbar
						span.colorPrimary & Casino
</template>

<script>
export default {
	name: 'Footer',
	data () {
		return {
			title: 'Footer'
		}
	}
}
</script>
