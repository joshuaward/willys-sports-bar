<template lang="pug">
	article
		.card-header
			img.card-image(:src="item.image" alt="Card Image")
		.card-content
			h2.card-title {{ item.title }}
			p.card-copy {{ item.content }}
		.card-footer
			router-link.card-button(:to="item.link")
				i.fas.fa-arrow-right
</template>

<script>
	export default {
		name: 'Card',
		data() {
			return {
				publicPath: process.env.BASE_URL,
			}
		},
		props: [
			'item'
		],
	}
</script>
