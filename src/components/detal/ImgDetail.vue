<template>
  <img :src="img" alt="">
</template>

<script>
export default {
  name:'Images',
 props:{
    img: {
      type: String,
    }
  }
}
</script>

<style scoped>
img{
  aspect-ratio: 8 / 5;
}
</style>
