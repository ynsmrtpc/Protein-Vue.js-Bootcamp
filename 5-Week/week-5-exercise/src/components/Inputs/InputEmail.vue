<script setup>
const props = defineProps(["email"]);
const emit = defineEmits(["update:email"]);

const emailHandler = (event) => {
  emit("update:email", event.target.value);
};
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
  </div>
</template>
