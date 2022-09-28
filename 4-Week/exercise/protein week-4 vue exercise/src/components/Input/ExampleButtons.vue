<script setup>
const props = defineProps(["mostCommonCharacters"]);
const emit = defineEmits(["activeName"]);
function activeCharacter(name) {
  emit("activeName", name);
}
</script>

<template>
  <div class="buttons">
    <template v-for="name in props.mostCommonCharacters">
      <button @click="activeCharacter(name)" class="button">{{ name }}</button>
    </template>
  </div>
</template>
