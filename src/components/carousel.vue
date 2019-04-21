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
				'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
				'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
				'https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
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
