<script setup>
const props = defineProps(["name", "class", "type"]);
const emit = defineEmits("showLogin");
</script>

<template>
  <button :class="'form__button' + ' ' + props.class" :type="type">
    {{ name }}
  </button>
</template>
