<template>
	<main>
		<section class="hero grid">
			<div class="hero__contents grid__contents">
				<div class="hero__illustration">
					<img
						src="@/assets/images/homepage/mobile/image-homepage-hero@2x.jpg"
						alt=""
						v-if="mobileNav"
					/>
					<img
						src="@/assets/images/homepage/desktop/image-homepage-hero@2x.jpg"
						alt=""
						v-if="!mobileNav"
					/>
				</div>
				<div class="hero__content hero__details">
					<h1 class="heading">
						Hey, I’m Alfred Thompson Ovie and I love building beautiful websites
					</h1>

					<!-- <button  
					@click.prevent="scrollToAnchorPoint('about')"
					class="cta cta__primary">
						<span class="cta__icon"
							><img src="@/assets/images/icons/down-arrows.svg" alt=""
						/></span>
						<span class="cta__content">About Me</span>
					</button> -->
					<router-link class="cta cta__primary" to="#about">
						<span class="cta__icon"
							><img src="@/assets/images/icons/down-arrows.svg" alt=""
						/></span>
						<span class="cta__content">About Me</span>
					</router-link>
				</div>
			</div>
		</section>

		<section class="about grid" ref="about" id="about">
			<div class="grid__contents about__contents">
				<div class="about__illustration">
					<img
						src="@/assets/images/homepage/mobile/image-homepage-profile@2x.jpg"
						alt=""
						v-if="mobileNav"
					/>
					<img
						src="@/assets/images/homepage/desktop/image-homepage-profile@2x.jpg"
						alt=""
						v-if="!mobileNav"
					/>
				</div>
				<div class="about__content about__details">
					<h1 class="subHeading">About Me</h1>
					<p class="description">
						I’m a junior front-end developer looking for a new role in an
						exciting company. I focus on writing accessible HTML, using modern
						CSS practices and writing clean JavaScript. When writing JavaScript
						code, I mostly use Vuejs, but I can adapt to whatever tools are
						required. I’m based in Lagos, Nigeria, but I’m happy working
						remotely and have experience in remote teams. When I’m not coding,
						you’ll find me outdoors. I love being out in nature whether that’s
						going for a walk, run or cycling. I’d love you to check out my work.
					</p>

					<router-link :to="{ name: 'portfolioView' }" class="cta cta__sec">
						<!-- <span class="cta__content">Go to Portfolio</span> -->
						Go to Portfolio
						<div class="border__top"></div>
						<div class="border__right"></div>
						<div class="border__bottom"></div>
						<div class="border__left"></div>
					</router-link>
				</div>
			</div>
		</section>

		<ContactMe />
	</main>
</template>

<script>
import ContactMe from "../components/ContactMe.vue";
import { ref, onMounted } from "vue";

export default {
	components: {
		ContactMe,
	},
	setup() {
		const about = ref(null);

		// const scrollToAnchorPoint = (section) => {
		//   console.log(section);
		//   section.scrollIntoView({behavior: 'smooth'})
		// }

		// const showMenu = ref(false);
		// const mobileMenu = ref(null);
		const mobileNav = ref(null);
		const windowWidth = ref(null);

		const checkScreen = () => {
			windowWidth.value = window.innerWidth;
			if (windowWidth.value < 760) {
				mobileNav.value = true;
				// mobileMenu.value = true;
				return;
			}

			mobileNav.value = false;
			// mobileMenu.value = false;
			// showMenu.value = false;
			return;
		};

		onMounted(() => {
			checkScreen();
			window.addEventListener("resize", checkScreen);
		});

		return {
			about,
			mobileNav,
			// scrollToAnchorPoint,
		};
	},
};
</script>

<style lang="scss" scoped>
.hero__contents {
	/* border: 1px solid; */
	margin-top: 0.5em;
}
.hero__illustration {
	text-align: center;
}
.hero__content {
	padding: 1em 0;
}
.hero__content h1 {
	font-family: var(--ff-heading);
	font-size: clamp(25px, 10vw, 40px);
	font-weight: 700;
	margin-top: 0.3em;
}
.cta__primary {
	background-color: var(--DarkBlue);
	color: #fff;
	margin-top: 1.8em;
}
.cta__primary:hover .cta__content,
.cta__primary:hover .cta__icon {
	background-color: var(--SlightlyDesaturatedCyan);
}
.cta__content {
	padding: 1em 3em;
	letter-spacing: 2px;
	line-height: 2;
}
/*! --> --> --> --> --> --> --> --> --> --> --> -->  */
/*? <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <--  */
/** --> --> --> --> --> --> --> --> --> --> --> -->  */
/*? <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <--  */
/*! --> --> --> --> --> --> --> --> --> --> --> -->  */
.about {
	margin-top: 5em;
}
.about__illustration {
	text-align: center;
}
.about__details {
	margin-top: 2em;
	border-top: 1px solid var(--LightGreyTextField);
	border-bottom: 1px solid var(--LightGreyTextField);

	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	padding: 1.5em 0;
}
.subHeading {
	/* margin: 0.5em 0; */
}
.description {
	padding: 1em 0 1.2em;
}
.cta__sec {
	margin-top: 2em;
	margin-bottom: 3em;
	align-self: flex-start;
}

/* 768px */
@media (min-width: 760px) {
	.hero__contents {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: calc(100vh - 6em);
		margin-top: 0;
	}
	.hero__illustration {
		grid-row: 1/-1;
		grid-column: 1/-1;
	}
	.hero__illustration img {
		width: 100%;
		height: 100%;
	}
	.hero__content {
		grid-row: 1;
		grid-column: 1;
		align-self: end;
		background-color: var(--VeryLightGreyBG);
		padding: 2em 2em 0 0;

		max-width: 450px;
	}
	.hero__content h1 {
		font-size: clamp(25px, 4vw, 32px);
	}
	.cta__primary {
		margin-top: 3em;
	}
	.about__contents {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		/* grid-template-rows: 80vh;
		grid-template-rows: 100vh; */
		grid-template-rows: auto;
		grid-gap: 3em;
	}
	.about__illustration {
		grid-column: 1;
		grid-row: 1;
		margin: 0;

		img {
			height: 100%;
			object-fit: cover;
			object-position: right;
		}
	}
	.about__content {
		border-top: 1px solid var(--LightGreyTextField);
		border-bottom: 1px solid var(--LightGreyTextField);

		display: flex;
		justify-content: space-evenly;

		flex-direction: column;
	}
	.about__details {
		margin-top: 0em;
		max-width: 330px;
	}
	.cta__sec {
		margin-top: 0em;
		margin-bottom: 1em;
		align-self: flex-start;
	}
	.subHeading {
		margin: 0;
	}
}

@media (min-width: 992px) {
	.hero__content {
		/* max-width: 550px; */
	}
	.hero__content h1 {
		font-size: clamp(25px, 4vw, 40px);
	}
}
@media (min-width: 1200px) {
	.hero__content {
		padding: 2em 2.5em 0 0;
	}
	.about__contents {
		grid-template-columns: 1fr 1fr;
		grid-gap: 4.5em;
	}
	.about__illustration img {
		width: 100%;
		object-fit: cover;
		object-fit: initial;
		object-fit: contain;
		object-fit: scale-down;
		object-fit: fill;
		object-position: center;
		object-position: 0 0;
	}
}
@media (min-width: 1300px) {
	.hero__content {
		max-width: 450px;
		max-width: 550px;
	}
	.hero__content h1 {
		font-size: clamp(25px, 4vw, 40px);
	}
}
</style>
