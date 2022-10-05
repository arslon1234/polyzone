<template>
  <main class="full-wrapper" id="home-section">
    <Header :title="'Shopping cart'" :sub_title="'Shopping'"/>
    <div class="shopping-cart">
      <div class="container">
        <h3>Shopping Cart</h3>
        <v-card class="mx-auto my-4 d-flex align-center justify-center models" outlined
                v-for="(mod, index) in mod_lists"
                :key="index">
          <v-list-item class="p-0 list1">
            <v-img
              width="140"
              height="140"
              class=" rounded-1"
              :src="mod.img_path"
            ></v-img>
            <v-card-text>
              <p class="font-weight-medium"><span>{{ mod.title }}</span></p>
              <p class="text-h5"><span>{{ mod.user.first_name }} {{ mod.user.last_name }}</span></p>
            </v-card-text>
          </v-list-item>
          <v-list-item-group class="mr-4 d-flex align-center list1">
            <v-card-text class="mr-6">
              <span class="text--secondary text-h6">Price</span>
              <p class="text-warning d-flex"><span>{{ mod.price.currency.number }} </span>
                <span> {{ mod.price.currency.code }}</span></p>
            </v-card-text>
            <v-btn color="error">Remove</v-btn>
          </v-list-item-group>
        </v-card>
        <v-card class="mx-auto mt-4 py-3 d-flex flex-wrap wrap align-center justify-content-between">
          <div class="d-flex flex-column mx-4 my-1">
            <span class="text--secondary text-h6">Total</span>
            <span class="text-warning d-flex">12000</span>
          </div>
          <v-btn color="success" class="mx-4 my-1">Proceed To Checkout</v-btn>
        </v-card>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/global/Header";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Shopping-Cart",
  components: {
    Header,
  },
  mounted() {
    this.getMod();
  },
  computed: {
    ...mapGetters({
      mod_lists: "Mod/list",
    }),
  },
  methods: {
    ...mapActions({
      getMod: "Mod/action_index",
    }),
  },
};
</script>

<style lang="scss" scoped>
.shopping-cart {
  width: 100%;
  padding: 70px 0;
  border-top: 1px solid transparent;
  border-image: url(@/assets/images/comment-bottom-line.png) 100 stretch;
  @media (max-width: 776.9px) {
    .models {
      display: flex;
      flex-direction: column;
    }
    .list1 {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

.v-card__text {
  p span {
    cursor: pointer;
  }

   p:hover:not(:first-child) {
    color: #FDB528;
  }
}
</style>
