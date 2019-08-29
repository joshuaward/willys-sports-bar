import {mapGetters, mapActions} from 'vuex'
export default {
	computed: {
		...mapGetters(['menuState'])
	},
	methods: {
		...mapActions(['change_menuState']),
		toggleMenu() {
			this.change_menuState()
		}
	}
}