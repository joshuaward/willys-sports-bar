<template lang="pug">
	section.menu-foodMenu.py-0
		.menu-section
			.grid-container
				.grid-x.grid-padding-x
					.cell
						.menu-title
							h2.variane.colorPrimary.mb-2 Starting Line
					.cell.medium-6(v-for="item in startingLine")
						.menu-item
							.menu-itemName {{ item.itemName }}
							.menu-itemPrice {{ item.itemPrice }}
							.menu-itemDescription {{ item.itemDescription }}
					.cell.medium-6
						.callout-menu.callout-menu--yellow
							.callout-inner
								.callout-title.rye Dipping Sauces.. #[small.avenir (choose one per order)]
								.callout-content
									p Ranch, BBQ, Honey Mustard, Bleu Cheese, Buffalo Wing Sauce or Raspberry Habanero. Extra portions $0.50.
		.menu-section.menu-primary.menu-primary--fullWidth
			.grid-container
				.grid-x.grid-padding-x
					.cell
						.menu-title.menu-title--underline
							h2.rye.colorWhite.mb-2 Wings #[span.variane.colorSecondary and things...]
					.cell.medium-6(v-for="item in wings")
						.menu-item
							.menu-itemName(v-html="item.itemName")
							.menu-itemPrice {{ item.itemPrice }}
							.menu-itemDescription {{ item.itemDescription }}
		.grid-container.menu-section.menu-section--borderBottom
			.grid-x.grid-padding-x
				.cell
					.menu-title.mb-2
						h2.variane.colorPrimary Salads
						span.menu-titlePrice Your Choice only #[strong.colorPrimary $9.99]
				.cell.medium-6(v-for="item in salads")
					.menu-item
						.menu-itemName {{ item.itemName }}
						.menu-itemDescription {{ item.itemDescription }}
		.grid-container.menu-section.menu-section--borderBottom
			.grid-x.grid-padding-x
				.cell
					.menu-title.mb-2
						h2.variane.colorPrimary Baskets
				.cell.medium-6(v-for="item in baskets")
					.menu-item
						.menu-itemName {{ item.itemName }}
						.menu-itemPrice {{ item.itemPrice }}
						.menu-itemDescription {{ item.itemDescription }}
				.cell.medium-6.align-self-center
					.callout-menu.callout-menu--primary
						p All baskets served with steak fries and toast with your choice of dipping sauce
		.grid-container.menu-section.pb-5
			.grid-x.grid-padding-x.align-center
				.cell
					.menu-title.menu-title--center.mb-2
						h2.variane.colorPrimary.textCenter.mr-0 Quesadillas
				.cell.medium-7
					.menu-item.menu-item--center
						p.textCenter Grilled flour tortilla without special cheese blend. Try adding veggies or chicken.
						.menu-flexItem #[strong Veggie] $8.99
						.menu-flexItem #[strong Chicken] $10.99
						.menu-flexItem #[strong Philly] $10.99
		.grid-container.menu-section.menu-primary.menu-primary--noBorder.pb-3
			.grid-x.grid-padding-x.align-center
				.cell.medium-6
					.menu-preHeader
						h2 1/3
						p LB Grilled Angus Beef
							span Make it a #[strong DELUXE] for a $1.00 more
			.grid-x.grid-padding-x
				.cell
					.menu-title.mt-3
						h2.variane.colorWhite.mb-2 Burgers
				.cell.medium-6(v-for="item in burgers")
					.menu-item
						.menu-itemName {{ item.itemName }}
						.menu-itemPrice {{ item.itemPrice }}
						.menu-itemDescription {{ item.itemDescription }}
				.cell.medium-6
					.callout-menu.callout-menu--basic
						p All burgers are served with your choice of fries, tater tots or side salad. Substitute steak fries, onion rings or sweet potato fires for only $1.50.
			.scroller
				button(@click="scrollTo('sandwiches')")
					i.fas.fa-chevron-down
		.anchor(ref="sandwiches")
		.grid-container.menu-section.menu-section--borderBottom
			.grid-x.grid-padding-x
				.cell
					.menu-title.mb-2
						h2.variane.colorPrimary Sandwiches
				.cell.medium-6(v-for="item in sandwiches")
					.menu-item
						.menu-itemName {{ item.itemName }}
						.menu-itemPrice {{ item.itemPrice }}
						.menu-itemDescription {{ item.itemDescription }}
				.cell.medium-6
					.callout-menu.callout-menu--primary
						p All sandwiches served with your choice of fries, tater tots or side salad. Substitute steak fries, onion rings or sweet potato fries for only $1.50
		.grid-container.menu-section
			.grid-x.grid-padding-x
				.cell
					.menu-title.mb-2
						h2.variane.colorPrimary Wraps
						span.menu-titlePrice Your Choice only #[strong.colorPrimary $10.49]
				.cell.medium-6(v-for="item in wraps")
					.menu-item
						.menu-itemName {{ item.itemName }}
						.menu-itemDescription {{ item.itemDescription }}
</template>
	
<script>
export default {
	name: 'food-menu',
	data() {
		return {
			startingLine: [
				{
					"id": 1,
					"itemName": "Jalapeño Cheddar Poppers",
					"itemPrice": "$8.49",
					"itemDescription": "Full-flavored cheddar cheese and spicy diced jalapeño in crispy potato breading."
				},
				{
					"id": 2,
					"itemName": "Spicy Beer Battered Pub Pickles",
					"itemPrice": "$7.99",
					"itemDescription": "Pickle spears that are dipped in a spicy yet crunchy beer batter making a pickle lovers dream."
				},
				{
					"id": 3,
					"itemName": "Gourmet onion Rings",
					"itemPrice": "$7.99",
					"itemDescription": "Thick sweet yellow onion coated with a Japanese-style breading deep fried to a golden brown."
				},
				{
					"id": 4,
					"itemName": "Chicken Strips",
					"itemPrice": "$8.49",
					"itemDescription": "Four golden breaded chicken tenders served with choice of dipping sauce."
				},
				{
					"id": 5,
					"itemName": "Cheese Balls",
					"itemPrice": "$7.99",
					"itemDescription": "Made from aged fine cheddar cheese, dipped in a golden batter & fried to a golden brown."
				},
				{
					"id": 6,
					"itemName": "Portabella Mushroom Strips",
					"itemPrice": "$7.99",
					"itemDescription": "Crispy breaded portabella slices fried to a golden brown."
				},
				{
					"id": 7,
					"itemName": "Chicken Cordon Bleu Bites",
					"itemPrice": "$7.99",
					"itemDescription": "Diced ham & Swiss cheese fill this crispy chicken appetizer (7)."
				},
				{
					"id": 8,
					"itemName": "Steak & Cheese Mini Tacos",
					"itemPrice": "$7.99",
					"itemDescription": "Spicy steak & cheese tacos shrunk down to size & deep fried."
				},
				{
					"id": 9,
					"itemName": "Shrimp",
					"itemPrice": "$8.49",
					"itemDescription": "Golden breaded shrimp served with cocktail sauce."
				},
				{
					"id": 10,
					"itemName": "Chislic",
					"itemPrice": "$9.99",
					"itemDescription": "Tender beef tips deep fried & seasoned with your choice of dipping sauce."
				},
				{
					"id": 11,
					"itemName": "The Willy's Platter",
					"itemPrice": "$15.99",
					"itemDescription": "Cheeseballs, Onion Rings and Mini Tacos. No Substitutions."
				},
				{
					"id": 12,
					"itemName": "Ultimate Platter",
					"itemPrice": "$19.99",
					"itemDescription": "You're in control & can choose from any Three Full Size (no duplicates) appetizers to complete your ultimate combo platter along with your choice of two dipping sauces."
				},
			],
			wings: [
				{
					"id": 1,
					"itemName": "Boneless Chicken Wings",
					"itemPrice": "$8.99",
					"itemDescription": "1/2 lb, golden breaded boneless chicken wings served naked or prepared in your favorite sauce."
				},
				{
					"id": 2,
					"itemName": "Bone-In Wings",
					"itemPrice": "$6.99",
					"itemDescription": "8 Naked chicken wings served as is or prepared in your favorite sauce."
				},
			],
			salads: [
				{
					"id": 1,
					"itemName": "Chef",
					"itemDescription": "Oven roasted turi<ey breast & honey ham on top of crispy greens topped with shredded cheese, egg, fresh tomatoes, onions & your choice of dressing."
				},
				{
					"id": 2,
					"itemName": "Grilled Chicken",
					"itemDescription": "Grilled chicken breast sliced & placed on top of fresh greens, egg, tomatoes, onions & shredded cheese served with your choice of dressing."
				},
				{
					"id": 3,
					"itemName": "Crispy Chicken",
					"itemDescription": "We take our crispy & juicy chicken tenders & place them on top of some fresh greens with egg, tomatoes, onions & shredded cheese with your choice of dressing."
				},
				{
					"id": 4,
					"itemName": "Buffalo Chicken",
					"itemDescription": "Grilled or crispy chicken tossed in our buffalo wing sauce placed on top of fresh greens with egg, tomatoes, onions & shredded cheese with your choice of dressing."
				},
				{
					"id": 5,
					"itemName": "Sizzlin' Philly Steak",
					"itemDescription": "Grilled sirloin steak with sauteed green peppers & onions served on a fresh bed of greens with egg, green peppers, onions, tomatoes, cheese & crispy onion straws."
				},
			],
			baskets: [
				{
					"id": 1,
					"itemName": "Boneless Chicken Wings",
					"itemPrice": "$10.49",
					"itemDescription": "Golden breaded boneless chicken wings served as is or in your favorite sauce."
				},
				{
					"id": 2,
					"itemName": "Chislic",
					"itemPrice": "$11.99",
					"itemDescription": "Tender beef tips deep fried & seasoned with your choice of dipping sauce."
				},
				{
					"id": 3,
					"itemName": "Chicken Strips",
					"itemPrice": "$10.49",
					"itemDescription": "Four golden breaded chicken tenders with your choice of dipping sauce."
				},
				{
					"id": 4,
					"itemName": "Shrimp",
					"itemPrice": "$10.49",
					"itemDescription": "Golden breaded shrimp served with cocktail sauce."
				},
			],
			burgers: [
				{
					"id": 1,
					"itemName": "Hamburger",
					"itemPrice": "$8.49",
					"itemDescription": "Grilled angus burger on a toasted bun with pickles on the side."
				},
				{
					"id": 2,
					"itemName": "1/3 lb. Grilled Angus",
					"itemPrice": "$8.49",
					"itemDescription": "Make it a Deluxe for $0.75 more."
				},
				{
					"id": 3,
					"itemName": "Bacon Cheese Burger",
					"itemPrice": "$10.29",
					"itemDescription": "Grilled Angus Burger served with melted American cheese & crispy bacon on a toasted bun."
				},
				{
					"id": 4,
					"itemName": "Tex-Mex Burger",
					"itemPrice": "$10.69",
					"itemDescription": "Grilled Angus Burger with grilled jalapeiios, BBQ sauce, bacon & spicy Pepperjack cheese."
				},
				{
					"id": 5,
					"itemName": "Russian Burger",
					"itemPrice": "$10.69",
					"itemDescription": "Grilled Angus Burger with grilled mushrooms & onions, sour cream & topped with melted Swiss cheese on a toasted bun."
				},
				{
					"id": 6,
					"itemName": "Mushroom & Swiss Burger",
					"itemPrice": "$10.49",
					"itemDescription": "This is a mushroom lovers dream, a 1/3 lb. Angus beef patty loaded with fresh sauteed mushrooms & creamy Swiss cheese."
				},
				{
					"id": 7,
					"itemName": "Ranch Burger",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled Angus Burger with creamy ranch dressing, crispy bacon & topped with melted Swiss cheese on a toasted bun."
				},
				{
					"id": 8,
					"itemName": "Patty Melt",
					"itemPrice": "$10.29",
					"itemDescription": "Grilled Angus burger served on grilled wheat bread with sauteed onions and melted Swiss Cheese."
				},
				{
					"id": 9,
					"itemName": "German Patty Melt",
					"itemPrice": "$10.69",
					"itemDescription": "Grilled Angus Burger piled high with grilled onions & sauerkraut. Topped with melted Swiss cheese on toasted wheat bread."
				},
				{
					"id": 10,
					"itemName": "Texas Patty Melt",
					"itemPrice": "$10.69",
					"itemDescription": "Grilled Angus Burger smothered in jalapeiios, BBQ sauce & spicy Pepperjack cheese served on grilled white bread."
				},
				{
					"id": 11,
					"itemName": "Bacon Bleu Cheese Burger",
					"itemPrice": "$10.29",
					"itemDescription": "Grilled Angus Burger topped with melted bleu cheese & double smoked bacon on a toasted bun."
				},
				{
					"id": 12,
					"itemName": "Frisco Burger",
					"itemPrice": "$10.69",
					"itemDescription": "Grilled Angus Burger topped with sauteed mushrooms & onions, bacon, American & Swiss cheese on a frisco style bun."
				},
				{
					"id": 13,
					"itemName": "Cheeseburger",
					"itemPrice": "$9.49",
					"itemDescription": "Grilled Angus Burger with melted American cheese served on a toasted bun with pickles on side."
				},
				{
					"id": 14,
					"itemName": "Grand Burger",
					"itemPrice": "$10.69",
					"itemDescription": "Grilled Angus Burger topped with a fried egg, American cheese and double smoked bacon on a toasted bun."
				},
				{
					"id": 15,
					"itemName": "Haystack Burger",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled Angus Burger topped with seasoned onion straws held together with melted American cheese & BBQ sauce."
				},
				{
					"id": 16,
					"itemName": "Barn Burner Burger",
					"itemPrice": "$10.69",
					"itemDescription": "Grilled Angus Burger topped with our onion straws, crispy bacon & held together with spicy Pepperjack cheese & our Southwest sauce."
				},
				{
					"id": 17,
					"itemName": "Garlic Cheese Burger",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled Angus Burger covered in garlic herb seasoning, garlic mayo & melted Swiss cheese."
				},
				{
					"id": 18,
					"itemName": "Santa Fe Burger",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled Angus Burger brushed with Southwest sauce, topped with crispy bacon & spicy Pepperjack cheese."
				},
				{
					"id": 19,
					"itemName": "Western Burger",
					"itemPrice": "$10.69",
					"itemDescription": "Grilled Angus Burger topped with crispy bacon with seasoned onion straws held together with melted American cheese & BBQ sauce."
				},
				{
					"id": 20,
					"itemName": "Peanut Butter Burger",
					"itemPrice": "$10.69",
					"itemDescription": "Grilled Angus Burger topped with double smoked bacon, American cheese & peanut butter."
				},
				{
					"id": 21,
					"itemName": "57 Burger",
					"itemPrice": "$10.29",
					"itemDescription": "Grilled Angus Burger topped with crispy onion straws, '57 sauce & melted Swiss cheese."
				},
				{
					"id": 22,
					"itemName": "Bayou Burger",
					"itemPrice": "$10.69",
					"itemDescription": "Grilled Angus Burger topped with crispy bacon, melted bleu cheese & our tangy buffalo sauce."
				},
				{
					"id": 23,
					"itemName": "Mesquite Burger",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled Angus Burger covered in a zesty Mesquite sauce & melted Pepperjack cheese."
				},
			],
			sandwiches: [
				{
					"id": 1,
					"itemName": "Grilled or Crispy Chicken Fillet",
					"itemPrice": "$9.99",
					"itemDescription": "Choose between golden breaded or tender grilled chicken served on a toasted bun with pickle & mayo."
				},
				{
					"id": 2,
					"itemName": "Turkey Bacon Melt",
					"itemPrice": "$10.49",
					"itemDescription": "Smoked turkey, crispy bacon & melted Swiss cheese piled high on a toasted hoagie bun with lettuce, tomato, onion & mayo."
				},
				{
					"id": 3,
					"itemName": "Grilled Chicken Bacon Swiss",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled chicken breast topped with double smoked bacon & melted Swiss cheese on a toasted bun with pickle & mayo."
				},
				{
					"id": 4,
					"itemName": "Buffalo Chicken",
					"itemPrice": "$10.49",
					"itemDescription": "Tender grilled or golden crispy chicken breast tossed in our special hot wing sauce. Covered with melted bleu cheese on a toasted bun."
				},
				{
					"id": 5,
					"itemName": "Chicken Cordon Bleu",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled or crispy chicken breast covered with honey ham & melted Swiss cheese on a toasted bun with pickle and mayo."
				},
				{
					"id": 6,
					"itemName": "Crispy Mesquite Chicken",
					"itemPrice": "$10.49",
					"itemDescription": "Golden breaded chicken breast topped with our smokey Mesquite ranch & spicy Pepperjack cheese."
				},
				{
					"id": 7,
					"itemName": "Philly Steak & Cheese",
					"itemPrice": "$10.99",
					"itemDescription": "Grilled sirloin steak smothered in peppers & onions stuffed inside a grilled hoagie bun with melted Swiss cheese. Add mushrooms $0.99"
				},
				{
					"id": 8,
					"itemName": "Reuben",
					"itemPrice": "$10.49",
					"itemDescription": "Thin sliced corned beef piled high with sauerkraut Swiss cheese & 1000 island dressing on grilled rye bread."
				},
				{
					"id": 9,
					"itemName": "BLT",
					"itemPrice": "$10.49",
					"itemDescription": "Double smoked bacon, crispy lettuce & fresh red ripe tomatoes served on white or wheat toast."
				},
				{
					"id": 10,
					"itemName": "Ham Stacker",
					"itemPrice": "$10.29",
					"itemDescription": "Thinly sliced ham stacked high with melted American & Swiss cheese on a toasted hoagie bun."
				},
				{
					"id": 11,
					"itemName": "Club Melt",
					"itemPrice": "$10.49",
					"itemDescription": "Sliced ham, smoked turkey & crispy bacon grilled up with melted American & Swiss cheese piled high on a toasted hoagie bun."
				},
			],
			wraps: [
				{
					"id": 1,
					"itemName": "Grilled Chicken",
					"itemDescription": "Grilled chicken breast sliced & placed on top of fresh greens, tomatoes, onions & shredded cheese served with your choice of dressing."
				},
				{
					"id": 2,
					"itemName": "Crispy Chicken",
					"itemDescription": "We take our crispy & juicy chicken tenders & place them on top of fresh greens with tomatoes, onions & shredded cheese with your choice of dressing."
				},
				{
					"id": 3,
					"itemName": "Buffalo Chicken",
					"itemDescription": "Grilled or crispy chicken tossed in our buffalo wing sauce placed on top of fresh greens with tomatoes, onions & shredded cheese with your choice of dressing."
				},
				{
					"id": 4,
					"itemName": "Sizzlin' Philly Steak",
					"itemDescription": "Grilled sirloin steak with sauteed onions & peppers on a fresh bed of greens with tomato, onion & shredded cheese."
				},
			]
		}
	},
	methods: {
		scrollTo(refName) {
			var element = this.$refs[refName];
			var top = element.offsetTop + 250;
			window.scrollTo(0, top);
		}
	}
}
</script>
