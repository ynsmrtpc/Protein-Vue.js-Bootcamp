<script setup>
import { ref } from "vue";
import FormButton from "./components/Buttons/FormButton.vue";
import InputEmail from "./components/Inputs/InputEmail.vue";
import InputName from "./components/Inputs/InputName.vue";
import InputPassword from "./components/Inputs/InputPassword.vue";
import InputPhone from "./components/Inputs/InputPhone.vue";

const showLogin = ref(true);
const fullName = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const confirmPassword = ref("");

const registerHandler = () => {
  let data;
  if (localStorage.getItem("userDetails") === null) {
    data = { fullName: [], email: [], phone: [], password: [] };
  } else {
    data = JSON.parse(localStorage.getItem("userDetails"));
  }
  data.fullName.push(fullName.value);
  data.email.push(email.value);
  data.phone.push(phone.value);
  data.password.push(password.value);
  localStorage.setItem("userDetails", JSON.stringify(data));

  fullName.value = "";
  email.value = "";
  phone.value = "";
  password.value = "";
  confirmPassword.value = "";
};

const loginHandler = () => {};
</script>

<template>
  <form v-if="showLogin" class="form" @submit.prevent="registerHandler">
    <h1 class="form__headline">Register</h1>
    <InputName v-model:name="fullName" />
    <InputEmail v-model:email="email" />
    <InputPhone v-model:phone="phone" />
    <InputPassword v-model:password="password" placeholder="Password" />
    <InputPassword
      v-model:password="confirmPassword"
      placeholder="Confirm Password"
    />
    <div class="form__divider"></div>
    <FormButton name="Register" type="submit" />
    <FormButton
      name="Have account? Sign In"
      class="signIn"
      @click="showLogin = !showLogin"
      type="button"
    />
  </form>

  <form v-else class="form" @submit.prevent="loginHandler">
    <i class="gg-backspace" @click="showLogin = !showLogin"></i>
    <h1 class="form__headline">Login</h1>

    <InputEmail v-model:name="email" />
    <InputPassword v-model:password="password" placeholder="Password" />

    <FormButton name="LOGIN" class="signIn" type="submit" />
  </form>
</template>
