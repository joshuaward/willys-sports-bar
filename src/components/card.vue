<template lang="pug">
	article.card
		header.card-header
			img.card-image(:src="item.image")
			//- img.card-image(:src="'../assets/img/' + item.image")
		.card-content
			h2.card-title {{ item.title }}
			p.card-copy {{ item.content }}
		footer.card-footer
			a.card-button(href="#")
				i.fas.fa-arrow-right
</template>

<script>
	export default {
		name: 'Card',
		data() {
			return {
				
			}
		},
		props: [
			'item'
		],
	}
</script>
