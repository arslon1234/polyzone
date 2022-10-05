<template>
  <router-view />
</template>

<script>
import { importCss, importJs } from "@/helpers/importScript.js";
import { mapActions } from "vuex";

export default {
  name: "App",

  mounted() {
    //importing Css files
    // importCss("/assets/css/swiper-bundle-min.css");
    importCss("/assets/css/bootstrap-min.css");
    importCss("/assets/css/normalize.css");
    importCss("/assets/css/fontawesome-min.css");
    importCss("/assets/css/lity-min.css");
    importCss("/assets/css/theme.css");
    importCss("/assets/css/responsive.css");
    importCss("/assets/css/style.css");

    // importing JS files
    importJs("/assets/js/vendor/modernizr.js");
    importJs("/assets/js/vendor/jquery-3-5-1-min.js");
    importJs("/assets/js/vendor/jquery-migrate-min.js");
    importJs("/assets/js/bootstrap-min.js");
    importJs("/assets/js/ajaxchimp.js");
    // importJs("/assets/js/contact-form.js");
    importJs("/assets/js/appear.js");
    importJs("/assets/js/animatenumber-min.js");
    importJs("/assets/js/scrollreveal-min.js");
    importJs("/assets/js/parallax-scroll.js");
    // importJs("/assets/js/swiper-bundle-min.js");
    // importJs("/assets/js/countdown.js");
    importJs("/assets/js/slicknav-min.js");
    importJs("/assets/js/main.js");
    this.getSetting();

    this.$vuetify.theme.dark = localStorage.getItem('selected-theme') === 'light'
  },
  methods: {
    ...mapActions({
      getSetting: "Setting/action_index",
    }),
  },
};
</script>
