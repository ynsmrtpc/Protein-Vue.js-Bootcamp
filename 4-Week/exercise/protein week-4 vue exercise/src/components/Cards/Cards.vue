<script setup>
import Card from "../Card/Card.vue";

const props = defineProps(["character"]);
</script>

<template>
  <Card :character="props.character" />
</template>
