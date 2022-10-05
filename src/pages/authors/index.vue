<template>
  <main class="full-wrapper" id="home-section">
    <Header :title="'Authors'" :sub_title="'Home : Authors'"/>
    <div class="authors">
      <div class="container ">
        <div class="sort_header_card">
          <div class="row align-items-center">
            <div class="col-lg-4 mb-3 mb-lg-0">
              <form class="search-form">
                <input type="text" placeholder="Search keyword" class="input_control" autocomplete="off">
                <button type="submit"><i class="fal fa-search"></i></button>
              </form>
            </div>
            <div class="col-lg-8 text-lg-end">
              <div id="filter_by_duration" class="sort_actions">
                <div class="dropdown">
                  <v-combobox
                    :items='items'
                    v-model="select"
                    outlined
                    placeholder="Select size"
                    item-color="#333"
                    color="#878787"
                    type="number"
                    hide-spin-buttons
                    height="54"
                    dark
                    dense
                    hide-details
                    @change="changeSize(select)"
                    class="combobox"
                    style="margin-bottom: -4px"
                  >
                  </v-combobox>
                </div>
                <div id="filter_by_duration" class="dropdown">
                  <a href="#" class="btn-selector">Last 7 days</a>
                  <ul>
                    <li><span>Last 24 hours</span></li>
                    <li class="active"><span>Last 7 days</span></li>
                    <li><span>Last 30 days</span></li>
                    <li><span>All time</span></li>
                  </ul>
                </div>
                <div id="filter_by_category" class="dropdown">
                  <a href="#" class="btn-selector">All categories</a>
                  <ul>
                    <li class="active"><span>All categories</span></li>
                    <li><span>Art</span></li>
                    <li><span>Music</span></li>
                    <li><span>Domain Names</span></li>
                    <li><span>Virtual World</span></li>
                    <li><span>Trading Cards</span></li>
                    <li><span>Collectibles</span></li>
                    <li><span>Sports</span></li>
                    <li><span>Utility</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-0 g-5">
          <div class="col-lg-4 col-md-6" v-for="(author, index) in authorsLists" :key="index">
            <div class="profile_card">
              <router-link :to="'/mod/' + author.mod.id" tag="a" class="card_image">
                <Img :img='author.mod.img_path'/>
              </router-link>
              <div class="card_content">
                <div class="card_header">
                  <div class="author_photo">
                    <router-link :to="'/user/' + author.id" class="pic">
                      <img :src="author.avatar"/>
                    </router-link>
                    <span class="verified"><img src="/assets/images/check-varified.png" alt=""></span>
                  </div>
                </div>
                <div class="card_body">
                  <h5 class="card_title">
                    <router-link :to="'/user/' + author.id">{{ author.first_name }} {{ author.last_name }}</router-link>
                  </h5>
                  <div class="card_price">
                    <span class="mail">{{ author.nick_name }}</span>
                  </div>
                </div>
              </div>
              <div class="card_footer">
                <div class="text-start">
                  <h5 class="card_footer_title">{{ author.rating }}</h5>
                  <span>Follower</span>
                </div>
                <a href="#" class="outline_button">Follow</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/global/Header";
import Img from '@/components/detal/ImgDetail.vue'
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AuthorsPage",
  components: {
    Header,
    Img
  },
  data() {
    return {
      items: [
        10,
        20,
        30,
        40,
      ],
      select: 10
    }
  },
  mounted() {
    this.getAuthors(this.select);
  },
  computed: {
    ...mapGetters({
      authorsLists: "User/list",
    }),
  },
  methods: {
    changeSize(item) {
      this.getAuthors(item);
    },
    ...mapActions({
      getAuthors: "User/action_index"
    }),
  }
};
</script>

<style scoped>
.authors {
  width: 100%;
  padding: 100px 0;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
