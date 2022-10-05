<template>
  <main class="full-wrapper" id="home-section">
    <Header :title="'Models'" :sub_title="'Home : Models'"/>
    <div class="page_models">
      <div class="container">
        <div class="sort_header_card">
          <div class="row align-items-center">
            <div class="col-sm-6 text-center text-sm-start">
              <div>Showing 1–16 of 156 Results</div>
            </div>
            <div class="col-sm-6 text-center text-sm-end mt-3 mt-sm-0">
              <div class="sort_actions">
                <a
                  href="javascript:void(0)"
                  class="text_button"
                  @click="isMini = !isMini"
                  v-if="isMini"
                >
                  <i class="fas fa-list"></i>
                </a>
                <a
                  href="javascript:void(0)"
                  class="text_button"
                  @click="isMini = !isMini"
                  v-if="!isMini"
                >
                  <i class="fas fa-line-height"></i>
                </a>
                <a href="javascript:void(0)" class="text_button ms-md-5">Short by New
                  <span class="icon"><i class="fas fa-arrow-down"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row flex-row-reverse g-4 mt-0">
          <div class="col-lg-8">
            <div class="row g-4">
              <div class="col-md-6" v-for="(mod, index) in list" :key="index" v-if="isMini">
                <div class="single_card">
                  <router-link
                    :to="'/mod/' + mod.id"
                    tag="a"
                    class="card_image m-0"
                  >
                    <Img :img='mod.img_path'/>
                  </router-link>
                  <div
                    :class="{
                      content_card_light: !$vuetify.theme.dark,
                      content_card_dark: $vuetify.theme.dark,
                    }"
                  >
                    <span>
                      {{ mod.title }}
                    </span>
                    <button data-toggle="modal" data-target="#placeDilog">
                      <span class="icon"
                      ><i class="far fa-shopping-basket"></i
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-6" v-for="(mod, index) in list" :key="index" v-if="!isMini">
                <div class="single_card">
                  <router-link tag="a" :to="'/mod/' + mod.id" class="card_image m-0">
                    <Img :img='mod.img_path'/>
                  </router-link>
                  <div class="card_content">
                    <div class="card_header">
                      <div class="card_author">
                        <router-link :to="'/user/' + mod.user.id" tag="a" class="author_photo">
                          <img :src="mod.user.avatar" alt="">
                        </router-link>
                        <span class="author_name">
                          <span>Owned By:</span>
                          <router-link :to="'/user/' + mod.user.id" tag="a" class="solid_text"> {{ mod.user.first_name }} {{ mod.user.last_name }}</router-link>
                        </span>
                      </div>
                    </div>
                    <div class="card_body">
                      <h4 class="card_title">
                        <router-link tag="a" :to="'/mod/' + mod.id">{{ mod.title }}</router-link>
                      </h4>
                      <div class="card_date">
                        <span class="solid_text">Relesed:</span>
                        <span> {{ moment(mod.created_at).format('MMMM/Y') }}</span>
                      </div>
                    </div>
                    <div class="card_footer">
                      <div class="price">
                        <span>Price: </span>
                        <b class="primary_text">{{ numeral(mod.price.value).format('0,0[.]00') }}
                          {{ mod.price.currency.code }}</b>
                      </div>
                      <button type="button" class="card_love" data-toggle="tooltip" title="Love">
                        {{ numeral(mod.rating).format('0,0') }}
                        <Like :id="mod.id"/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="placeDilog" role="dialog">
              <div class="modal-dialog modal-lg">
                <div class="modal-content modal_card">
                  <div class="modal_header">
                    <h4>Place a Bid</h4>
                    <div class="desc">
                      Rasalina are about to place a bid for add by Hilexxa
                    </div>
                    <button type="button" class="close" data-dismiss="modal">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                  <div class="modal_body">
                    <div class="input_control_group mb-5">
                      <label for="bid3" class="label">Your Bid</label>
                      <div class="group_input">
                        <div class="input_text">
                          <span class="icon">
                            <img src="/assets/images/rank-arrow.png" alt=""/>
                          </span>
                          ETH
                        </div>
                        <input
                          type="text"
                          id="bid3"
                          class="box_control"
                          placeholder="134/6765"
                        />
                        <div class="input_text">$15.455.34.00</div>
                      </div>
                    </div>
                    <label class="checkbox_input">
                      <input type="checkbox" id="agree_ch" class="d-none"/>
                      <span class="label"
                      >By checking this box, I agree to Raritex Terms of
                        Service</span
                      >
                    </label>
                  </div>
                  <div class="modal_footer">
                    <button class="gr_button sq_button w-100" type="submit">
                      Place a Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <nav class="navigation pagination">
                  <div class="nav-links">
                    <a class="prev page-numbers" href="javascript:void(0)"
                    ><i class="fal fa-long-arrow-left"></i
                    ></a>
                    <a class="page-numbers" href="javascript:void(0)">1</a>
                    <span aria-current="page" class="page-numbers current"
                    >2</span
                    >
                    <a class="page-numbers" href="javascript:void(0)">3</a>
                    <span class="page-numbers">...</span>
                    <a class="page-numbers" href="javascript:void(0)">12</a>
                    <a class="page-numbers" href="javascript:void(0)">13</a>
                    <a class="next page-numbers" href="javascript:void(0)"
                    ><i class="fal fa-long-arrow-right"></i
                    ></a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <aside class="sidebar_main">
              <div class="widget widget_categories">
                <h5
                  class="widget-title"
                  data-toggle="collapse"
                  data-target="#status_list"
                >
                  <span>Status</span>
                  <span class="toggle_arrow"
                  ><i class="far fa-angle-down"></i
                  ></span>
                </h5>
                <ul id="status_list" class="collapse in">
                  <li class="cat-item">
                    <a href="javascript:void(0)">Buy Now</a>
                  </li>
                  <li class="cat-item">
                    <a href="javascript:void(0)">On Auctions</a>
                  </li>
                  <li class="cat-item">
                    <a href="javascript:void(0)">Has Offers</a>
                  </li>
                </ul>
              </div>
              <div class="widget widget_categories">
                <h5
                  class="widget-title"
                  data-toggle="collapse"
                  data-target="#categories_list"
                >
                  <span>Categories</span>
                  <span class="toggle_arrow"
                  ><i class="far fa-angle-down"></i
                  ></span>
                </h5>
                <ul id="categories_list" class="collapse in">
                  <li class="cat-item">
                    <a href="javascript:void(0)">Web Design (6)</a>
                  </li>
                  <li class="cat-item">
                    <a href="javascript:void(0)">Web Development (4)</a>
                  </li>
                  <li class="cat-item">
                    <a href="javascript:void(0)">Product Design (9)</a>
                  </li>
                  <li class="cat-item">
                    <a href="javascript:void(0)">Animation (6)</a>
                  </li>
                  <li class="cat-item">
                    <a href="javascript:void(0)">Ui/Ux Design (8)</a>
                  </li>
                  <li class="cat-item">
                    <a href="javascript:void(0)">Branding Design (12)</a>
                  </li>
                  <li class="cat-item">
                    <a href="javascript:void(0)">Web Design (6)</a>
                  </li>
                  <li class="cat-item">
                    <a href="javascript:void(0)">Logo Design (6)</a>
                  </li>
                </ul>
              </div>
              <div class="widget widget_categories">
                <h5
                  class="widget-title"
                  data-toggle="collapse"
                  data-target="#chain_list"
                >
                  <span>Chain</span>
                  <span class="toggle_arrow"
                  ><i class="far fa-angle-down"></i
                  ></span>
                </h5>
                <ul id="chain_list" class="collapse in">
                  <li class="cat-item">
                    <a href="javascript:void(0)">Ethereum</a>
                  </li>
                  <li class="cat-item">
                    <a href="javascript:void(0)">Polygon</a>
                  </li>
                  <li class="cat-item">
                    <a href="javascript:void(0)">Utility</a>
                  </li>
                  <li class="cat-item">
                    <a href="javascript:void(0)">Klaytn</a>
                  </li>
                </ul>
              </div>
              <div class="widget widget_categories">
                <h5
                  class="widget-title"
                  data-toggle="collapse"
                  data-target="#collection_list"
                >
                  <span>Collection</span>
                  <span class="toggle_arrow"
                  ><i class="far fa-angle-down"></i
                  ></span>
                </h5>
                <ul id="collection_list" class="collapse in">
                  <li class="cat-item">
                    <a href="javascript:void(0)">Skecthify</a>
                  </li>
                  <li class="cat-item">
                    <a href="javascript:void(0)">Abstraction</a>
                  </li>
                  <li class="cat-item">
                    <a href="javascript:void(0)">Cartoonism</a>
                  </li>
                  <li class="cat-item">
                    <a href="javascript:void(0)">Virtuland</a>
                  </li>
                </ul>
              </div>
            </aside>
            <!--Sidebar_Area-End-->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/global/Header";
import Like from "@/components/detal/Like";
import Img from '@/components/detal/ImgDetail.vue'
import {mapActions, mapGetters} from "vuex";

export default {
  name: "page-models",
  components: {
    Header,
    Like,
    Img
  },
  data() {
    return {
      isMini: false,
    };
  },
  computed: {
    ...mapGetters({
      list: "Mod/list",
    }),
  },
  mounted() {
    this.getList();
  },
  methods: {
    ...mapActions({
      getList: "Mod/action_index",
    }),
  },
};
</script>

<style scoped lang='scss'>
.page_models {
  padding: 110px 0;
  border-top: 1px solid transparent;
  border-image: url(@/assets/images/comment-bottom-line.png) 100 stretch;

  .single_card {
    overflow: hidden;
    cursor: pointer;

    span {
      transition: all 0.2s linear;
      font-weight: 500;

      &:hover {
        color: rgb(var(--primary-color));
      }
    }

    button {
      &:hover {
        i {
          color: #feda03;
        }
      }
    }

    .content_card_dark {
      position: absolute;
      width: 100%;
      padding: 8px 15px;
      bottom: 0;
      background-color: rgba(161, 161, 161, 0.6);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .content_card_light {
      position: absolute;
      width: 100%;
      padding: 8px 15px;
      bottom: 0;
      background-color: rgba(228, 226, 226, 1);
      color: rgba(12, 12, 12, 1);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
