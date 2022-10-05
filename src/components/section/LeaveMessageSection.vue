<template>
  <div class="section_padding section_border_top">
    <div class="container">
      <div class="contact_area">
        <div class="row mb-4 mb-md-5 align-items-center">
          <div class="col-8">
            <h4 class="contact_title mb-0">Leave a Message</h4>
          </div>
          <div class="col-4 text-end">
            <a href="#" class="lang_select"
              >English (UK)
              <i class="fas fa-caret-down"></i>
            </a>
          </div>
        </div>
        <div class="row pt-md-4">
          <div class="col-lg-7">
            <ValidationObserver
              v-slot="{ handleSubmit }"
              class="contact_form"
              ref="form"
            >
              <form @submit.prevent="handleSubmit(onSubmit)">
                <div v-if="errors.length">
                  <p>Please correct the following errors:</p>
                  <ul>
                    <li v-for="error in errors" :key="error.id">{{ error }}</li>
                  </ul>
                </div>
                <ValidationProvider
                  rules="required"
                  name="Full name"
                  v-slot="{ errors }"
                  :vid="event.name"
                  class="col-sm-12 form-box"
                >
                  <input
                    type="text"
                    name="form-name"
                    class="input_control"
                    placeholder="Enter full name"
                    v-model="event.name"
                  />
                  <span class="validation">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider
                  rules="required"
                  name="Email"
                  v-slot="{ errors }"
                  :vid="event.email"
                  class="col-sm-12 form-box"
                >
                  <input
                    type="email"
                    name="form-email"
                    class="input_control"
                    placeholder="Enter email address"
                    v-model="event.email"
                  />
                  <span class="validation">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider
                  rules="required"
                  name="Form-subject"
                  v-slot="{ errors }"
                  :vid="event.subject"
                  class="col-sm-12 form-box"
                >
                  <input
                    type="text"
                    name="form-subject"
                    class="input_control"
                    placeholder="Enter subject"
                    v-model="event.subject"
                  />
                  <span class="validation">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider
                  rules="required"
                  name="Form-message"
                  v-slot="{ errors }"
                  :vid="event.message"
                  class="col-sm-12 form-box"
                >
                  <textarea
                    name="form-message"
                    id="message"
                    class="input_control"
                    placeholder="Enter your message"
                    v-model="event.message"
                  ></textarea>
                  <span class="validation">{{ errors[0] }}</span>
                </ValidationProvider>
                <button type="submit" class="gr_button full">
                  Send Message
                </button>
              </form>
            </ValidationObserver>
          </div>
          <div class="col-lg-4 offset-lg-1 mt-5 mt-lg-0">
            <ul class="icon_list">
              <li>
                <span class="icon">
                  <i class="fal fa-map-marker-alt"></i>
                </span>
                <span class="text"
                  >Infomation technologies building, Victoria Island, Lagos,
                  Nigeria.</span
                >
              </li>
              <li>
                <span class="icon">
                  <i class="fal fa-phone"></i>
                </span>
                <span class="text">+234 081-1236-4568</span>
              </li>
              <li>
                <span class="icon">
                  <i class="fal fa-envelope"></i>
                </span>
                <span class="text">hello@info.com.ng</span>
              </li>
            </ul>
            <div class="social_menu">
              <a href="https://www.youtube.com/" target="_blank">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="https://twitter.com/?lang=en" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/bdmrk/" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div class="map_frame">
              <iframe
                src="https://yandex.com/map-widget/v1/?um=constructor%3Ac4898c9c9097b36274a8bbf392978aa4178ffbd109c4ffdf9ad7e106da2ffa9d&amp;source=constructor"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {API_MAIL_LEAVE_A_MESSAGE} from "@/api/social/Mail";

export default {
  name: 'LeaveMessageSection',
  data() {
    return {
      errors: [],
      event: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      API_MAIL_LEAVE_A_MESSAGE(this.event).then((response) => {
        if (response.status === 200) {
          this.event.name = "";
          this.event.email = "";
          this.event.subject = "";
          this.event.message = "";
          this.$refs["form"].reset();
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.validation {
  color: #f84f4f;
}
</style>
