<template lang="pug">
	section.testimonials
		.grid-container
			.grid-x.align-center
				.cell.medium-8
					h2.variane Word on the streets...
			.grid-container.testimonials-slider
				.grid-x.align-justify
					.cell.small-1.textLeft
						a.prev(@click="navigate(-1)")
					.cell.small-10.medium-8
						transition(name="slide")
							blockquote.testimonials-sliderItem(
								:key="currentItem",
								:src="currentItem",
								@mouseover="stopRotation",
								@mouseout="startRotation")
									p {{items[currentNumber].quote}}
									.testimonials-author &mdash; 
										span.styleItalic.colorSecondary {{ items[currentNumber].author }}
					.cell.small-1.textRight
						a.next(@click="navigate(1)")

</template>

<script>
export default {
	name: 'Testimonials',
	data () {
		return {
			title: 'Testimonials',
			items: [
				{
					quote: 'WOW!!! Bugers are AMAZING. Hand pressed angus meat. Homemade sauces. Truly a gourmet burger. Friendly service..priced fairly.',
					author: 'KO'
				},
				{
					quote: 'The food has been amazing every time that I have ordered. I usually order using Zipdish. I love Willy\'s and would recommend it to anyone!',
					author: 'DayLynn McDonald'
				},
				{
					quote: 'Friendly service and good food. French Dip and Texas Patty Melt are both great, as are the onion rings!  Perfect place to catch a game on TV.',
					author: 'Christopher Hughes'
				}
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
