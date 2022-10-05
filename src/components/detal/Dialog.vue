<template>
  <div class="modal fade in" v-if="show" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content modal_card">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    show: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: block;
  background-color: rgba(var(--body-bg), 1);
}

.modal-dialog {
  display: block;
  margin: 0;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%) !important;
  padding: 0;
  height: auto;
}
</style>
