<template>
  <template v-for="i in props.title.length">
    <h3 class="card__title">{{ props.title[i - 1] }}</h3>
  </template>
</template>

<script setup>
const props = defineProps(["title"]);
</script>
