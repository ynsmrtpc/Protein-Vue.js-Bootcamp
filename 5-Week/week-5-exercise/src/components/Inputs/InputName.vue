<script setup>
import { ref, computed } from "vue";
const props = defineProps(["name"]);
const emit = defineEmits(["update:name"]);
const name = ref("");

const nameHandler = (event) => {
  name.value = event.target.value;
  if (isValid) {
    emit("update:name", name.value);
  }
};

let isValid = computed(() => {
  return /[^a-zA-Z]/.test(name.value);
});
</script>

<template>
  <div class="form__wrapper">
    <input
      class="form__input"
      type="text"
      name="name"
      id="name"
      :value="name"
      placeholder="Full Name"
      @input="nameHandler"
    />
  </div>
  <p v-if="!isValid">
    <small class="invalid">&#215;</small>
  </p>
  <p v-else>
    <small class="valid">&#10004;</small>
  </p>
</template>
