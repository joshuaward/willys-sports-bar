<template lang="pug">
	main.about
		Hero(:title="title")
		PromoBanner
		section.fillPrimary
			.grid-container
				.grid-x.grid-padding-x
					.cell.textCenter
						h2.rye.colorSecondary.mb-2 The Beginning
					.cell.medium-6.large-8.order-sm-2.order-md-1
						.about-content
							p Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
					.cell.medium-6.large-4.order-sm-1.order-md-2
						.about-image
							img(src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt="")
		section.fillSecondary
			.grid-container
				.grid-x.grid-padding-x
					.cell.textCenter
						h2.rye.colorPrimary.mb-2 The Middle
					.cell.medium-6.large-4
						.about-image
							img(src="https://images.pexels.com/photos/1073097/pexels-photo-1073097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt="")
					.cell.medium-6.large-8
						.about-content
							p Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
		section.fillAccent
			.grid-container
				.grid-x.grid-padding-x
					.cell.textCenter
						h2.rye.colorSecondary.mb-2 The Dream
					.cell.medium-6.large-8.order-sm-2.order-md-1
						.about-content
							p Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
					.cell.medium-6.large-4.order-sm-1.order-md-2
						.about-image
							img(src="https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt="")
		Testimonials.about-testimonials
		//- Subscribe
</template>

<script>
import Hero from '@/components/hero';
import PromoBanner from '@/components/promoBanner';
import Subscribe from '@/components/subscribe';
import Testimonials from '@/components/testimonials';

export default {
	name: 'about',
	components: {
		Hero,
		PromoBanner,
		Subscribe,
		Testimonials
	},
	data() {
		return {
			title: 'About',
			parallax: require('@/assets/img/plax-1.jpg')
		}
	}
}
</script>