<script setup>
import { ref } from "vue";

const props = defineProps(["password", "placeholder"]);
const emit = defineEmits(["update:password"]);

const showPassword = ref(false);

const passwordHandler = (event) => {
  emit("update:password", event.target.value);
};
</script>

<template>
  <div class="form__wrapper">
    <input
      v-if="!showPassword"
      class="form__input"
      type="password"
      name="password"
      @input="passwordHandler"
      :value="password"
      :placeholder="placeholder"
    />
    <input
      v-else
      class="form__input"
      type="text"
      name="password"
      @input="passwordHandler"
      :value="password"
      :placeholder="placeholder"
    />
    <i
      class="gg-eye"
      id="showPassword"
      @click="showPassword = !showPassword"
    ></i>
  </div>
</template>
