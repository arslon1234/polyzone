<template>
  <main class="full-wrapper" id="home-section">
    <Header :title="'Contact Us'" :sub_title="'Contact Form'" />
    <LeaveMessageSection />
  </main>
</template>

<script>
import Header from "@/components/global/Header";
import LeaveMessageSection from "@/components/section/LeaveMessageSection.vue";

export default {
  name: "ContactPage",
  components: {
    Header,
    LeaveMessageSection,
  }
};
</script>
