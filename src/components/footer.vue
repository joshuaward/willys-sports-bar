<template lang="pug">
	footer.footer
		.grid-container
			.grid-x
				.cell.medium-6.large-4
					router-link.logo(:to="{ name: 'Home' }" exact)
						span.rye.colorWhite Willy's 
						span.variane.colorSecondary Sportsbar
						span.colorWhite & Casino
					.footer-address
						p 1401 9th Ave SW #[br] Watertown, SD 57201
				.cell.medium-6.large-4 {{title}}
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
