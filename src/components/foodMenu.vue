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
									p Ranch, BBQ, Honey Mustard, Beu Cheese, Buffalo Wing Sauce or Raspberry Habanero. Extra portions $0.50.
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
						.menu-flexItem #[strong Veggie] $7.99
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
						p all sandwiches served with your choice of fries, tater tots or side salad. Substitute steak fries, onion rings or sweet potato fries for only $1.50
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
					"itemDescription": "Full-flavored Cheddar cheese and spicy diced jalapeño in crispy potato breading."
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
					"itemDescription": "Thick sweet yellow onion coated with a Japanese-stylebreading deep fried to a golden brown."
				},
				{
					"id": 4,
					"itemName": "Chicken Strips",
					"itemPrice": "$8.49",
					"itemDescription": "Four golden breaded chicken tenders served with a choice of dipping sauce."
				},
				{
					"id": 5,
					"itemName": "Cheese Balls",
					"itemPrice": "$7.99",
					"itemDescription": "Made from aged fine cheddar cheese and dipped in a golden batter and fried to a golden brown."
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
					"itemDescription": "Diced ham and swiss cheese fill this crispy chicken appetizer (7)."
				},
				{
					"id": 8,
					"itemName": "Steak & Cheese Mini Tacos",
					"itemPrice": "$7.99",
					"itemDescription": "Spicy steak and cheese tacos shrunk down to size and deep fried."
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
					"itemDescription": "Tender beef tips deep fried and seasoned with your choice of dipping sauce."
				},
				{
					"id": 11,
					"itemName": "Ultimate Platter",
					"itemPrice": "$18.99",
					"itemDescription": "You're in control and can choose and THREE FULL SIZE appetizers to complete your ultimate comboplatter along with your choice of two dipping sauces."
				},
			],
			wings: [
				{
					"id": 1,
					"itemName": "Boneless Chicken Wings <small>(1/2 pound)</small>",
					"itemPrice": "$8.99",
					"itemDescription": "Golden breaded boneless chicken wings served as-is or prepared in your favorite sauce."
				},
				{
					"id": 2,
					"itemName": "Bone-In Wings",
					"itemPrice": "$6.99",
					"itemDescription": "Naked chicken wings served as-is or prepared in your favorite sauce (6)."
				},
			],
			salads: [
				{
					"id": 1,
					"itemName": "Chef",
					"itemDescription": "Oven roasted turkey breast and honey ham on top of crispy greens topped with shredded cheese, egg, fresh tomatoes, onions and your choice of dressing."
				},
				{
					"id": 2,
					"itemName": "Grilled Chicken",
					"itemDescription": "Grilled chicken breast sliced and placed on top of fresh greens, egg, tomatoes, onions and shredded cheese served with your choice of dressing."
				},
				{
					"id": 3,
					"itemName": "Crispy Chicken",
					"itemDescription": "We take our crispy and juicy chicken tenders and place them on top of some fresh greens with egg, tomatoes, onions and shredded cheese with your choice of dressing."
				},
				{
					"id": 4,
					"itemName": "Buffalo Chicken",
					"itemDescription": "Grilled or crispy chicken tossed in our buffalo wind sauce placed on top of fresh greens with egg, tomatoes, onions and shredded cheese with your choice of dressing."
				},
				{
					"id": 5,
					"itemName": "Sizzlin' Philly Steak",
					"itemDescription": "Grilled sirloin steak with sauteed green peppers and onions served on a fresh bed of greens with egg, green peppers, onions, tomatoes, cheese and crispy onion straws."
				},
			],
			baskets: [
				{
					"id": 1,
					"itemName": "Boneless Chicken Wings",
					"itemPrice": "$10.49",
					"itemDescription": "Golden breaded boneless chicken wings served as-is or in your favorite sauce."
				},
				{
					"id": 2,
					"itemName": "Chislic",
					"itemPrice": "$11.99",
					"itemDescription": "Tender beef tips deep fried and seasoned with your choice fo dipping sauce."
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
					"itemName": "Bacon Cheese Burger",
					"itemPrice": "$10.29",
					"itemDescription": "Grilled Angus burger served with melted cheese and crispy bacon on a toasted bun."
				},
				{
					"id": 3,
					"itemName": "Tex-Mex Burger",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled Angus burger with grilled jalapeños, BBQ sauce, bacon and spicy pepperjack cheese."
				},
				{
					"id": 4,
					"itemName": "Russian Burger",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled Angus burger with grilled mushrooms and onions, sour cream, topped with melted Swiss cheese on a toasted bun."
				},
				{
					"id": 5,
					"itemName": "Mushroom & Swiss Burger",
					"itemPrice": "$10.29",
					"itemDescription": "This is a mushroom lover's dream a 1/3 lb Angus beef patty loaded with fresh sauteed mushrooms and creamy Swiss cheese."
				},
				{
					"id": 6,
					"itemName": "Ranch Burger",
					"itemPrice": "$10.29",
					"itemDescription": "Grilled Angus burger with creamy ranch dressing, crispy bacon topped with melted Swiss cheese on a toasted bun."
				},
				{
					"id": 7,
					"itemName": "Patty Melt",
					"itemPrice": "$10.29",
					"itemDescription": "Grilled Angus burger served on grilled wheat bread with sauteed onions and melted Swiss Cheese."
				},
				{
					"id": 8,
					"itemName": "German Patty Melt",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled Angus burger piled high with grilled onions and sauerkraut. Topped with melted Swiss cheese on a toasted bun."
				},
				{
					"id": 9,
					"itemName": "Texas Patty Melt",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled Angus burger smothered in jalapeños, BBQ sauce and spicy pepperjack cheese served on a grilled white bread."
				},
				{
					"id": 10,
					"itemName": "Bacon Bleu Cheese Burger",
					"itemPrice": "$10.29",
					"itemDescription": "Grilled Angus burger topped with melted bleu cheese and double smoked bacon on a toasted bun."
				},
				{
					"id": 11,
					"itemName": "Frisco Burger",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled Angus burger topped with sauteed mushrooms and onions, bacon, American and Swiss cheese on a frisco style bun."
				},
				{
					"id": 12,
					"itemName": "Cheese Burger",
					"itemPrice": "$8.99",
					"itemDescription": "Grilled Angus burger with melted American cheese served on a toasted bun with pickles on the side."
				},
				{
					"id": 13,
					"itemName": "Grand Burger",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled Angus burger topped with a fried egg, American cheese and double smoked bacon on a toasted bun."
				},
				{
					"id": 14,
					"itemName": "Haystack Burger",
					"itemPrice": "$10.29",
					"itemDescription": "Grilled Angus burger topped with seasoned onion straws held together with melted American cheese and BBQ sauce."
				},
				{
					"id": 15,
					"itemName": "Barn Burner Burger",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled Angus burger topped with onion straws, crispy bacon and held together with spicy pepperjack cheeseand our southwest sauce."
				},
				{
					"id": 16,
					"itemName": "Garlic Cheese Burger",
					"itemPrice": "$10.29",
					"itemDescription": "Grilled Angus burger covered in garlic herb seasoning, garlic mayo and melted Swiss cheese."
				},
				{
					"id": 17,
					"itemName": "Santa Fe Burger",
					"itemPrice": "$10.29",
					"itemDescription": "Grilled Angus burger brushed with southwest sauce, crispy bacon and spicy pepperjack cheese."
				},
				{
					"id": 18,
					"itemName": "Western Burger",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled Angus burger topped with crispy bacon with seasoned onion straws held together with melted American cheese and BBQ sauce."
				},
				{
					"id": 19,
					"itemName": "Peanut Butter Burger",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled Angus burger topped with double smoked bacon, cheese and peanut butter."
				},
				{
					"id": 20,
					"itemName": "57 Burger",
					"itemPrice": "$10.29",
					"itemDescription": "Grilled Angus burger topped with crispy onion straws, 57 sauce and melted Swiss cheese."
				},
				{
					"id": 21,
					"itemName": "Bayou Burger",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled Angus burger topped with crispy bacon, ,elted bleu cheese and our tangy buffalo sauce."
				},
				{
					"id": 22,
					"itemName": "Mesquite Burger",
					"itemPrice": "$10.29",
					"itemDescription": "Grilled Angus burger covered in a zesty mesquite sauce and melted pepperjack cheese."
				},
			],
			sandwiches: [
				{
					"id": 1,
					"itemName": "Grilled or Crispy Chicken Fillet",
					"itemPrice": "$9.99",
					"itemDescription": "Choose between golden breaded or tender grilled chicken served on a toasted bun with lettuce, tomato, onion and mayo."
				},
				{
					"id": 2,
					"itemName": "Turkey Bacon Melt",
					"itemPrice": "$10.49",
					"itemDescription": "Smoked turkey, crispy bacon and melted Swiss cheese piled high on a toasted hoagie bun with lettuce, tomato, onion and mayo."
				},
				{
					"id": 3,
					"itemName": "Grilled Chicken Bacon Swiss",
					"itemPrice": "$10.49",
					"itemDescription": "Grilled chicken breast topped with double smoked bacon and melted Swiss cheese on a toasted bun with lettuce, tomato, onion and mayo."
				},
				{
					"id": 4,
					"itemName": "Buffalo Chicken",
					"itemPrice": "$10.49",
					"itemDescription": "Tender grilled or golden crispy chicken brest tossed in our special hot wing sauce. Covered with melted blue cheese on a toasted bun."
				},
				{
					"id": 5,
					"itemName": "Chicken Cordon Bleu",
					"itemPrice": "$10.49",
					"itemDescription": "Gilled or crispy chicken breast covered with honey ham and melted Swiss cheese on a toasted bun."
				},
				{
					"id": 6,
					"itemName": "Crispy Mesquite Chicken",
					"itemPrice": "$10.49",
					"itemDescription": "Golden breaded chicken breast topped with out smokey Mesquite ranch and spicy pepperjack cheese."
				},
				{
					"id": 7,
					"itemName": "Philly Steak & Cheese",
					"itemPrice": "$9.99",
					"itemDescription": "Grilled sirloin steak smothered in peppers and onions stuffed inside a grilled hoagie bun with melted Swiss cheese."
				},
				{
					"id": 8,
					"itemName": "Reuben",
					"itemPrice": "$10.49",
					"itemDescription": "Thin sliced corned beef piled high with sauerkraut, Swiss cheese and 1,000 island dressing on grilled rye bread."
				},
				{
					"id": 9,
					"itemName": "BLT",
					"itemPrice": "$10.49",
					"itemDescription": "Double smoked bacon, crispy lettuce and fresh ripe tomatoes served on white or wheat bread."
				},
				{
					"id": 10,
					"itemName": "Ham Stacker",
					"itemPrice": "$10.29",
					"itemDescription": "Thinly sliced ham stacked high with melted Ameican and Swiss cheese on a toasted hoagie bun."
				},
				{
					"id": 11,
					"itemName": "Club Melt",
					"itemPrice": "$10.49",
					"itemDescription": "Sliced ham, smoked turkey and crispy bacon grilled up with melted American and Swiss cheese piled high on a toasted hoagie bun."
				},
			],
			wraps: [
				{
					"id": 1,
					"itemName": "Grilled Chicken",
					"itemDescription": "Grilled chicken breast sliced and placed on top of fresh greens, tomatoes, onions and shredded cheese served with your choice of dressing."
				},
				{
					"id": 2,
					"itemName": "Crispy Chicken",
					"itemDescription": "We take our crispy amd juicy chicken tenders and place them on top of fresh greens with tomatoes, onions and shredded cheese with your choice of dressing."
				},
				{
					"id": 3,
					"itemName": "Buffalo Chicken",
					"itemDescription": "Grilled or crispy chicken tossed in our buffalo wing sauce placed on top of fresh greens with tomatoesm onions and shredded cheese with your choice of dressing."
				},
				{
					"id": 4,
					"itemName": "Sizzlin' Philly Steak",
					"itemDescription": "Grilled sirloin steak with sauteed onions and peppers on a fresh bed of greens with tomato, onion and shredded cheese."
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
