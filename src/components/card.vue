<template lang="pug">
	article.card
		header.card-header
			img.card-image(:src="image")
		.card-content
			h2.card-title {{ title }}
			p.card-copy {{ content }}
		footer.card-footer
			a.card-button(href="#")
				i.fas.fa-arrow-right
</template>

<script>
	export default {
		name: 'Card',
		data() {
			return {
				image: 'http://via.placeholder.com/400x250',
				title: 'Craft Beer',
				content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.',
			}
		}
	}
</script>
