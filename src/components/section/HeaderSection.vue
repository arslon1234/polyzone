<template>
  <header class="header_area">
    <div class="container">
      <div class="row align-items-stretch">
        <div class="col-xl-5 mb-5 mb-xl-0">
          <div class="header_text">
            <div class="hot_icon anim_top d-none d-sm-block">
              <img src="/assets/images/fire.png" alt="">
            </div>
            <h1 class="title gr_text anim_top mb_25">Discover Rere Digital Art and Collect NFTs</h1>
            <div class="desc anim_top">
              <p>Buy and sell NFTs from the world’s top artists</p>
            </div>
            <div class="home_button">
              <a href="explore.html" class="primary_button mr_30 anim_top">Start Collecting</a>
              <a href="create-item.html" class="outline_button anim_top"><span class="icon me-1"><i
                class="far fa-clone"></i></span> Create</a>
            </div>
          </div>
        </div>
        <div class="col-xl-7">
          <figure class="single_image anim_right h-100 w-100">
            <Mod :src="setting.header_mod"/>
          </figure>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Mod from "@/components/detal/Mod";
import {mapGetters} from "vuex";

export default {
  name: "HeaderSection",
  components: {Mod},
  computed: {
    ...mapGetters({
      setting: "Setting/list"
    })
  }
}
</script>

<style lang="scss" scoped>
figure {
  display: block;

  iframe {
    min-height: 400px;
  }
}

.title {
  font-size: var(--h1-font-size)!important;
  line-height: var(--h1-line-height)!important;
  font-weight: var(--font-weight-bold)!important;
}
</style>
