<template>
  <div>
    <Header
      title="Model"
      sub_title="Sub title"
    />
    <div class="section_padding section_border_top">
      <div class="container" v-if="!!mod">
        <div class="row g-5">
          <div class="col-lg-7">
            <figure class="single_image">
              <Timer :date="mod.created_at"/>
              <img src="/assets/images/single-item-image.jpg" alt="" v-if="!mod">
              <Mod :src="mod.show_path" v-else/>
            </figure>
          </div>
          <div class="col-lg-5">
            <div class="item-details">
              <div class="row mb-4">
                <div class="col-sm-7">
                  <div class="card_author">
                    <a href="author-profile.html" class="author_photo">
                      <img src="/assets/images/user-element-1.png" alt="">
                    </a>
                    <span class="author_name">
                      <span>Owned By :</span>
                      <a href="author-profile.html" class="solid_text">{{ this.mod.user.first_name }} {{ this.mod.user.last_name }}</a>
                    </span>
                  </div>
                </div>
                <div class="col-sm-5">
                  <ul class="icon_button_list justify-content-md-end">
                    <li class="dropdown_menu">
                      <a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Share"><i
                        class="fas fa-share-alt"></i></a>
                      <div class="dropdown_content">
                        <div class="social-share-menu">
                          <a href="#"><i class="fab fa-facebook-f"></i></a>
                          <a href="#"><i class="fab fa-instagram"></i></a>
                          <a href="#"><i class="fab fa-twitter"></i></a>
                          <a href="#"><i class="fab fa-pinterest-p"></i></a>
                        </div>
                      </div>
                    </li>
                    <li class="dropdown_menu">
                      <a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Options"><i
                        class="fas fa-ellipsis-v"></i></a>
                      <div class="dropdown_content">
                        <ul class="dropdown-menu-list">
                          <li><a href="#">Setting</a></li>
                          <li><a href="#">Information</a></li>
                          <li><a href="#">Pravicy</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="d-flex flex-wrap w-100 justify-content-between align-items-center">
                <h5>{{ this.mod.title }}</h5>
                <h6 class="sm_title">Highest bid 1/20 <img src="/assets/images/fire-sm.png" alt="" class="me-3"></h6>
              </div>
              <div class="current_price">
                <div class="sm_title mb-2">Current price</div>
                <div class="d-flex">
                  <span class="icon me-2"><img src="/assets/images/rank-arrow.png" alt=""></span>
                  <h6 class="primary_text">{{ numeral(mod.price.value).format('0,0.00') }} {{ mod.price.currency.code }}</h6>
                </div>
              </div>
              <div class="item_desc mt-4">
                <div class="title">
                  <h6 class="sm_title">Description</h6>
                  <ul class="meta_icon">
                    <li>
                      <span class="text">{{ numeral(mod.rating).format('0,0')}}</span>
                      <Like :id="mod.id" :size="20" />
                    </li>
                    <li>
                      <span class="text">{{ numeral(mod.viewed).format('0,0') }}</span>
                      <span class="icon"><i class="far fa-eye"></i></span>
                    </li>
                    <li>
                      <AddToCard :id="mod.id" />
                    </li>
                  </ul>
                </div>
                <div class="desc mt-4">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s</p>
                </div>
              </div>
              <div class="row g-4 mt-2">
                <div class="col-sm-6">
                  <button data-toggle="modal" data-target="#placeDilog" class="primary_button sq_button w-100"><span
                    class="icon"><i class="far fa-shopping-basket"></i></span>Place A Bid
                  </button>
                </div>
                <div class="col-sm-6">
                  <button data-toggle="modal" data-target="#buyDilog" class="gr_button sq_button w-100"><span
                    class="icon"><i class="far fa-shopping-bag"></i></span>Buy Now
                  </button>
                </div>
              </div>
              <!-- Modal -->
              <div class="modal fade" id="placeDilog" role="dialog">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content modal_card">
                    <div class="modal_header">
                      <h4>Place a Bid</h4>
                      <div class="desc">Rasalina are about to place a bid for add by Hilexxa</div>
                      <button type="button" class="close" data-dismiss="modal"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="modal_body">
                      <div class="input_control_group mb-5">
                        <label for="bid4" class="label">Your Bid</label>
                        <div class="group_input">
                          <div class="input_text"><span class="icon"><img src="/assets/images/rank-arrow.png"
                                                                          alt=""></span>ETH
                          </div>
                          <input type="text" id="bid4" class="box_control" placeholder="134/6765"/>
                          <div class="input_text">$15.455.34.00</div>
                        </div>
                      </div>
                      <label class="checkbox_input">
                        <input type="checkbox" id="agree_ch" class="d-none">
                        <span class="label">By checking this box, I agree to Raritex Terms of Service</span>
                      </label>
                    </div>
                    <div class="modal_footer">
                      <button class="gr_button sq_button w-100" type="submit">Place a Bid</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal fade" id="buyDilog" role="dialog">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content modal_card">
                    <div class="modal_header">
                      <h4>Checkout</h4>
                      <div class="desc">You are about to purchase Rasalina from Hilexxa</div>
                      <button type="button" class="close" data-dismiss="modal"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="modal_body">
                      <div class="input_control_group mb-5">
                        <label for="bid3" class="label">Your Bid</label>
                        <div class="group_input">
                          <div class="input_text"><span class="icon"><img src="/assets/images/rank-arrow.png"
                                                                          alt=""></span>ETH
                          </div>
                          <input type="text" id="bid3" class="box_control" placeholder="134/6765"/>
                          <div class="input_text">$15.455.34.00</div>
                        </div>
                      </div>
                      <div class="row mb-2">
                        <div class="col-6">Your balance</div>
                        <div class="col-6 text-end">45.6677ETH</div>
                      </div>
                      <div class="row mb-2">
                        <div class="col-6">Service fee</div>
                        <div class="col-6 text-end">23ETH</div>
                      </div>
                      <div class="row">
                        <div class="col-6">Rasalina will pay</div>
                        <div class="col-6 text-end">34 ETH</div>
                      </div>
                    </div>
                    <div class="modal_footer">
                      <div class="row">
                        <div class="col-sm-6">
                          <button class="gr_button sq_button w-100" type="submit">I Understand, Continue</button>
                        </div>
                        <div class="col-sm-6">
                          <button class="outline_button sq_button w-100" type="submit">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div class="row-g-5">
          <div class="col-12">
            <div class="single_card notification_box mt-5">
              <ul class="tab_buttons">
                <li class="active"><a data-toggle="tab" href="#home">Bid</a></li>
                <li><a data-toggle="tab" href="#menu1">Owoner</a></li>
                <li><a data-toggle="tab" href="#menu2">History</a></li>
                <li><a data-toggle="tab" href="#menu3">Details</a></li>
              </ul>
              <div class="tab-content">
                <div id="home" class="tab-pane fade in active">
                  <div class="notifications">
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_1.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-tag-1.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_2.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-love.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_3.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-check.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_4.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-check-2.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_5.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-check-2.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_6.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-love.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_7.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-check.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_8.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-tag-1.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_9.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-check.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="menu1" class="tab-pane fade">
                  <div class="notifications">
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_4.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-check-2.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_5.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-check-2.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_6.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-love.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_1.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-tag-1.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_2.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-love.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="menu2" class="tab-pane fade">
                  <div class="notifications">
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_7.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-check.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_8.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-tag-1.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_4.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-check-2.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_5.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-check-2.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_6.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-love.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                    <div class="notify_box">
                      <div class="thumb">
                        <span class="photo"><img src="/assets/images/rank_1.png" alt=""></span>
                        <span class="icon"><img src="/assets/images/icon-tag-1.png" alt=""></span>
                      </div>
                      <div class="content">
                        <h5 class="title"><a href="javascript:void(0)">Alextina De Midardina</a></h5>
                        <div class="desc">Listed by <span class="solid_text">Digital Art for</span> <span
                          class="primary_text">45.88ETH</span> <small>(8 Hours Ago)</small></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="menu3" class="tab-pane fade">
                  <div class="desc">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a
                      page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less
                      normal distribution of letters, as opposed to using 'Content here, content here', making it look
                      like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                      as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                      their infancy.</p>
                    <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                      (injected humour and the like).It is a long established fact that a reader will be distracted by
                      the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                      that it has a more-or-less normal distribution of letters, as opposed to using</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import {mapActions, mapGetters} from "vuex";
import Mod from "@/components/detal/Mod";
import Timer from "@/components/detal/Timer";
import Like from "@/components/detal/Like";
import AddToCard from "@/components/detal/AddToCart";

export default {
  name: "id",
  components: {
    AddToCard,
    Like,
    Mod,
    Header,
    Timer
  },
  data() {
    return {
      id: this.$route.params.id,
      mod: null
    }
  },

  mounted() {
    if (!this.mod) {
      this.getMod(this.id)
        .then(() => {
          this.mod = this.listById[this.id] ?? null;
        });
    }
  },
  computed: {
    ...mapGetters({
      listById: "Mod/listById"
    }),
  },
  methods: {
    ...mapActions({
      getMod: "Mod/action_show"
    })
  }
}

</script>

<style type="scss" scoped>
.single_image {
  height: 500px;
  width: 100%;
}
</style>
