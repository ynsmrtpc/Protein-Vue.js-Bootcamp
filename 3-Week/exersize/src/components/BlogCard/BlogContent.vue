<template>
  <template v-for="i in props.content.length">
    <div class="card__description">{{ props.content[i] }}</div>
  </template>
</template>

<script setup>
let props = defineProps(["content"]);
</script>
