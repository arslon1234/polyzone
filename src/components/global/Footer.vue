<template>
  <div class="footer_main">
    <div class="element_1" data-parallax='{"x": 200,"y": 200, "smoothness": 30}'>
      <img src="/assets/images/footer-ball-1.png" alt="">
    </div>
    <div class="element_2" data-parallax='{"x": -60,"y": -60, "smoothness": 30}'>
      <img src="/assets/images/footer-ball-1.png" alt="">
    </div>
    <!--Subscribe-section-start-->
    <section class="subs_section">
      <div class="container">
        <div class="row mb_60">
          <div class="col-lg-12">
            <div class="section_title align-items-center text-center anim_top">
              <div class="title_icon">
                <img src="/assets/images/element-2.png" alt="">
              </div>
              <h2 class="main_title big">Never miss a drop!</h2>
              <div class="desc">
                <p>Subscribe to our ultra-exclusive drop list and be the first to know about upcoming Nifty drops.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8 relative anim_top">
            <form class="subscribe_form" @submit.prevent="apiSubscriber">
              <input type="email" v-model="email" class="mc-input" id="mc-input" name="EMAIL"
                     placeholder="Enter Mail Adress">
              <button :disabled="loading" type="submit" :class="{ 'skeleton-loader': loading }">Subscribe Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!--Subscribe-section-end-->

    <div class="footer_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 pe-xl-5">
            <div class="widget pe-xl-5 anim_top">
              <div class="changeable_logo">
                <span class="nav_logo-image logo_light"><img src="/assets/images/logo-light.png" alt="Gority"></span>
                <span class="nav_logo-image logo_dark"><img src="/assets/images/logo-dark.png" alt="Gority"></span>
              </div>
              <div class="desc mb_40">Efficiently aggregate diverse products before progressive resources. Completely
                initiate orthogonal information through cross-unit core competencies.
              </div>
              <div class="social_link">
                <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
                <a href="https://twitter.com/?lang=en" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/bdmrk/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-4">
                <div class="widget anim_top">
                  <h5 class="widget_title">My Account</h5>
                  <ul class="nav_link">
                    <li><a href="authors.html">Author</a></li>
                    <li><a href="how.html">How it Works</a></li>
                    <li><a href="create-item.html">Create Item</a></li>
                    <li><a href="author-profile.html">Author Profile</a></li>
                    <li><a href="help.html">Terms and conditions</a></li>
                    <li><a href="javascript:void(0)">Collection</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="widget anim_top">
                  <h5 class="widget_title">Resources</h5>
                  <ul class="nav_link">
                    <li><a href="help.html">Help &amp; Support</a></li>
                    <li><a href="explore.html">Live Auctions</a></li>
                    <li><a href="create-item.html">Create NFTs</a></li>
                    <li><a href="help.html">Term &amp; Conditions</a></li>
                    <li><a href="item-details.html">Item Details</a></li>
                    <li><a href="notification.html">Activity</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="widget anim_top">
                  <h5 class="widget_title">Contact info</h5>
                  <ul class="contact_info">
                    <li>Ta-134/A, Gulshan Badda Link Rd, Dhaka,Bangladesh</li>
                    <li>(+880)155 69569 365</li>
                    <li>support@rstheme.com</li>
                    <li>Office Hours: 8AM - 11PM</li>
                    <li>Sunday - Wekend Day</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright_text anim_top">&copy; 2022 NFT Marketplace - Raritex@ All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import {mapActions} from 'vuex';

export default {
  name: 'Footer',
  data: () => ({
    email: '',
    loading: false,
  }),
  methods: {
    ...mapActions({
      sendEmail: "Subscriber/action_send_email"
    }),
    apiSubscriber() {
      this.loading = true
      this.sendEmail({email: this.email})
        .finally(()=>{
          this.loading = false
        });
    }
  }
}
</script>
