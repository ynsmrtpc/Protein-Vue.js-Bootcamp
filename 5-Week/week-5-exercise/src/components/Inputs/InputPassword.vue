<script setup>
import { ref } from "vue";

const props = defineProps(["password", "placeholder"]);
const emit = defineEmits(["update:password"]);
const password = ref("");
const showPassword = ref(false);
const isValid = ref(null);

const passwordHandler = (event) => {
  password.value = event.target.value;
  const validationRegex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  if (
    password.value.length > 8 &&
    /\d/.test(password.value) &&
    /[A-Z]/.test(password.value) &&
    validationRegex.test(password.value)
  ) {
    isValid.value = true;
  } else {
    isValid.value = false;
  }
  if (isValid) {
    emit("update:password", password.value);
  }
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

    <i class="gg-eye" id="showPassword" @click="showPassword = !showPassword"></i>

    <p v-if="!isValid">
      <small class="invalid">&#215;</small>
    </p>

    <p v-else>
      <small class="valid">&#10004;</small>
    </p>
  </div>
</template>
