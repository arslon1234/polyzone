<template>
  <div>
    <!--  <v-app-bar app>-->
    <div class="navbar_height"></div>
    <!-- nav_area-Start -->
    <div class="nav_area" data-spy="affix" data-offset-top="197">
      <div class="container nav_row">
        <!-- nav_logo-Start -->
        <div class="nav_logo">
          <!-- Text-Logo-Markup -->
          <!--<h2 class="nav_logo-text"><a href="javascript:void(0)">Gority</a></h2>-->
          <!-- Image-Logo-Markup -->
          <router-link to="/home" tag="a" class="nav_logo-image logo_light"
            ><img src="/assets/images/logo-light.png" alt="Gority"
          /></router-link>
          <router-link to="/home" tag="a" class="nav_logo-image logo_dark"
            ><img src="/assets/images/logo-dark.png" alt="Gority"
          /></router-link>
        </div>
        <!--nav_logo-End-->
        <div class="nav_toggle circle-button" id="nav-toggle">
          <i class="fal fa-bars"></i>
        </div>
        <div class="nav_right" id="nav-right">
          <div class="nav_close" id="nav-close">
            <i class="fal fa-times"></i>
          </div>
          <!-- nav_menu-Start -->
          <nav class="nav_menu" id="nav-menu">
            <ul class="nav">
              <li class="front-page-item current-menu-item">
                <router-link to="/" tag="a">Home</router-link>
              </li>
              <li>
                <router-link tag="a" :to="'/about'">About us</router-link>
              </li>
              <li>
                <router-link tag="a" :to="'/mod'">Models</router-link></li>
              <!-- <li><router-link tag="a" :to="'/mod'"
                  ><span class="new-badge">New</span>Explore new</router-link>
              </li>-->
              <li>
                <a href="javascript:void(0)">Pages</a>
                <ul class="sub-menu">
                  <li>
                    <a href="authors.html">Authors</a>
                    <ul class="sub-menu">
                      <li>
                        <router-link tag="a" :to="'/authors'"
                          >Authors</router-link
                        >
                      </li>
                      <li><a href="author-profile.html">Author Profile</a></li>
                      <li><a href="login.html">Login</a></li>
                      <li><a href="register.html">Register</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                    <ul class="sub-menu">
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="blog-grid.html">Blog Grid</a></li>
                      <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                  </li>
                  <li><a href="create-item.html">Create Item</a></li>
                  <li><a href="explore.html">Explore</a></li>
                  <li><a href="help.html">Help</a></li>
                  <li><a href="how.html">How it Works</a></li>
                  <li><a href="item-details.html">Item Details</a></li>
                  <li><a href="notification.html">Notification</a></li>
                  <li><a href="ranking.html">Ranking</a></li>
                  <li><a href="wallet.html">Wallet</a></li>
                  <li><router-link tag="a" :to="'/shopping_cart'">Shopping cart</router-link></li>
                </ul>
              </li>
              <li>
                <router-link tag="a" :to="'/contact'">Contact</router-link>
              </li>
              <li>
                <router-link tag="a" :to="'/auth/login'">Sign in</router-link>
              </li>
            </ul>
          </nav>
          <!-- nav_menu-End -->
          <!-- Search-Form-Tigger-Button -->
          <div class="nav_search">
            <button class="nav_search-toggle circle-button">
              <i class="far fa-search"></i>
            </button>
            <form class="nav_search-form">
              <input
                type="text"
                placeholder="Search keyword"
                id="search"
                autocomplete="off"
              />
              <button type="submit"><i class="far fa-search"></i></button>
            </form>
          </div>
          <AppBarShoppingCart />
          <!--Action-Button-->
          <a href="wallet.html" class="primary_button">Connect Wallet</a>
          <!-- Theme change button -->
          <button
            class="fa-moon fas change-theme circle-button"
            id="theme-button"
            @click="$vuetify.theme.dark = !$vuetify.theme.dark"
          ></button>
          <AppBarUser />
        </div>
      </div>
    </div>
    <!-- nav_area-End -->
    <!--  </v-app-bar>-->
  </div>
</template>

<script>
import AppBarUser from "@/components/global/AppBar/AppBarUser";
import AppBarShoppingCart from "@/components/global/AppBar/AppBarShoppingCart";
export default {
  name: "AppBar",
  components: {AppBarShoppingCart, AppBarUser},
};
</script>


