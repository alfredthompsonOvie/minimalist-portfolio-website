<template>
	<main>
		<section class="about grid">
			<div class="grid__contents about__contents">
				<div class="about__illustration">
					<img
						src="@/assets/images/portfolio/mobile/image-portfolio-manage@2x.jpg"
						alt=""
						v-if="mobileNav"
					/>
					<!-- <img
						src="@/assets/images/portfolio/tablet/image-portfolio-manage@2x.jpg"
						alt=""
						v-if="!mobileNav"
					/> -->
					<img
						src="@/assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg"
						alt=""
						v-if="!mobileNav"
					/>
				</div>
				<div class="about__content about__details">
					<h1 class="subHeading">Manage</h1>
					<p class="description">
						This project required me to build a fully responsive landing page to
						the designs provided. I used HTML5, along with CSS Grid and
						JavaScript for the areas that required interactivity, such as the
						testimonial slider.
					</p>

					<router-link :to="{ name: 'portfolioView' }" class="cta cta__sec">
						<!-- <span class="cta__content">Go to Portfolio</span> -->
						View Project
					</router-link>
				</div>
			</div>
		</section>
		<section class="about grid">
			<div class="grid__contents about__contents">
				<div class="about__illustration">
					<img
						src="@/assets/images/portfolio/mobile/image-portfolio-bookmark@2x.jpg"
						alt=""
						v-if="mobileNav"
					/>
					<!-- <img
						src="@/assets/images/portfolio/tablet/image-portfolio-bookmark@2x.jpg"
						alt=""
						v-if="!mobileNav"
					/> -->
					<img
						src="@/assets/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg"
						alt=""
						v-if="!mobileNav"
					/>
				</div>
				<div class="about__content about__details">
					<h1 class="subHeading">Bookmark</h1>
					<p class="description">
						This project required me to build a fully responsive landing page to
						the designs provided. I used HTML5, along with CSS Grid and
						JavaScript for the areas that required interactivity, such as the
						features section.
					</p>

					<router-link :to="{ name: '' }" class="cta cta__sec">
						View Project
					</router-link>
				</div>
			</div>
		</section>
		<section class="about grid">
			<div class="grid__contents about__contents">
				<div class="about__illustration">
					<img
						src="@/assets/images/portfolio/mobile/image-portfolio-insure@2x.jpg"
						alt=""
						v-if="mobileNav"
					/>
					<!-- <img
						src="@/assets/images/portfolio/tablet/image-portfolio-insure@2x.jpg"
						alt=""
						v-if="!mobileNav"
					/> -->
					<img
						src="@/assets/images/portfolio/desktop/image-portfolio-insure@2x.jpg"
						alt=""
						v-if="!mobileNav"
					/>
				</div>
				<div class="about__content about__details">
					<h1 class="subHeading">Insure</h1>
					<p class="description">
						This was a small project which mostly consisted of HTML and CSS. I
						built a fully-responsive landing page. The only JavaScript this
						project required was to enable the toggling of the mobile
						navigation.
					</p>

					<router-link :to="{ name: '' }" class="cta cta__sec">
						View Project
					</router-link>
				</div>
			</div>
		</section>
		<section class="about grid">
			<div class="grid__contents about__contents">
				<div class="about__illustration">
					<img
						src="@/assets/images/portfolio/mobile/image-portfolio-insure@2x.jpg"
						alt=""
						v-if="mobileNav"
					/>
					<!-- <img
						src="@/assets/images/portfolio/tablet/image-portfolio-insure@2x.jpg"
						alt=""
						v-if="!mobileNav"
					/> -->
					<img
						src="@/assets/images/portfolio/desktop/image-portfolio-insure@2x.jpg"
						alt=""
						v-if="!mobileNav"
					/>
				</div>
				<div class="about__content about__details">
					<h1 class="subHeading">Fylo</h1>
					<p class="description">
						This project was built in pure HTML and CSS. I had mobile and
						desktop designs to work to and built it so that it was
						fully-responsive. I took a mobile-first approach and used modern CSS
						like Flexbox and Grid for layout purposes.
					</p>

					<router-link :to="{ name: '' }" class="cta cta__sec">
						View Project
					</router-link>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	name: "portfolioView",
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>

</style>
