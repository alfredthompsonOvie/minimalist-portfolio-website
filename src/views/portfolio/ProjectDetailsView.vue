<template>
	<main class="grid">
		<section class="grid__contents">
			<section v-for="project in projects" :key="project.hero.heading">
				<TransitionGroup
				@before-enter="beforeEnter"
				@enter="enter"
				appear
				:css="false"
				>
					<template v-if="id === project.hero.heading.toLowerCase()">
						<div class="project__banner">
							<img
								:src="`${imgUrl('../../assets/images/detail/desktop/')}${
									project.hero.heroImage
								}`"
								:alt="`${project.hero.heading} site preview`"
							/>
						</div>
            <div class="project__contents">
              <div class="project__info">
                <h1 class="heading">{{ project.hero.heading }}</h1>
                <p class="description">{{ project.hero.description }}</p>
  
                <div class="category">
                  <p
                    v-for="category in project.hero.category"
                    :key="category"
                    
                  >
                    {{ category }}
                  </p>
                </div>
                <router-link :to="{ name: '' }" class="cta cta__sec">
                  {{ project.hero.linkContent }}
                </router-link>
              </div>
  
              <div class="project__background">
                <h1 class="subHeading">
                  {{ project.background.heading }}
                </h1>
                <p class="description">
                  {{ project.background.description }}
                </p>
                <h1 class="subHeading">{{ project.background.subHeading }}</h1>
  
                <div class="imgPreview__container">
                  <img
                    :src="`${imgUrl('../../assets/images/detail/desktop/')}${
                      project.background.previewImage_one
                    }`"
                    :alt="`${project.hero.heading} site preview`"
                  />
                  <img
                    :src="`${imgUrl('../../assets/images/detail/desktop/')}${
                      project.background.previewImage_two
                    }`"
                    :alt="`${project.hero.heading} site preview`"
                  />
                </div>
              </div>
            </div>


						<div class="navigation">
							<router-link
								:to="{
									name: 'projectDetailsView',
									params: { id: project.previousProject.toLowerCase() },
								}"
								class="navigation__btn navigation__btn--left"
							>
								<img class="btn__content--arrow" src="@/assets/images/icons/arrow-left.svg" alt="" />
								<span class="btn__content btn__content--left">
									<span class="btn__content--primary">{{
										project.previousProject
									}}</span>
									<span class="btn__content--sec"> Previous Project </span>
								</span>
							</router-link>


							<router-link
								:to="{
									name: 'projectDetailsView',
									params: { id: project.nextProject.toLowerCase() },
								}"
								class="navigation__btn navigation__btn--right"
							>
								<img
									class="btn__content--arrow"
									src="@/assets/images/icons/arrow-right.svg"
									alt=""
								/>
								<span class="btn__content btn__content--right">
									<span class="btn__content--primary">{{
										project.nextProject
									}}</span>
									<span class="btn__content--sec"> Next Project </span>
								</span>
							</router-link>
						</div>
					</template>
				</TransitionGroup>
			</section>
		</section>
	</main>
</template>

<script>
import { ref } from "vue";
import { gsap } from "gsap";

export default {
	name: "ProjectDetailsView",
	props: ["id"],
	setup() {
		const projects = ref([
			{
				hero: {
					heroImage: "image-manage-hero@2x.jpg",
					heading: "Manage",
					description:
						"This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
					category: [
						"Interaction Design / Front End Development",
						"HTML / CSS / JS",
					],
					linkContent: "Visit Website",
				},
				background: {
					heading: "Project Background",
					description:
						"This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
					subHeading: "Static Previews",
					previewImage_one: "image-manage-preview-1@2x.jpg",
					previewImage_two: "image-manage-preview-2@2x.jpg",
				},
				previousProject: "Fylo",
				nextProject: "Bookmark",
			},
			{
				hero: {
					heroImage: "image-bookmark-hero@2x.jpg",
					heading: "Bookmark",
					description:
						"This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
					category: [
						"Interaction Design / Front End Development",
						"HTML / CSS / JS",
					],
					linkContent: "Visit Website",
				},
				background: {
					heading: "Project Background",
					description:
						"This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
					subHeading: "Static Previews",
					previewImage_one: "image-bookmark-preview-1@2x.jpg",
					previewImage_two: "image-bookmark-preview-2@2x.jpg",
				},
				previousProject: "Manage",
				nextProject: "Insure",
			},
			{
				hero: {
					heroImage: "image-insure-hero@2x.jpg",
					heading: "Insure",
					description:
						"This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
					category: [
						"Interaction Design / Front End Development",
						"HTML / CSS / JS",
					],
					linkContent: "Visit Website",
				},
				background: {
					heading: "Project Background",
					description:
						"This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
					subHeading: "Static Previews",
					previewImage_one: "image-insure-preview-1@2x.jpg",
					previewImage_two: "image-insure-preview-2@2x.jpg",
				},
				previousProject: "Bookmark",
				nextProject: "Fylo",
			},
			{
				hero: {
					heroImage: "image-fylo-hero@2x.jpg",
					heading: "Fylo",
					description:
						"This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
					category: [
						"Interaction Design / Front End Development",
						"HTML / CSS",
					],
					linkContent: "Visit Website",
				},
				background: {
					heading: "Project Background",
					description:
						"This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
					subHeading: "Static Previews",
					previewImage_one: "image-fylo-preview-1@2x.jpg",
					previewImage_two: "image-fylo-preview-2@2x.jpg",
				},
				previousProject: "Insure",
				nextProject: "Manage",
			},
		]);
		const imgUrl = (val) => new URL(val, import.meta.url).href;
		// const tab = ref(true);

		const beforeEnter = (el) => {
			gsap.set(el, {
				autoAlpha: 0.01,
				x: -30,
			})
			console.log('before enter');

		}

		const enter = (el, done) => {
			gsap.to(el, {
				autoAlpha: 1,
				x: 0,
				duration: 1,
				onComplete: done,
			})

			console.log('enter');
		}

		return {
			projects,
			imgUrl,
			// tab,
			beforeEnter,
			enter,
		};
	},
};
</script>

<style lang="scss" scoped>
/* .slide-enter-from,
.slide-leave-to {
	opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
	transition: all 0.3s ease;
} */
.project__contents {
	margin: 3em 0;

}
.project__info {
	/* margin: 3em 0; */
	border-top: 1px solid var(--GrayishDarkBlue-border);
	border-bottom: 1px solid var(--GrayishDarkBlue-border);
	padding: 2em 0;
}
.heading {
  font-family: Ibarra Real Nova;
font-size: 40px;
font-weight: 700;
line-height: 42px;
letter-spacing: -0.3571428656578064px;
text-align: left;
color: #33323D;
}
.subHeading {
  font-family: Ibarra Real Nova;
font-size: 32px;
font-weight: 400;
line-height: 42px;
letter-spacing: -0.2857142984867096px;
text-align: left;
/* color: #33323D; */


}
.project__background > * {
  margin-bottom: 1.5em;
}
.project__background {
  .subHeading {
    margin-bottom: .6em;
  }
}
.description {
	margin: 1em 0;
  font-family: Public Sans;
font-size: 15px;
font-weight: 400;
line-height: 30px;
letter-spacing: 0px;
text-align: left;

}
.category {
	font-family: Public Sans;
	font-size: 13px;
	font-weight: 700;
	line-height: 30px;
	letter-spacing: 0px;
	text-align: left;
  p {

    color: #5FB4A2;
  }
}

.imgPreview__container {
  margin: 2.5em 0;
}
.imgPreview__container img {
  margin-bottom: 2em;
}
.navigation {
	position: relative;
	border-top: 1px solid var(--GrayishDarkBlue-border);
	border-bottom: 1px solid var(--GrayishDarkBlue-border);
	padding: 1em 0;
	margin-bottom: 5em;
	/* display: flex;
	justify-content: space-between;
	align-items: center; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;

  /* justify-content: space-between; */
  /* text-align: center; */

  /* @media (min-width: 320px){
  } */

}
.navigation::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: var(--GrayishDarkBlue-border);
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.navigation__btn {
	color: var(--GrayishDarkBlue);
  text-transform: capitalize;
}
.navigation__btn--left {
  grid-column: 1;
  text-align: left;
}
.navigation__btn--right {
  grid-column: 2;
  text-align: right;
}
.btn__content {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.btn__content--right {
	align-items: flex-end;
}
.btn__content--left {
	align-items: flex-start;
}
.btn__content--primary {
  font-family: var(--ff-heading);
  font-size: 22px;
  /* font-size: clamp(22px, 1vw, 32px); */
  font-weight: 400;
  line-height: 36px;
  /* letter-spacing: -0.2857142984867096px; */
  letter-spacing: -0.29px;
  /* text-align: right; */
  @media (min-width: 375px){
  font-size: 32px;
  }

}
.btn__content--sec {
	font-family: var(--ff-body);
	font-size: 12px;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: 0px;
	/* text-align: right; */
  color: var(--GrayishDarkBlue);
  opacity: .5;
  @media (min-width: 375px){
   font-size: 16px;
  }
}
.btn__content--arrow {
	width: 8px;
  height: 16px;
}
/*! --> --> --> --> --> --> --> --> --> --> --> -->  */
/*? <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <--  */
/** --> --> --> --> --> --> --> --> --> --> --> -->  */
/*? <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <--  */
/*! --> --> --> --> --> --> --> --> --> --> --> -->  */

@media (min-width: 768px) {
  .project__info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: repeat(3, 2em);
    justify-content: start;
    align-items: start;

    .heading {
      grid-column: 1;
      grid-row: 1;
    }
    .category {
      grid-column: 1;
      grid-row: 2;
    }
    .cta {
      grid-column: 1;
      grid-row: 3;
      justify-self: start;
    }
    .description { 
      grid-column: 2;
      grid-row: 1/4;
      /* grid-row: 1 / -1; */
    }
  }

}
@media (min-width: 992px) {
  .project__contents {
    display: grid;
    grid-template-columns: 352px 1fr;
    grid-template-rows: auto;
    grid-gap: 6em;
  }
  .project__info {
    display: block;
    grid-column: 1;
    /* max-width: 352px; */
    align-self: start;
  }
  .project__background {
    grid-column: 2;
  }
}
</style>
