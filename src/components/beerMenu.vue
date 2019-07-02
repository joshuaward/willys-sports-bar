<template lang="pug">
	section.py-0
		.grid-container.menu-section
			.grid-x
				.cell.menu-title
</template>

<script>
export default {
	name: 'beer-menu',
	data() {
		return {
			
		}
	},
	methods: {
		draftBeer: [
			{
				"id": 1,
				"beerName": "Bud Light",
				"beerBrewery": "Anheuser-Busch",
				"beerStyle": "Lager",
				"beerAbv": "4.2%",
				"beerDescription": "Bud Light is brewed using a blend of premium aroma hop varieties, both American-grown and imported, and a combination of barley malts and rice."
			},
			{
				"id": 2,
				"beerName": "Busch Light",
				"beerBrewery": "Anheuser-Busch",
				"beerStyle": "Lager",
				"beerAbv": "4.1%",
				"beerDescription": "Busch Light offers a light, balanced flavor, with fewer calories. It has a pleasant hop aroma and a smooth, slightly sweet finish."
			},
			{
				"id": 3,
				"beerName": "Blue Moon",
				"beerBrewery": "Blue Moon Brewing Co.",
				"beerStyle": "Witbier",
				"beerAbv": "5.4%",
				"beerDescription": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish."
			},
			{
				"id": 4,
				"beerName": "Mad Butcher IPA",
				"beerBrewery": "Mankato Brewery",
				"beerStyle": "American IPA",
				"beerAbv": "6.8%",
				"beerDescription": "An American Style IPA delivers ripe tropical fruit flavors, citrus zest, and a touch of honey from the malt. Deliberately unfiltered."
			},
			{
				"id": 5,
				"beerName": "Crisp Apple",
				"beerBrewery": "Angry Orchard Cider Co.",
				"beerStyle": "Cider",
				"beerAbv": "5.0%",
				"beerDescription": "A crisp and refreshing cider, its fresh apple aroma and slightly sweet, ripe apple flavor make it hard to resist."
			},
			{
				"id": 6,
				"beerName": "Summer Shandy",
				"beerBrewery": "Jacob Leinenkugel Brewing Co.",
				"beerStyle": "Shandy / Radler",
				"beerAbv": "4.2%",
				"beerDescription": "A shandy is beer mixed with a little something extra like soda, juice or ginger ale. Leinenkugel’s® Summer Shandy® is a traditional wheat beer with refreshing natural lemonade flavor that makes it perfect for the sun-splashed summer months."
			},
			{
				"id": 7,
				"beerName": "Miller Light",
				"beerBrewery": "Miller Brewing Co.",
				"beerStyle": "Lager",
				"beerAbv": "4.2%",
				"beerDescription": "Miller Lite, is the great tasting, less filling beer that defined the American light beer category in 1975."
			},
			{
				"id": 8,
				"beerName": "Lion's Paw",
				"beerBrewery": "Fernson Brewing Co.",
				"beerStyle": "Vienna Lager",
				"beerAbv": "4.6%",
				"beerDescription": "We took a recipe that could have been aggressive and made it smooth. Even with its intense copper color and a distinct maltiness, you might be surprised when something that roars so loudly is tame enough to be your new sidekick lager."
			},
			{
				"id": 9,
				"beerName": "Grain Belt BLU",
				"beerBrewery": "August Schell Brewing Co.",
				"beerStyle": "Fruit Beer",
				"beerAbv": "4.7%",
				"beerDescription": "A blueberry lager that is tart, balanced, and refreshing. A delightfully sweet twist on the classic American lager."
			},
			{
				"id": 10,
				"beerName": "Moo Joos",
				"beerBrewery": "Brau Brothers Brewing Co.",
				"beerStyle": "Milk Stout",
				"beerAbv": "5.5%",
				"beerDescription": "MooJoos combines all of the character and complexity of a milk stout and an oatmeal stout. Milk sugar is added to the boil and makes for a full body, while toasted and flaked oats create a silky smooth beer. A deep malt bill builds layers of roasty notes with hints of chocolate, coffee, and anise."
			},
			{
				"id": 11,
				"beerName": "Sameul Adam's Seasonal",
				"beerBrewery": "Boston Beer Co.",
				"beerStyle": "Varies",
				"beerAbv": "Varies",
				"beerDescription": "A seasonal beer is a beer that is typically brewed during or for a particular season, holiday or festival period."
			},
			{
				"id": 12,
				"beerName": "Coors Light",
				"beerBrewery": "Coors Brewing Co.",
				"beerStyle": "Lager",
				"beerAbv": "4.2%",
				"beerDescription": "Coors Light is a light beer that delivers Rocky Mountain cold refreshment, well-balanced flavor with a malty note, low bitterness and light body."
			},
			{
				"id": 13,
				"beerName": "IPA",
				"beerBrewery": "Odell Brewing Co.",
				"beerStyle": "American IPA",
				"beerAbv": "7.0%",
				"beerDescription": "We took the traditional IPA, originally shipped from England to India in the 1700's, and made it bolder and more flavorful - American Style. We've added new varieties of highly aromatic American hops to create a distinctive bitterness profile and an incredible hop character."
			},
			{
				"id": 1,
				"beerName": "Amber",
				"beerBrewery": "Alaskan Brewing Co.",
				"beerStyle": "Altbier",
				"beerAbv": "5.3%",
				"beerDescription": "Richly malty and long on the palate, with just enough hop backing to make this beautiful amber colored “alt” style beer notably well balanced."
			}
		],
		bottleCanBeer: [
			{
				"id": 1,
				"beerName": "Bud Light",
				"beerBrewery": "Anheuser-Busch",
				"beerStyle": "Lager",
				"beerAbv": "4.2%",
				"beerDescription": "Bud Light is brewed using a blend of premium aroma hop varieties, both American-grown and imported, and a combination of barley malts and rice."
			},
			{
				"id": 2,
				"beerName": "Busch Light",
				"beerBrewery": "Anheuser-Busch",
				"beerStyle": "Lager",
				"beerAbv": "4.1%",
				"beerDescription": "Busch Light offers a light, balanced flavor, with fewer calories. It has a pleasant hop aroma and a smooth, slightly sweet finish."
			},
			{
				"id": 3,
				"beerName": "Miller Light",
				"beerBrewery": "Miller Brewing Co.",
				"beerStyle": "Lager",
				"beerAbv": "4.2%",
				"beerDescription": "Miller Lite, is the great tasting, less filling beer that defined the American light beer category in 1975."
			},
			{
				"id": 4,
				"beerName": "Coors Light",
				"beerBrewery": "Coors Brewing Co.",
				"beerStyle": "Lager",
				"beerAbv": "4.2%",
				"beerDescription": "Coors Light is a light beer that delivers Rocky Mountain cold refreshment, well-balanced flavor with a malty note, low bitterness and light body."
			},
			{
				"id": 1,
				"beerName": "XXX",
				"beerBrewery": "XXX",
				"beerStyle": "XXX",
				"beerAbv": "XXX%",
				"beerDescription": "XXX"
			},
			{
				"id": 1,
				"beerName": "XXX",
				"beerBrewery": "XXX",
				"beerStyle": "XXX",
				"beerAbv": "XXX%",
				"beerDescription": "XXX"
			},
			{
				"id": 1,
				"beerName": "XXX",
				"beerBrewery": "XXX",
				"beerStyle": "XXX",
				"beerAbv": "XXX%",
				"beerDescription": "XXX"
			},
			{
				"id": 1,
				"beerName": "XXX",
				"beerBrewery": "XXX",
				"beerStyle": "XXX",
				"beerAbv": "XXX%",
				"beerDescription": "XXX"
			},
			{
				"id": 1,
				"beerName": "XXX",
				"beerBrewery": "XXX",
				"beerStyle": "XXX",
				"beerAbv": "XXX%",
				"beerDescription": "XXX"
			},
			{
				"id": 1,
				"beerName": "XXX",
				"beerBrewery": "XXX",
				"beerStyle": "XXX",
				"beerAbv": "XXX%",
				"beerDescription": "XXX"
			},
			{
				"id": 1,
				"beerName": "XXX",
				"beerBrewery": "XXX",
				"beerStyle": "XXX",
				"beerAbv": "XXX%",
				"beerDescription": "XXX"
			},
			{
				"id": 1,
				"beerName": "XXX",
				"beerBrewery": "XXX",
				"beerStyle": "XXX",
				"beerAbv": "XXX%",
				"beerDescription": "XXX"
			},
			{
				"id": 1,
				"beerName": "XXX",
				"beerBrewery": "XXX",
				"beerStyle": "XXX",
				"beerAbv": "XXX%",
				"beerDescription": "XXX"
			},
			{
				"id": 1,
				"beerName": "XXX",
				"beerBrewery": "XXX",
				"beerStyle": "XXX",
				"beerAbv": "XXX%",
				"beerDescription": "XXX"
			},
			{
				"id": 1,
				"beerName": "XXX",
				"beerBrewery": "XXX",
				"beerStyle": "XXX",
				"beerAbv": "XXX%",
				"beerDescription": "XXX"
			},
			{
				"id": 1,
				"beerName": "XXX",
				"beerBrewery": "XXX",
				"beerStyle": "XXX",
				"beerAbv": "XXX%",
				"beerDescription": "XXX"
			},
			{
				"id": 1,
				"beerName": "XXX",
				"beerBrewery": "XXX",
				"beerStyle": "XXX",
				"beerAbv": "XXX%",
				"beerDescription": "XXX"
			},
			{
				"id": 1,
				"beerName": "XXX",
				"beerBrewery": "XXX",
				"beerStyle": "XXX",
				"beerAbv": "XXX%",
				"beerDescription": "XXX"
			}
		]
	}
}
</script>