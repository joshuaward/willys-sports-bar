<template lang="pug">
	footer.footer
		.grid-container
			.grid-x
				.cell.medium-6.large-4
					router-link.logo(:to="{ name: 'Home' }" exact)
						span.rye.colorWhite Willy's 
						span.variane.colorSecondary Sportsbar
						span.colorWhite &amp; Casino
					.footer-address
						p 1401 9th Ave SW #[br] Watertown, SD 57201
					.footer-contact
						p #[strong P]: 605.878.3500
						p #[strong E]: willy@willyssportsbar.com
				.cell.medium-6.large-4
					ul.footer-links
						li.footer-link
							a(href="") Home
						li.footer-link
							a(href="") Menu
						li.footer-link
							a(href="") About
						li.footer-link
							a(href="") Events
						li.footer-link
							a(href="") Contact
				.cell.footer-copyright
					small Copyright &copy; {{ date }} Willy's Sports Bar
						

</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
			title: '',
			date: new Date().getFullYear(),
    };
  }
};
</script>
