<script setup>
const props = defineProps(["names"]);
const emit = defineEmits(["activeName"]);
function activeCharacter(name) {
  emit("activeName", name);
}
</script>

<template>
  <div class="buttons">
    <template v-for="name in props.names">
      <button @click="activeCharacter(name)" class="button">{{ name }}</button>
    </template>
  </div>
</template>
