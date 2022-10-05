<template>
  <div v-if="!!user">
    <Header :title="user.first_name + ' ' + user.last_name" :sub_title="user.nick_name" />
    <section class="section_padding section_border_top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="profile_cover" style="background-image: url('/assets/images/profile-cover.jpg')"></div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4">
            <div class="profile_card second_card">
              <div class="card_content">
                <div class="card_header">
                  <div class="author_photo">
                    <span class="pic"><img :src="user.avatar" alt=""></span>
                    <span class="verified"><img src="/assets/images/check-varified.png" alt=""></span>
                  </div>
                </div>
                <div class="card_body">
                  <h5 class="card_title">{{user.first_name}} {{user.last_name}}</h5>
                  <div class="card_price mb-4">
                    <span class="mail">@{{user.nick_name}}</span>
                  </div>
                </div>
                <div class="social_menu">
                  <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
                  <a href="https://twitter.com/?lang=en" target="_blank"><i class="fab fa-twitter"></i></a>
                  <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/bdmrk/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <a href="#" class="d-inline-flex align-items-center text_button mt-3">
                  <i class="fal fa-globe primary_text me-2"></i>
                  <span>{{user.email}}</span>
                </a>
              </div>
              <div class="card_footer">
                <div class="text-start">
                  <h5 class="card_footer_title">1050</h5>
                  <span>Follower</span>
                </div>
                <a href="javascript:void(0)" class="outline_button">Follow</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-4 padding_top_100">
          <div class="col-lg-12">
            <ul class="tab_buttons justify-content-center">
              <li class="active"><a data-toggle="tab" href="#menu1">On Sell</a></li>
              <li><a data-toggle="tab" href="#menu2">Created</a></li>
              <li><a data-toggle="tab" href="#menu3">Profile Setting</a></li>
            </ul>
            <div class="tab-content">
              <div id="menu1" class="tab-pane fade in active">

                <div class="row g-4">
                  <div class="col-md-6 col-xl-4">
                    <div class="single_card live anim_top">
                      <div class='countdown' data-date="2023-02-01"></div>
                      <a href="item-details.html" class="card_image">
                        <img src="/assets/images/photo-element-15.jpg" alt="">
                      </a>
                      <div class="card_content">
                        <div class="card_header">
                          <div class="card_author">
                            <a href="author-profile.html" class="author_photo">
                              <img src="/assets/images/user_1.png" alt="">
                            </a>
                            <span class="author_name">
                              <span>Owned By :</span>
                              <a href="author-profile.html" class="solid_text">Wade Warren</a>
                            </span>
                          </div>
                        </div>
                        <div class="card_body">
                          <h4 class="card_title">
                            <a href="item-details.html">The Bitcoin Angel (Open Edition)</a>
                          </h4>
                          <div class="card_date">
                            <span class="solid_text">Relesed:</span>
                            <span>December/2022</span>
                          </div>
                        </div>
                        <div class="card_footer">
                          <b>Highest bid 1/20</b>
                         <div class="shop_like">
                      <button type="button" class="card_love" data-toggle="tooltip" title="Love">486 <span class="icon"><i class="far fa-heart"></i></span></button>
                      <button title="Shopping-cart">
                        <i class="shopping_cart far fa-shopping-cart"></i>
                      </button>
                      </div>
                        </div>
                        <div class="card_price">
                          <span>Price</span>
                          <b class="primary_text">4.8 wETH</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-xl-4">
                    <div class="single_card live anim_top">
                      <div class='countdown' data-date="2023-03-01"></div>
                      <a href="item-details.html" class="card_image">
                        <img src="/assets/images/photo-element-16.jpg" alt="">
                      </a>
                      <div class="card_content">
                        <div class="card_header">
                          <div class="card_author">
                            <a href="author-profile.html" class="author_photo">
                              <img src="/assets/images/user_2.png" alt="">
                            </a>
                            <span class="author_name">
                              <span>Owned By :</span>
                              <a href="author-profile.html" class="solid_text">Wade Warren</a>
                            </span>
                          </div>
                        </div>
                        <div class="card_body">
                          <h4 class="card_title">
                            <a href="item-details.html">Letarexten Dimanditen</a>
                          </h4>
                          <div class="card_date">
                            <span class="solid_text">Relesed:</span>
                            <span>December/2022</span>
                          </div>
                        </div>
                        <div class="card_footer">
                          <b>Highest bid 1/20</b>
                          <div class="shop_like">
                      <button type="button" class="card_love" data-toggle="tooltip" title="Love">486 <span class="icon"><i class="far fa-heart"></i></span></button>
                      <button title="Shopping-cart">
                        <i class="shopping_cart far fa-shopping-cart"></i>
                      </button>
                      </div>
                        </div>
                        <div class="card_price">
                          <span>Price</span>
                          <b class="primary_text">4.8 wETH</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-xl-4">
                    <div class="single_card live anim_top">
                      <div class='countdown' data-date="2023-04-01"></div>
                      <a href="item-details.html" class="card_image">
                        <img src="/assets/images/photo-element-17.jpg" alt="">
                      </a>
                      <div class="card_content">
                        <div class="card_header">
                          <div class="card_author">
                            <a href="author-profile.html" class="author_photo">
                              <img src="/assets/images/user_3.png" alt="">
                            </a>
                            <span class="author_name">
                              <span>Owned By :</span>
                              <a href="author-profile.html" class="solid_text">Wade Warren</a>
                            </span>
                          </div>
                        </div>
                        <div class="card_body">
                          <h4 class="card_title">
                            <a href="item-details.html">Completexton Hassered</a>
                          </h4>
                          <div class="card_date">
                            <span class="solid_text">Relesed:</span>
                            <span>December/2022</span>
                          </div>
                        </div>
                        <div class="card_footer">
                          <b>Highest bid 1/20</b>
                          <div class="shop_like">
                      <button type="button" class="card_love" data-toggle="tooltip" title="Love">486 <span class="icon"><i class="far fa-heart"></i></span></button>
                      <button title="Shopping-cart">
                        <i class="shopping_cart far fa-shopping-cart"></i>
                      </button>
                      </div>
                        </div>
                        <div class="card_price">
                          <span>Price</span>
                          <b class="primary_text">4.8 wETH</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-xl-4">
                    <div class="single_card live anim_top">
                      <div class='countdown' data-date="2023-05-01"></div>
                      <a href="item-details.html" class="card_image">
                        <img src="/assets/images/photo-element-18.jpg" alt="">
                      </a>
                      <div class="card_content">
                        <div class="card_header">
                          <div class="card_author">
                            <a href="author-profile.html" class="author_photo">
                              <img src="/assets/images/user_4.png" alt="">
                            </a>
                            <span class="author_name">
                              <span>Owned By :</span>
                              <a href="author-profile.html" class="solid_text">Wade Warren</a>
                            </span>
                          </div>
                        </div>
                        <div class="card_body">
                          <h4 class="card_title">
                            <a href="item-details.html">Nonpungable Leakehy</a>
                          </h4>
                          <div class="card_date">
                            <span class="solid_text">Relesed:</span>
                            <span>December/2022</span>
                          </div>
                        </div>
                        <div class="card_footer">
                          <b>Highest bid 1/20</b>
                         <div class="shop_like">
                      <button type="button" class="card_love" data-toggle="tooltip" title="Love">486 <span class="icon"><i class="far fa-heart"></i></span></button>
                      <button title="Shopping-cart">
                        <i class="shopping_cart far fa-shopping-cart"></i>
                      </button>
                      </div>
                        </div>
                        <div class="card_price">
                          <span>Price</span>
                          <b class="primary_text">4.8 wETH</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-xl-4">
                    <div class="single_card live anim_top">
                      <div class='countdown' data-date="2023-06-01"></div>
                      <a href="item-details.html" class="card_image">
                        <img src="/assets/images/photo-element-19.jpg" alt="">
                      </a>
                      <div class="card_content">
                        <div class="card_header">
                          <div class="card_author">
                            <a href="author-profile.html" class="author_photo">
                              <img src="/assets/images/user_5.png" alt="">
                            </a>
                            <span class="author_name">
                              <span>Owned By :</span>
                              <a href="author-profile.html" class="solid_text">Wade Warren</a>
                            </span>
                          </div>
                        </div>
                        <div class="card_body">
                          <h4 class="card_title">
                            <a href="item-details.html">Ethereum Platelimu Khe</a>
                          </h4>
                          <div class="card_date">
                            <span class="solid_text">Relesed:</span>
                            <span>December/2022</span>
                          </div>
                        </div>
                        <div class="card_footer">
                          <b>Highest bid 1/20</b>
                          <div class="shop_like">
                      <button type="button" class="card_love" data-toggle="tooltip" title="Love">486 <span class="icon"><i class="far fa-heart"></i></span></button>
                      <button title="Shopping-cart">
                        <i class="shopping_cart far fa-shopping-cart"></i>
                      </button>
                      </div>
                        </div>
                        <div class="card_price">
                          <span>Price</span>
                          <b class="primary_text">4.8 wETH</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-xl-4">
                    <div class="single_card live anim_top">
                      <div class='countdown' data-date="2023-01-01"></div>
                      <a href="item-details.html" class="card_image">
                        <img src="/assets/images/photo-element-20.jpg" alt="">
                      </a>
                      <div class="card_content">
                        <div class="card_header">
                          <div class="card_author">
                            <a href="author-profile.html" class="author_photo">
                              <img src="/assets/images/user_6.png" alt="">
                            </a>
                            <span class="author_name">
                              <span>Owned By :</span>
                              <a href="author-profile.html" class="solid_text">Wade Warren</a>
                            </span>
                          </div>
                        </div>
                        <div class="card_body">
                          <h4 class="card_title">
                            <a href="item-details.html">Hill Art By Rasalina Willam</a>
                          </h4>
                          <div class="card_date">
                            <span class="solid_text">Relesed:</span>
                            <span>December/2022</span>
                          </div>
                        </div>
                        <div class="card_footer">
                          <b>Highest bid 1/20</b>
                          <div class="shop_like">
                      <button type="button" class="card_love" data-toggle="tooltip" title="Love">486 <span class="icon"><i class="far fa-heart"></i></span></button>
                      <button title="Shopping-cart">
                        <i class="shopping_cart far fa-shopping-cart"></i>
                      </button>
                      </div>
                        </div>
                        <div class="card_price">
                          <span>Price</span>
                          <b class="primary_text">4.8 wETH</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="menu2" class="tab-pane fade">
                <div class="row g-4">
                  <div class="col-md-6 col-xl-4">
                    <div class="single_card live">
                      <div class='countdown' data-date="2023-05-01"></div>
                      <a href="item-details.html" class="card_image">
                        <img src="/assets/images/photo-element-18.jpg" alt="">
                      </a>
                      <div class="card_content">
                        <div class="card_header">
                          <div class="card_author">
                            <a href="author-profile.html" class="author_photo">
                              <img src="/assets/images/user_7.png" alt="">
                            </a>
                            <span class="author_name">
                              <span>Owned By :</span>
                              <a href="author-profile.html" class="solid_text">Wade Warren</a>
                            </span>
                          </div>
                        </div>
                        <div class="card_body">
                          <h4 class="card_title">
                            <a href="item-details.html">Nonpungable Leakehy</a>
                          </h4>
                          <div class="card_date">
                            <span class="solid_text">Relesed:</span>
                            <span>December/2022</span>
                          </div>
                        </div>
                        <div class="card_footer">
                          <b>Highest bid 1/20</b>
                          <div class="shop_like">
                      <button type="button" class="card_love" data-toggle="tooltip" title="Love">486 <span class="icon"><i class="far fa-heart"></i></span></button>
                      <button title="Shopping-cart">
                        <i class="shopping_cart far fa-shopping-cart"></i>
                      </button>
                      </div>
                        </div>
                        <div class="card_price">
                          <span>Price</span>
                          <b class="primary_text">4.8 wETH</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-xl-4">
                    <div class="single_card live">
                      <div class='countdown' data-date="2023-06-01"></div>
                      <a href="item-details.html" class="card_image">
                        <img src="/assets/images/photo-element-19.jpg" alt="">
                      </a>
                      <div class="card_content">
                        <div class="card_header">
                          <div class="card_author">
                            <a href="author-profile.html" class="author_photo">
                              <img src="/assets/images/user_8.png" alt="">
                            </a>
                            <span class="author_name">
                              <span>Owned By :</span>
                              <a href="author-profile.html" class="solid_text">Wade Warren</a>
                            </span>
                          </div>
                        </div>
                        <div class="card_body">
                          <h4 class="card_title">
                            <a href="item-details.html">Ethereum Platelimu Khe</a>
                          </h4>
                          <div class="card_date">
                            <span class="solid_text">Relesed:</span>
                            <span>December/2022</span>
                          </div>
                        </div>
                        <div class="card_footer">
                          <b>Highest bid 1/20</b>
                          <div class="shop_like">
                      <button type="button" class="card_love" data-toggle="tooltip" title="Love">486 <span class="icon"><i class="far fa-heart"></i></span></button>
                      <button title="Shopping-cart">
                        <i class="shopping_cart far fa-shopping-cart"></i>
                      </button>
                      </div>
                        </div>
                        <div class="card_price">
                          <span>Price</span>
                          <b class="primary_text">4.8 wETH</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-xl-4">
                    <div class="single_card live">
                      <div class='countdown' data-date="2023-01-01"></div>
                      <a href="item-details.html" class="card_image">
                        <img src="/assets/images/photo-element-20.jpg" alt="">
                      </a>
                      <div class="card_content">
                        <div class="card_header">
                          <div class="card_author">
                            <a href="author-profile.html" class="author_photo">
                              <img src="/assets/images/user_9.png" alt="">
                            </a>
                            <span class="author_name">
                              <span>Owned By :</span>
                              <a href="author-profile.html" class="solid_text">Wade Warren</a>
                            </span>
                          </div>
                        </div>
                        <div class="card_body">
                          <h4 class="card_title">
                            <a href="javascript:void(0)">Hill Art By Rasalina Willam</a>
                          </h4>
                          <div class="card_date">
                            <span class="solid_text">Relesed:</span>
                            <span>December/2022</span>
                          </div>
                        </div>
                        <div class="card_footer">
                          <b>Highest bid 1/20</b>
                          <div class="shop_like">
                      <button type="button" class="card_love" data-toggle="tooltip" title="Love">486 <span class="icon"><i class="far fa-heart"></i></span></button>
                      <button title="Shopping-cart">
                        <i class="shopping_cart far fa-shopping-cart"></i>
                      </button>
                      </div>
                        </div>
                        <div class="card_price">
                          <span>Price</span>
                          <b class="primary_text">4.8 wETH</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="menu3" class="tab-pane fade">
                <div class="row g-4">
                  <div class="col-lg-4">
                    <div class="single_card">
                      <figure class="card_image">
                        <img src="/assets/images/profile-lg-1.jpg" alt="">
                      </figure>
                      <div class="card_content p-4">
                        <button class="primary_button sq_button w-100">Change Profile Picture</button>
                        <button class="outline_button sq_button mt-3 w-100">Delete</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="single_card upload_form">
                      <div class="mb-4 pb-2">
                        <label class="upload_control">
                          <span class="label">Choice your cover picture</span>
                          <span class="control_box" style="background-image: url('/assets/images/profile-cover.jpg')">
                            <span class="primary_button sq_button">Change Cover Picture</span>
                          </span>
                          <input type="file" class="d-none">
                        </label>
                      </div>
                      <div class="mb-4 pb-2">
                        <label for="fullName" class="label">Full Name</label>
                        <input type="text" id="fullName" class="box_control" placeholder="Rasalina De Willmson">
                      </div>
                      <div class="mb-4 pb-2">
                        <label for="username1" class="label">User Name</label>
                        <input type="text" id="username1" class="box_control" placeholder="Niftey Rasalina">
                      </div>
                      <div class="mb-4 pb-2">
                        <label for="customurl1" class="label">Custom URL</label>
                        <input type="url" id="customurl1" class="box_control" placeholder="www.example.com">
                      </div>
                      <div class="mb-4 pb-2">
                        <label for="emailaddress" class="label">Email Address</label>
                        <input type="email" id="emailaddress" class="box_control" placeholder="yourmail@example.com">
                      </div>
                      <div class="mb-4 pb-2">
                        <label for="bio1" class="label">Biography</label>
                        <textarea name="bio1" id="bio1" cols="30" rows="5" class="box_control"
                          placeholder="Enter you Bio.."></textarea>
                      </div>
                      <button class="primary_button sq_button" type="submit">Update Profile</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "id",
  components: {
    Header,
  },
  data() {
    return {
      id: this.$route.params.id,
      user: null
    }
  },
  mounted() {
    if (!this.user) {
      this.loading(true)
      this.getUser(this.id)
        .then(() => {
          this.user = this.listById[this.id] ?? null;
          this.loading(false)
        });
    }
  },
  computed: {
    ...mapGetters({
      listById: "User/listById"
    }),
  },
  methods: {
    ...mapActions({
      getUser: "User/action_index_show",
      loading: "Preloader/actionLoading"
    })
  }
}
</script>
<style scoped>
.shopping_cart {
  margin-left: 10px;
  color: #878787;
  cursor: pointer;
}
.shopping_cart:hover {
  color: #FEDA03;
}
</style>
