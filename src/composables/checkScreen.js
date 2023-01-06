import { ref } from "vue";
const showMenu = ref(false);
const mobileNav = ref(null);
const mobileMenu = ref(null);
const windowWidth = ref(null);

const checkScreen = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value < 768) {
    mobileNav.value = true;
    mobileMenu.value = true;
    return;
  }
  
  mobileNav.value = false;
  mobileMenu.value = false;
  showMenu.value = false;
  return;
};

export default checkScreen;