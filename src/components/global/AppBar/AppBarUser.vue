<template>
  <div class="relative user_cirlce">
    <template v-if="authentication">
      <button class="avatar-button">
        <img :src="user.avatar" alt="">
      </button>
      <div class="user_mini_cart">
        <h6 class="title">{{user.first_name}} {{user.last_name}}</h6>
        <div class="desc">1200 ETH</div>
        <h6 class="title">My Wallet</h6>
        <div class="desc text_copy"><span
          class="text">DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME</span>
          <button class="copy_button">Copy</button>
        </div>
        <hr>
        <ul class="icon_list">
          <li>
            <a href="author-profile.html">
              <span class="icon"><i class="far fa-user"></i></span>
              <span class="text">My Profile</span>
            </a>
          </li>
          <li>
            <a href="profile-setting.html">
              <span class="icon"><i class="far fa-pencil"></i></span>
              <span class="text">Edit Profile</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <span class="icon"><i class="far fa-sign-out"></i></span>
              <span class="text">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </template>
    <template v-else>
      <button class="circle-button">
        <i class="fas fa-user"></i>
      </button>
      <div class="user_mini_cart">
        <h6 class="title">User</h6>
        <div class="desc">1200 ETH</div>
        <h6 class="title">My Wallet</h6>
        <div class="desc text_copy">
                <span
                  class="text"
                >DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME</span
                >
          <button class="copy_button">Copy</button>
        </div>
        <hr />
        <ul class="icon_list">
          <li>
            <a href="author-profile.html">
              <span class="icon"><i class="far fa-user"></i></span>
              <span class="text">My Profile</span>
            </a>
          </li>
          <li>
            <a href="profile-setting.html">
              <span class="icon"><i class="far fa-pencil"></i></span>
              <span class="text">Edit Profile</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <span class="icon"><i class="far fa-sign-out"></i></span>
              <span class="text">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name:"AppBarUser",
  computed:{
    ...mapGetters({
      authentication: "Auth/authentication",
      user: "Auth/user",
    })
  }
}
</script>

<style lang="scss" scoped>
.avatar-button {
  border: 1px solid rgb(var(--gray-alt-bg));
  color: rgb(var(--body-color))!important;
  width: 60px;
  height: 60px;
  display: block;
  border-radius: 30px;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  background: none;
  outline: none;
  position: relative;
}

.avatar-button img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-button:focus {
  outline: none;
}

.avatar-button:not(.no-hover):hover {
  border: 2px solid rgb(var(--secondary-color));
  color: rgb(var(--dark-color));
}

@media screen and (min-width: 1200px) {
  .nav_area .avatar-button {
    margin-left: 20px;
  }
}

@media screen and (max-width: 1380px) {
  .avatar-button {
    width: 50px;
    height: 50px;
  }
}

@media screen and (max-width: 1200px) {
  .nav_area .avatar-button {
    margin: 10px;
  }
}

@media screen and (max-width: 992px) {
  .avatar-button {
    width: 44px;
    height: 44px;
  }
}
</style>
