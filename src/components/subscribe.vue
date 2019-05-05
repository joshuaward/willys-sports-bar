<template lang="pug">
	section.section
		.grid-container
			.grid-x
				.cell
					h1.variane {{ title }}
</template>

<script>
	export default {
		name: 'Subscribe',
		data() {
			return {
				title: 'join the list'
			}
		}
	}
</script>
