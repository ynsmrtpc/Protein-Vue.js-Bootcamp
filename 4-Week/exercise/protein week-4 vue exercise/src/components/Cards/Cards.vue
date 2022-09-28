<script setup>
import Card from "../Card/Card.vue";

const props = defineProps(["character"]);
</script>

<template>
  <template class="container">
    <Card :character="props.character" />
  </template>
</template>

<style lang="scss" scoped>
.container {
  margin: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
