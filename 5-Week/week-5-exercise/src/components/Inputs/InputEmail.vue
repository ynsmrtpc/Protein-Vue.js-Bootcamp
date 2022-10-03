<script setup>
import { computed, ref } from "@vue/reactivity";

const props = defineProps(["email"]);
const emit = defineEmits(["update:email"]);
const email = ref("");

let isValid = computed(() => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
});
if (isValid) {
  const emailHandler = async (event) => {
    email.value = event.target.value;
    emit("update:email", email.value);
  };
}
</script>

<template>
  <div class="form__wrapper">
    <input
      class="form__input"
      type="email"
      name="email"
      id="email"
      :value="email"
      @input="emailHandler"
      placeholder="E-mail"
    />
    <p v-if="isValid === false">
      <small class="invalid">&#215;</small>
    </p>
    <p v-if="isValid === true">
      <small class="valid">&#10004;</small>
    </p>
  </div>
</template>
