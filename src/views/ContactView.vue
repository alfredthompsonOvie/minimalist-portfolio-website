<template>
	<main class="grid">
    <section class="grid__contents">
      <section>
        <h1>Get in Touch</h1>
        <div>
          <P>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a company
            in London. But I’m also happy to hear about opportunites that don’t
            fit that description. I’m a hard-working and positive person who will
            always approach each task with a sense of purpose and attention to
            detail. Please do feel free to check out my online profiles below and
            get in touch using the form.
          </P>
          <ul class="social__list">
            <li>
              <router-link :to="{ name: '' }">
                <img src="@/assets/images/icons/github.svg" alt="" />
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: '' }">
                <img src="@/assets/images/icons/twitter.svg" alt="" />
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: '' }">
                <img src="@/assets/images/icons/linkedin.svg" alt="" />
              </router-link>
            </li>
          </ul>
        </div>
      </section>
  
      <section>
        <form>
          <fieldset>
            <legend>Contact Me</legend>
            <div class="form__group">
              <label for="name">Name</label>
              <input 
              type="text"
              name="name" 
              placeholder="Jane Appleseed" 
              v-model="name">
            </div>
            <div class="form__group">
              <label for="email">Email Address</label>
              <input 
              type="email" 
              name="email"
              placeholder="email@example.com" 
              v-model="email">
            </div>
            <div class="form__group">
              <label for="message">Message</label>
              <textarea 
              name="message" 
              id="message" 
              cols="30" 
              rows="10"
              placeholder="How can I help?"
              v-model="message"
              ></textarea>
            </div>
            <input type="submit" value="Send Message">
          </fieldset>
        </form>
      </section>

    </section>

		
	</main>
</template>

<script>
import { ref } from 'vue';

export default {
	name: "contactView",
  setup() {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    return {
      name,
      email,
      message
    };
	},
};
</script>

<style lang="scss" scoped>
/* main {
	background-color: blue;
	height: 100vh;
	color: aliceblue;
} */
</style>
