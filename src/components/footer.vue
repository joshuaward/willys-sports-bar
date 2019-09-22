<template lang="pug">
	footer.footer
		.grid-container
			.grid-x
				.cell.medium-6.large-8
					router-link.logo(:to="{ name: 'Home' }" exact)
						span.rye.colorWhite Willy's 
						span.variane.colorSecondary Sportsbar
						span.colorWhite &amp; Casino
					.footer-address
						p 1401 9th Ave SW #[br] Watertown, SD 57201
					.footer-contact
						p #[strong P]: #[a(href="tel:605.878.3500") 605.878.3500]
						p #[strong E]: #[a(href="mailto:willy@willyssportsbar.com") willy@willyssportsbar.com]
				.cell.medium-6.large-4
					ul.footer-links
						li.footer-link
							router-link(to="/", @click="toggleMenu()") Home
						li.footer-link
							router-link(to="/Menu", @click="toggleMenu()") Menu
						//- li.footer-link
						//- 	router-link(to="/Events", @click="toggleMenu()") Events
						li.footer-link
							router-link(to="/About", @click="toggleMenu()") About
						li.footer-link
							router-link(to="/Contact", @click="toggleMenu()") Contact
		.grid-container.full.fillBlack
			.grid-x
				.cell.footer-copyright
					small Copyright &copy; {{ date }} Willy's Sports Bar
						

</template>

<script>
export default {
	name: 'Footer',
  data() {
    return {
			date: new Date().getFullYear(),
    };
  }
};
</script>
