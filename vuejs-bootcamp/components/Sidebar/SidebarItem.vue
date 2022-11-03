<script setup>
const props = defineProps(["link", "name", "size"]);
</script>

<template>
  <NuxtLink :to="'/' + props.link"
    ><span class="material-symbols-outlined" :style="{ fontSize: props.size }">
      {{ props.name }}
    </span></NuxtLink
  >
</template>
