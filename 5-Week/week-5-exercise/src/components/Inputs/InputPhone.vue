<script setup>
import { ref } from "vue";

const props = defineProps(["phone"]);
const emit = defineEmits(["update:phone"]);
const phone = ref("");
const isValid = ref(null);

function validatePhone() {
  const validationRegex = /^\d{10}$/;
  if (phone.value.match(validationRegex)) {
    isValid.value = true;
  } else {
    isValid.value = false;
  }
}

const phoneHandler = (event) => {
  phone.value = event.target.value;
  if (isValid.value) {
    emit("update:phone", phone.value);
  }
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
      @keyup="validatePhone"
    />

    <p v-if="!isValid">
      <small class="invalid">&#215;</small>
    </p>

    <p v-else>
      <small class="valid">&#10004;</small>
    </p>
  </div>
</template>
