<template lang="pug">
	.accordion
		.accordion-item(@click="toggleAccordion", :class="{ 'is-open': isOpen }", data-hash="item01")
			.accordion-trigger Sunday
			.accordion-content
				p Accordion Content 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		.accordion-item(@click="toggleAccordion", :class="{ 'is-open': isOpen }", data-hash="item02")
			.accordion-trigger Monday
			.accordion-content
				p Accordion Content 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		.accordion-item(@click="toggleAccordion", :class="{ 'is-open': isOpen }", data-hash="item03")
			.accordion-trigger Tuesday
			.accordion-content
				p Accordion Content 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		.accordion-item(@click="toggleAccordion", :class="{ 'is-open': isOpen }", data-hash="item04")
			.accordion-trigger Wednesday
			.accordion-content
				p Accordion Content 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		.accordion-item(@click="toggleAccordion", :class="{ 'is-open': isOpen }", data-hash="item05")
			.accordion-trigger Thursday
			.accordion-content
				p Accordion Content 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		.accordion-item(@click="toggleAccordion", :class="{ 'is-open': isOpen }", data-hash="item06")
			.accordion-trigger Friday
			.accordion-content
				p Accordion Content 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		.accordion-item(@click="toggleAccordion", :class="{ 'is-open': isOpen }", data-hash="item07")
			.accordion-trigger Saturday
			.accordion-content
				p Accordion Content 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</template>

<script>
export default {
	name: 'Accordion',
	data () {
		return {
			title: 'Accordion',
			isOpen: false,
		}
	},
	methods: {
		toggleAccordion: function() {
			console.log(this);
			if(this.isOpen) {
				this.isOpen = false;
			} else {
				this.isOpen = true;
			}
		}
	}
}
</script>
