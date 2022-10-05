<template>
  <div>
    <div class="row mb-4 mb-md-5 lang-row">
      <div class="col-12 text-md-end">
        <a href="javascript:void(0)" class="lang_select">English (UK) <i class="fas fa-caret-down"></i></a>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-12">
        <h4 class="contact_title mb-0">Create Your Account </h4>
      </div>
    </div>
    <div class="row g-4">
      <div class="col-lg-6">
        <button class="normal_button">
          <span class="icon"><img src="/assets/images/google-icon.png" alt=""></span>
          <span class="text">Continue with Google</span>
        </button>
      </div>
      <div class="col-lg-6">
        <button class="normal_button">
          <span class="icon"><img src="/assets/images/facebook-icon.png" alt=""></span>
          <span class="text">Continue with Facebook</span>
        </button>
      </div>
    </div>
    <div class="row my-4 my-lg-5">
      <div class="col-12">
        <div class="or-separetor text-center">- OR -</div>
      </div>
    </div>
    <form class="login_form" @submit.prevent="apiRegister">
      <div class="row">
        <div class="col-lg-6">
          <div class="form-box">
            <input v-model="first_name" type="text" name="form-name" class="input_control" placeholder="First Name">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-box">
            <input v-model="last_name" type="text" name="form-name" class="input_control" placeholder="Last Name">
          </div>
        </div>
      </div>
      <div class="form-box">
        <input v-model="nick_name" type="text" name="form-name" class="input_control" placeholder="Nik Name">
      </div>
      <div class="form-box">
        <input v-model="email" type="email" name="form-email" class="input_control" placeholder="Email Address">
      </div>
      <div class="form-box">
        <input v-model="password" type="password" name="form-pass" class="input_control" placeholder="Password">
      </div>
      <div class="form-box">
        <input v-model="password_confirmation" type="password" name="form-pass" class="input_control" placeholder="Password Confirmation">
      </div>
      <button type="submit" class="gr_button full">Create Account</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "RegisterLocal",
  data() {
    return {
      first_name: '',
      last_name: '',
      nick_name: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
  },
  methods: {
    ...mapActions({
      "register": "Auth/register"
    }),
    apiRegister() {
      this.register({
        first_name: this.first_name,
        last_name: this.last_name,
        nick_name: this.nick_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      })
        .then(response => {
          if (response.status === 200) this.$router.push("/");
        })
    }
  }
}
</script>
