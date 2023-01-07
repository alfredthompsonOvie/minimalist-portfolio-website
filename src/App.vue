<template>
	<AppNav />

	<RouterView v-slot="{ Component }">
		<transition name="slide">
			<component :is="Component"></component>
		</transition>
	</RouterView>

	<AppFooter />
</template>

<script>
import AppNav from "@/components/AppNav.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
	components: {
		AppNav,
		AppFooter,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.slide-enter-from {
	/* transform: translateX(-100px); */
	left: -100%;
	/* opacity: 0; */
}
.slide-enter-to {
	left: 0%;
	/* opacity: 1; */
}
.slide-leave-to {
	transform: scale(0.8);
	transform-origin: center;
}
.slide-leave-from {
	transform: scale(1);
}
.slide-enter-active,
.slide-leave-active {
	position: absolute;
	transition: all 0.85s ease;
}
</style>
