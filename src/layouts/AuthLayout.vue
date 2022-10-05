<template>
  <v-app>
    <AppBar/>
    <router-view/>
    <Footer/>
    <ProgressWrap />
  </v-app>
</template>

<script>
import AppBar from "@/components/global/AppBar";
import Footer from "@/components/global/Footer";
import ProgressWrap from "@/components/global/ProgressWrap";

export default {
  name: 'HomeLayout',
  components: {
    AppBar,
    Footer,
    ProgressWrap
  }
}
</script>
