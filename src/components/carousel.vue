<template lang="pug">
	.carousel
		.carousel-nav
			a.prev.fas.fa-chevron-left(@click="navigate(-1)")
			a.next.fas.fa-chevron-right(@click="navigate(1)")
		div.carousel-wrapper
			transition(name="fade")
				img.carousel-item(
					:key="currentItem",
					:src="currentItem",
					@mouseover="stopRotation",
					@mouseout="startRotation")
</template>

<script>
export default {
	name: 'Carousel',
	data () {
		return {
			title: 'Carousel',
			items: [
				'/assets/img/carousel-1.jpg',
				'/assets/img/carousel-2.jpg',
				'/assets/img/carousel-3.jpg'
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
			this.timer = setInterval(this.rotate,7000);
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
