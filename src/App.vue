<template>
	<AppNav />

	<RouterView v-slot="{ Component }">
		<transition name="clip" mode="out-in">
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
	opacity: 0;
	left: -100%;
}
.slide-enter-to {
	opacity: 1;
	left: 0%;
}
.slide-enter-active {
	transition: all 0.85s ease;
} 
.slide-leave-active {
	position: absolute;
	transition: all 0.85s ease;
} 
.slide-leave-to {
	opacity: 0;
	transform: scale(0.8);
	transform-origin: center;
}
.slide-leave-from {
	transform: scale(1);
}
/*! --> --> --> --> --> --> --> --> --> --> --> -->  */
/*? <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <--  */
/** --> --> --> --> --> --> --> --> --> --> --> -->  */
/*? <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <--  */
/*! --> --> --> --> --> --> --> --> --> --> --> -->  */
.fade-enter-from {
	/* opacity: 0;
	transform: scale(0.8); */
	opacity: 0;
	/* transform: translateX(-100%); */
}
.fade-enter-to {
	opacity: 1;
	transform: scale(1);
}
.fade-enter-active {
	transition: all 0.65s linear;
}
/* .fade-leave-from {

} */
.fade-leave-to {
	/* opacity: 0;
	transform: translateX(-100%); */

	opacity: 0;
	transform: scale(0.8);
}
.fade-leave-active {
	transition: all 0.35s linear;
}
/*! --> --> --> --> --> --> --> --> --> --> --> -->  */
/*? <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <--  */
/** --> --> --> --> --> --> --> --> --> --> --> -->  */
/*? <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <--  */
/*! --> --> --> --> --> --> --> --> --> --> --> -->  */
.clip-enter-from {
	opacity: 0;

	/* 
	transform: scale(0.8); */
	/* opacity: 0; */
	/* transform: translateX(-100%); */
}
.clip-enter-to {
	/* clip-path: circle(141.4% at 100% 0); */
	clip-path: circle(100%);
	opacity: 1;
	/* transform: scale(1); */
}
.clip-enter-active {
	transition: all 0.65s linear;
}
.clip-leave-from {
	clip-path: circle(0%);
}
.clip-leave-to {
	/* opacity: 0;
	transform: translateX(-100%); */

	/* opacity: 0; */
	/* transform: scale(0.8); */
	/* clip-path: circle(9.8% at 100% 0); */
	clip-path: circle(0%);
}
.clip-leave-active {
	transition: all 0.35s linear;
}
</style>
