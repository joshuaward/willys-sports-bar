<template lang="pug">
	section.promoBanner
		.grid-container
			.grid-x
				.cell
					.promoBanner-item
						transition(name="slide")
							.promorBanner-item(
								:key="currentItem",
								:src="currentItem",
								@mouseover="stopRotation",
								@mouseout="startRotation")
									h3 {{items[currentNumber].day}}
									p {{ items[currentNumber].special }}
						.promoBanner-nav
							a.prev.fas.fa-chevron-left(@click="navigate(-1)")
							a.next.fas.fa-chevron-right(@click="navigate(1)")
</template>

<script>
export default {
	name: 'PromoBanner',
	data () {
		return {
			title: 'Promo Banner',
			items: [
				// {
				// 	day: 'Sunday',
				// 	special: 'You\'re special. So come drink with us!'
				// },
				{
					day: 'Monday',
					special: 'Apps and taps: Any tall beer (25oz) and any appetizer for $10.'
				},
				{
					day: 'Tuesday',
					special: 'Apps and taps: Any tall beer (25oz) and any appetizer for $10.'
				},
				{
					day: 'Wednesday',
					special: 'Wing night: Half-price boneless wings. Basket or the appetizer.'
				},
				{
					day: 'Thursday',
					special: 'Burger night: Buy one burger get second burger half off. Sides included.'
				},
				{
					day: 'Friday',
					special: 'Steak night: 10oz Ribeye steak, fries, side salad, and toast for $16.95.'
				},
				// {
				// 	day: 'Saturday',
				// 	special: 'You\'re special. So come drink with us!'
				// },
			],
			currentNumber: 0,
			timer: null
		}
	},
	mounted: function() {
		this.startRotation();
	},
	methods: {
		rotate: function() {
			if (this.currentNumber >= this.length) {
				this.currentNumber = 0;
			}
			else {
				this.currentNumber++;
			}
		},
		startRotation: function() {
			this.timer = setInterval(this.rotate,3000);
		},
		stopRotation: function() {
			clearInterval(this.timer);
		},
		resetRotation: function() {
			this.stopRotation();
			this.startRotation();
		},
		navigate: function(dir) {
			var current = this.currentNumber;			
			// replace start
			current = current + dir;
			if (current > this.length) {
				current = 0;
			}
			else if (current < 0) {
				current = this.length;
			}
			//replace end
			this.resetRotation();
			this.currentNumber = current;
		}
	},
	computed: {
		length: function() {
			return this.items.length - 1;
		},
		currentItem: function() {
			return this.items[this.currentNumber];
		}
	}
}
</script>
