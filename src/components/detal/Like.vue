<template>
  <span class="icon" @click="liked()">
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="warning"
      :size="size"
      :width="width"
    ></v-progress-circular>
    <i
      v-else
      class="far fa-heart"
    ></i>

  </span>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'Like',
  props: {
    id: {
      required: true,
      default: 0,
    },
    size: {
      default: 15,
    },
    width: {
      default: 2,
    }
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    ...mapActions({
      addLike: "ModLike/action_store"
    }),
    liked() {
      this.loading = true;
      this.addLike(this.id)
        .finally(() => {
          this.loading = false;
        });
    }
  }
}
</script>

<style scoped lang="scss">
span {
  cursor: pointer;
}
</style>

