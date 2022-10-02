<script setup>
import { computed } from "vue";
const props = defineProps(["email", "label"]);
const emit = defineEmits(["update:email"]);

const emailHandler = (event) => {
  emit("update:email", event.target.value);
};
</script>

<template>
  <div class="form__wrapper">
    <!-- <label class="form__labe">{{ label }}</label> <br /> -->
    <input
      class="form__input"
      type="email"
      name="email"
      id="email"
      :value="email"
      @input="emailHandler"
      :placeholder="'Please enter ' + props.label.toLowerCase()"
    />
  </div>
</template>
