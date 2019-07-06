<template lang="pug">
	section.menu-beerMenu.py-0
		.grid-container.menu-section
			.grid-x
				.cell.menu-title
					h2.variane.colorPrimary.mb-2 Draft Beers
				.cell.medium-6.menu-item(v-for="item in draftBeer")
					.menu-itemName {{ item.beerName }}
					.menu-itemAbv {{ item.beerAbv }}
					.menu-itemBrewery {{ item.beerBrewery }}
					.menu-itemStyle {{ item.beerStyle }}
					.menu-itemDescription {{ item.beerDescription }}
		.grid-container.menu-section
			.grid-x
				.cell.menu-title
					h2.variane.colorPrimary.mb-2 Bottles & Cans
				.cell.medium-6.menu-item(v-for="item in bottleCanBeer")
					.menu-itemName {{ item.beerName }}
					.menu-itemAbv {{ item.beerAbv }}
					.menu-itemBrewery {{ item.beerBrewery }}
					.menu-itemStyle {{ item.beerStyle }}
					.menu-itemDescription {{ item.beerDescription }}
</template>

<script>
export default {
	name: 'beer-menu',
	data() {
		return {
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
					"id": 5,
					"beerName": "Miller 64",
					"beerBrewery": "Miller Brewing Co.",
					"beerStyle": "Lager",
					"beerAbv": "2.8%",
					"beerDescription": "Basically water."
				},
				{
					"id": 6,
					"beerName": "Old Milwuakee Light",
					"beerBrewery": "Pabst Brewing Co.",
					"beerStyle": "Lager",
					"beerAbv": "3.8%",
					"beerDescription": "What your grandpa used to drink before you knew what beer was."
				},
				{
					"id": 7,
					"beerName": "Pabst Blue Ribbon",
					"beerBrewery": "Pabst Brewing Co.",
					"beerStyle": "Lager",
					"beerAbv": "4.6%",
					"beerDescription": "This is the original Pabst Blue Ribbon Beer. Nature's choicest products provide its prized flavor. Only the finest of hops and grains are used. Selected as America's Best in 1893."
				},
				{
					"id": 8,
					"beerName": "Grain Belt Premium",
					"beerBrewery": "August Schnell Brewing Co.",
					"beerStyle": "Lager",
					"beerAbv": "4.9%",
					"beerDescription": "In the 1940s, around the same time Grain Belt built its famous bottle cap sign overlooking the Mississippi River in Northeast Minneapolis, they introduced a “Beer of Exceptional Quality”–Premium. With its crisp, unique flavor, Premium quickly became the flagship of the Grain Belt brand. And still is to this day."
				},
				{
					"id": 9,
					"beerName": "Miller Genuine Draft",
					"beerBrewery": "Miller Brewing Co.",
					"beerStyle": "Lager",
					"beerAbv": "4.6%",
					"beerDescription": "Miller Genuine Draft debuted in 1985 with fresh, smooth flavor that's a result of being cold-filtered four times."
				},
				{
					"id": 10,
					"beerName": "Miller High Life",
					"beerBrewery": "MIller Brewing Co.",
					"beerStyle": "Lager",
					"beerAbv": "4.6%",
					"beerDescription": "Miller High Life, also known as the Champagne of Beers, is a quintessentially classic, American-style lager. To this day, Miller High Life continues to be faithfully brewed as a golden pilsner, utilizing light-stable galena hops from the Pacific Northwest and a select combination of malted barley."
				},
				{
					"id": 11,
					"beerName": "Coors Banquet",
					"beerBrewery": "Coors Brewing Co.",
					"beerStyle": "Lager",
					"beerAbv": "5.0%",
					"beerDescription": "Coors beer, first introduced by Adolph Coors in April 1874, is brewed in the Rockies for a uniquely crisp, clean, and drinkable 'Mile High Taste'."
				},
				{
					"id": 12,
					"beerName": "Redbridge",
					"beerBrewery": "Anheuser-Busch",
					"beerStyle": "Gluten Free",
					"beerAbv": "4.0%",
					"beerDescription": "Redbridge is made without wheat or barley, so the approximately 3.2 million consumers who are unable to drink beer made with barley due to Celiac Disease or because they follow a wheat-free or gluten-free diet can once again enjoy a great tasting beer. Redbridge is a rich, full-bodied lager brewed from sorghum for a well-balanced, moderately hopped taste."
				},
				{
					"id": 13,
					"beerName": "Myrcenary Double IPA",
					"beerBrewery": "Odell Brewing Co.",
					"beerStyle": "Imperial IPA",
					"beerAbv": "9.3%",
					"beerDescription": "Named for Myrcene, a component of essential oils in the hop flower, Myrcenary Double IPA is our tribute to those who revere the illustrious hop, and their unyielding exploit to craft hop forward beers. Brewed with a blend of hops containing the highest levels of Myrcene, this double IPA prevails with a tropical fruit-like flavor, a pungent floral aroma, and a clean getaway."
				},
				{
					"id": 14,
					"beerName": "IPA",
					"beerBrewery": "Lagunitas Brewing Co.",
					"beerStyle": "American IPA",
					"beerAbv": "6.2%",
					"beerDescription": "This is our unique version of an ancient style. A style as old as the ocean trade routes of the last centuries Great Ships. Not as old as the equator they had to cross twice enroute."
				},
				{
					"id": 15,
					"beerName": "Sam '76",
					"beerBrewery": "Boston Beer Co.",
					"beerStyle": "Lager",
					"beerAbv": "4.7%",
					"beerDescription": "By experimenting with both lager and ale yeast strains, the brewers at Sam Adams came up with the concept for a brand new beer – Sam ’76."
				},
				{
					"id": 16,
					"beerName": "Budweiser",
					"beerBrewery": "Anheuser-Busch",
					"beerStyle": "Lager",
					"beerAbv": "5.0%",
					"beerDescription": "The King of Beers. Budweiser is a medium-bodied, flavorful, crisp American-style lager. Brewed with the best barley malt and a blend of premium hop varieties, it is an icon of core American values like optimism and celebration."
				},
				{
					"id": 17,
					"beerName": "Budwesier Select 55",
					"beerBrewery": "Anheuser-Busch",
					"beerStyle": "Lager",
					"beerAbv": "3.2%",
					"beerDescription": "For people who care about calories more than the taste of beer."
				},
				{
					"id": 18,
					"beerName": "Bud Light & Clamato Chelada",
					"beerBrewery": "Anheuser-Busch",
					"beerStyle": "Spiced Beer",
					"beerAbv": "4.2%",
					"beerDescription": "Mexican red beer already mixed for you."
				},
				{
					"id": 19,
					"beerName": "Michelob ULTRA",
					"beerBrewery": "Anheuser-Busch",
					"beerStyle": "Lager",
					"beerAbv": "4.2%",
					"beerDescription": "Middle-aged woman beer."
				},
				{
					"id": 20,
					"beerName": "Michelob Golden Draft",
					"beerBrewery": "Anheuser-Busch",
					"beerStyle": "Lager",
					"beerAbv": "4.6%",
					"beerDescription": "Upper midwestern beer"
				},
				{
					"id": 21,
					"beerName": "Grain Belt Nordeast",
					"beerBrewery": "August Schnell Brewing Co.",
					"beerStyle": "Vienna Lager",
					"beerAbv": "4.7%",
					"beerDescription": "Named after the hardworking neighborhood where the original Grain Belt Brewery established its roots back in 1893. ‘Nordeast’ is an endearing term which comes from the Northern and Eastern European immigrants and their language which helped shape Northeast Minneapolis."
				}			,
				{
					"id": 22,
					"beerName": "Apple Ale",
					"beerBrewery": "Redd's Brewing Co.",
					"beerStyle": "Fruit Beer",
					"beerAbv": "5.0%",
					"beerDescription": "Redd’s Apple Ale is an apple flavored golden ale with low malty and bitterness cues. With a crisp clean finish that allows the natural apple flavor to come through, this ale is for those times when you are looking to try something different."
				},
				{
					"id": 23,
					"beerName": "Guinness Draught",
					"beerBrewery": "Guinness",
					"beerStyle": "Irish Dry Stout",
					"beerAbv": "4.2%",
					"beerDescription": "Swirling clouds tumble as the storm begins to calm. Settle. Breathe in the moment, then break through the smooth, light head to the bittersweet reward."
				},
				{
					"id": 24,
					"beerName": "Rolling Rock Extra Pale",
					"beerBrewery": "Latrobe Brewing Co.",
					"beerStyle": "Lager",
					"beerAbv": "4.4%",
					"beerDescription": "Good skunky lager in a green bottle."
				},
				{
					"id": 25,
					"beerName": "Dos Equis Lager Especial",
					"beerBrewery": "Cervecería Cuauhtémoc Moctezuma S.A. de C.V.",
					"beerStyle": "Lager",
					"beerAbv": "4.2%",
					"beerDescription": "A crisp, refreshing, light-bodied malt-flavored beer with a well-balanced finish. A Lager that drinks like a Pilsner. A liquid embodiment of living life to the fullest. A beverage made from pure spring water and the choicest hops. A beer with such good taste, it’s chosen you to drink it."
				},
				{
					"id": 26,
					"beerName": "Corona Extra",
					"beerBrewery": "Grupo Modelo",
					"beerStyle": "Lager",
					"beerAbv": "4.5%",
					"beerDescription": "Outside Mexico, Corona is often served with a wedge of citrus fruit - usually lime, occasionally lemon - inserted into the neck of the bottle. Within Mexico, especially in the south, Corona served with lime is not uncommon, but is not considered mandatory."
				},
				{
					"id": 27,
					"beerName": "Corona Light",
					"beerBrewery": "Grupo Modelo",
					"beerStyle": "Lager",
					"beerAbv": "3.9%",
					"beerDescription": "Outside Mexico, Corona is often served with a wedge of citrus fruit - usually lime, occasionally lemon - inserted into the neck of the bottle. Within Mexico, especially in the south, Corona served with lime is not uncommon, but is not considered mandatory."
				},
				{
					"id": 28,
					"beerName": "Stella Artois",
					"beerBrewery": "Stella Artois",
					"beerStyle": "Euro Lager",
					"beerAbv": "5.0%",
					"beerDescription": "Stella Artois was first brewed as a Christmas beer in Leuven. It was named Stella from the star of Christmas, and Artois after Sebastian Artois, founder of the brewery. It is brewed to perfection using the original Stella Artois yeast and the celebrated Saaz hops. It is the optimum premium lager, with its full flavour and clean crisp taste."
				}
			]
		}
	},
	methods: {
	}
}
</script>