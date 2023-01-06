<template>
	<main>
		<section class="hero">
			<div class="hero__illustration">
				<!-- <img
          src="@/assets/images/homepage/mobile/image-homepage-hero.jpg"
          alt=""
        /> -->
				<img
					src="@/assets/images/homepage/mobile/image-homepage-hero@2x.jpg"
					alt=""
          v-if="mobileNav"
				/>
				<!-- <img
					src="@/assets/images/homepage/desktop/image-homepage-hero.jpg"
					alt=""
          v-if="!mobileNav"
				/> -->
				<img
					src="@/assets/images/homepage/desktop/image-homepage-hero@2x.jpg"
					alt=""
          v-if="!mobileNav"
				/>
			</div>
			<div class="hero__content">
				<h1>Hey, I’m Alfred Thompson Ovie and I love building beautiful websites</h1>

				
        <!-- <button  
        @click.prevent="scrollToAnchorPoint('about')"
        class="cta cta__primary">
          <span class="cta__icon"
						><img src="@/assets/images/icons/down-arrows.svg" alt=""
					/></span>
					<span class="cta__content">About Me</span>
        </button> -->
        <router-link 
        class="cta cta__primary"
        to="#about"
        >
        <span class="cta__icon"
						><img src="@/assets/images/icons/down-arrows.svg" alt=""
					/></span>
					<span class="cta__content">About Me</span>
      </router-link>
			</div>
		</section>

		<section class="about" ref="about" id="about">
			<!-- <img src="@/assets/images/homepage/mobile/image-homepage-profile.jpg" alt="">
        -->
			<div class="about__illustration">
				<img
					src="@/assets/images/homepage/mobile/image-homepage-profile@2x.jpg"
					alt=""
				/>
			</div>
      <div class="about__content">
        <h1 class="title">
          About Me
        </h1>
        <p class="description">
          I’m a junior front-end developer looking for a new role in an exciting company. 
          I focus on writing accessible HTML, using modern CSS practices and writing clean 
          JavaScript. When writing JavaScript code, I mostly use Vuejs, but I can adapt to 
          whatever tools are required. I’m based in Lagos, Nigeria, but I’m happy working remotely 
          and have experience in remote teams. When I’m not coding, you’ll find me outdoors. 
          I love being out in nature whether that’s going for a walk, run or cycling. I’d love 
          you to check out my work.

        </p>

        <router-link :to="{ name: 'portfolioView' }" class="cta cta__sec">
					<span class="cta__content">Go to Portfolio</span>
				</router-link>
      </div>
		</section>
    <section>
      <h2 class="subHeading">
        Interested in doing a project together?
      </h2>
      <router-link :to="{ name: 'contactView' }" class="cta cta__sec">
					<span class="cta__content">Contact Me</span>
				</router-link>
    </section>
	</main>
</template>

<script>
import { ref, onMounted } from "vue";


export default {
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
.hero {
  /* border: 1px solid; */
  margin-top: .5em;
}
.hero__illustration {
	text-align: center;
}
.hero__content {
	padding: 1em 0;
}
.hero__content h1 {
	font-size: 40px;
	font-weight: 700;
	font-family: var(--ff-heading);
  margin-top: .3em;
}
.about {
  margin-top: 5em;
}
.cta__primary {
	background-color: var(--DarkBlue);
	color: #fff;
	margin-top: 1.8em;

}
.cta__primary:hover {
	background-color: var(--SlightlyDesaturatedCyan);
}

/* 768px */
@media (min-width: 760px){
  .hero {
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
    max-width: 550px;
    background-color: var(--VeryLightGreyBG);
    align-self: end;
    padding: 2em 2em 0 0;
  }
  .cta__primary {
    margin-top: 3em;
  }
}
</style>
