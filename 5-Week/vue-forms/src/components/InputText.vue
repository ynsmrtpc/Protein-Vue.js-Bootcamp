<script setup>
const props = defineProps(["name", "label"]);
const emit = defineEmits(["update:name"]);

const nameHandler = (event) => {
  emit("update:name", event.target.value);
};
// console.log("props", props);
</script>
<template>
  <div class="form__wrapper">
    <!-- <label class="form__label" for="name">{{ label }}</label> <br /> -->
    <input
      class="form__input"
      type="text"
      name="name"
      id="name"
      :value="name"
      :placeholder="'Please enter ' + props.label.toLowerCase()"
      @input="nameHandler"
    />
  </div>
</template>
