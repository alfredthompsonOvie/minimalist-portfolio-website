<template>
  <main>
    <div v-for="project in projects" :key="project.hero.heading">
      <div class="project__banner">
          <img
          :src="`${imgUrl('../../assets/images/detail/desktop/')}${project.hero.banner}`"
          :alt="`${project.hero.heading} site preview`"
          >
      </div>
      
      <div class="project__info">
        <h1 class="subHeading">{{ project.hero.heading }}</h1>
        <p> {{ project.hero.description }}</p>
        
        <p 
        v-for="category in project.hero.category" 
        :key="category"
        class="category"
        >
        {{ category }}
        </p>
        <router-link 
        :to="{name: ''}" class="cta cta__sec">
        {{ project.hero.linkContent }}
        </router-link>
      </div>

      <div class="project__background">
        <h1 class="subHeading">
          {{ project.background.heading }}
        </h1>
        <p>
          {{ project.background.description }}
        </p>
        <h1 class="subHeading"> {{ project.background.subHeading }}</h1>

        <div>
          <img
          :src="`${imgUrl('../../assets/images/detail/desktop/')}${project.background.img}`"
          :alt="`${project.hero.heading} site preview`"
          >
        </div>
      </div>
      <div class="control">
        <button>
          {{ project.previousProject }}
        </button>
        <button>
          {{ project.nextProject }}
        </button>
      </div>
    </div>
  </main>
  <div>
    portfolio details page should be a caurasel
    {{ id }}

    <router-link 
    :to="{ name: 'projectDetailsView', params: { id: 'manage'} }"
    class="cta cta__sec">
      manage
		</router-link>
    <router-link 
    :to="{ name: 'projectDetailsView', params: { id: 'bookmark'} }"
    class="cta cta__sec">
    bookmark
		</router-link>
    <router-link 
    :to="{ name: 'projectDetailsView', params: { id: 'insure'} }"
    class="cta cta__sec">
      insure
		</router-link>
    <router-link 
    :to="{ name: 'projectDetailsView', params: { id: 'fylo'} }"
    class="cta cta__sec">
      fylo
		</router-link>

    <div v-if="id==='manage'">manage</div>
    <div v-if="id==='bookmark'">bookmark</div>
    <div v-if="id==='insure'">insure</div>
    <div v-if="id==='fylo'">fylo</div>
  </div>

  Previous Project

  
  Next Project
</template>

<script>
import { ref } from 'vue';

export default {
  props: ["id"],
  setup () {
    const projects = ref([
      {
        hero: {
          banner: 'image-manage-hero@2x.jpg',

          heading: "Manage",
          description: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",

          category: ["Interaction Design / Front End Development", "HTML / CSS / JS"],

          linkContent: "Visit Website"
        },
        background: {
          heading: "Project Background",
          description: "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
          subHeading: "Static Previews",
          // img:  {
          //   mobile: {
          //     hero: "@/assets/images/detail/tablet/image-manage-hero@2x.jpg",
          //     preview: "@/assets/images/detail/tablet/image-manage-preview-2@2x.jpg"
          //   },
          //   desktop: {
          //     hero: "@/assets/images/detail/desktop/image-manage-hero@2x.jpg",
          //     preview: "@/assets/images/detail/desktop/image-manage-preview-2@2x.jpg"
          //   }
          // },
          img: 'image-manage-preview-2@2x.jpg'
        },

        previousProject: "Fylo",
        nextProject: "Bookmark",
      },
      {
        hero: {
          banner: [
            "@/assets/images/detail/tablet/image-bookmark-hero@2x.jpg",
            "@/assets/images/detail/desktop/image-bookmark-hero@2x.jpg"
          ],
          heading: "Bookmark",
          description: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",

            category: ["Interaction Design / Front End Development", "HTML / CSS / JS"],
            
          linkContent: "Visit Website"
        },
        background: {
          heading: "Project Background",
          description: "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
          subHeading: "Static Previews",
          img:  {
            mobile: {
              hero: "@/assets/images/detail/tablet/image-bookmark-hero@2x.jpg",
              preview: "@/assets/images/detail/tablet/image-bookmark-preview-2@2x.jpg"
            },
            desktop: {
              hero: "@/assets/images/detail/desktop/image-bookmark-hero@2x.jpg",
              preview: "@/assets/images/detail/desktop/image-bookmark-preview-2@2x.jpg"
            }
          },
        },
        links: {
          previous: "Manage",
          next: "Insure",
        }
      },
      {
        hero: {
          banner: [
            "@/assets/images/detail/tablet/image-insure-hero@2x.jpg",
            "@/assets/images/detail/desktop/image-insure-hero@2x.jpg"
          ],
          heading: "Insure",
          description: "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",

            category: ["Interaction Design / Front End Development", "HTML / CSS / JS"],
            
          linkContent: "Visit Website"
        },
        background: {
          heading: "Project Background",
          description: "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
          subHeading: "Static Previews",
          img: {
            mobile: {
              hero: "@/assets/images/detail/tablet/image-insure-hero@2x.jpg",
              preview: "@/assets/images/detail/tablet/image-insure-preview-2@2x.jpg"
            },
            desktop: {
              hero: "@/assets/images/detail/desktop/image-insure-hero@2x.jpg",
              preview: "@/assets/images/detail/desktop/image-insure-preview-2@2x.jpg"
            }
          },
        },
        links: {
          previous: "Bookmark",
          next: "Fylo",
        }
      },
      {
        hero: {
          banner: [
            "@/assets/images/detail/tablet/image-fylo-hero@2x.jpg",
            "@/assets/images/detail/desktop/image-fylo-hero@2x.jpg"
          ],
          heading: "Fylo",
          description: "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-firstapproach and used modern CSS like Flexbox and Grid for layout purposes.",

            category: ["Interaction Design / Front End Development", "HTML / CSS"],
            
          linkContent: "Visit Website"
        },
        background: {
          heading: "Project Background",
          description: "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
          subHeading: "Static Previews",
          img: {
            mobile: {
              hero: "@/assets/images/detail/tablet/image-fylo-hero@2x.jpg",
              preview: "@/assets/images/detail/tablet/image-fylo-preview-2@2x.jpg"
            },
            desktop: {
              hero: "@/assets/images/detail/desktop/image-fylo-hero@2x.jpg",
              preview: "@/assets/images/detail/desktop/image-fylo-preview-2@2x.jpg"
            }
          },
        },
        links: {
          previous: "Insure",
          next: "Manage",
        }
      },
    ]);

    const imgUrl = (val) => new URL(val, import.meta.url).href
    const tab = ref(true);

    return {
      projects,
      imgUrl,
      tab
    }
  }
}
</script>

<style lang="scss" scoped>

</style>