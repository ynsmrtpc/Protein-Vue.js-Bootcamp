<template>
  <img :src="props.image" class="img" />
</template>

<script setup>
const props = defineProps(["image"]);
</script>

<style scoped>
.img {
  width: 250px;
  height: 250px;
  padding: 5px;
  border-radius: 20px;
}

@media screen and (max-width: 992px) {
  .img {
    width: 110px;
    height: 110px;
    padding: 1px;
  }
}

@media screen and (max-width: 600px) {
  .img {
    width: 110px;
    height: 110px;
    padding: 1px;
  }
}
</style>
