<template lang="pug">
	.menu-item
		.menu-itemName Item Name
		.menu-itemPrice $7.99
		.menu-itemDescription Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
</template>

<script>
import Hero from '@/components/hero';

export default {
	data() {
		return {
			menu: {
				food: {
					startingLine: {},
					wings: {},
					salads: {},
					baskets: {},
					quesadillas: {},
					burgers: {},
					sandwiches: {},
					wraps: {}
				},
				beer: {},
				spirits: {}
			}
		}
	}
}
</script>