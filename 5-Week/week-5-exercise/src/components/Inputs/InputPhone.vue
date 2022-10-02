<script setup>
const props = defineProps(["phone"]);
const emit = defineEmits(["update:phone"]);
const phoneHandler = (event) => {
  emit("update:phone", event.target.value);
};
</script>

<template>
  <div class="form__wrapper">
    <input
      class="form__input"
      type="tel"
      name="phone"
      id="phone"
      :value="phone"
      @input="phoneHandler"
      placeholder="Phone"
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
    />
  </div>
</template>
