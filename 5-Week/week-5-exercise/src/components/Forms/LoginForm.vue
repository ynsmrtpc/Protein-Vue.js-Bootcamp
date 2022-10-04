<script setup>
import { ref } from "vue";

import InputEmail from "../Inputs/InputEmail.vue";
import InputPassword from "../Inputs/InputPassword.vue";
import FormButton from "../Buttons/FormButton.vue";
import ChangeMode from "../Buttons/ChangeMode.vue";

const email = ref("");
const password = ref("");
const isSuccess = ref(false);
const loginSituation = ref("");
const pageMode = ref("");

const props = defineProps(["showLogin"]);
const emit = defineEmits(["update:showLogin"]);

// login form'daki input değerlerini localStroge'daki ilgili veri ile karşılaştırır, başarı veya hata mesajı yazdırır
const loginHandler = () => {
  let user = JSON.parse(localStorage.getItem("userDetails"));

  const userIndex = user.email.indexOf(email.value);
  if (user.email[userIndex] === email.value && user.password[userIndex] === password.value) {
    isSuccess.value = true;
    loginSituation.value = "Giriş Başarılı!";
  } else {
    isSuccess.value = true;

    loginSituation.value = "E-mail ya da parolayı kontrol ediniz!";
  }
  setTimeout(() => {
    isSuccess.value = false;
    loginSituation.value = "";
  }, 2000);
};

const buttonHandler = () => {
  emit("update:showLogin", !props.showLogin);
};
</script>

<template>
  <form class="form" @submit.prevent="loginHandler" :class="' ' + pageMode">
    <ChangeMode v-model:mode="pageMode" />

    <i class="gg-backspace" @click="buttonHandler"></i>
    <!-- register sayfasına geri dönmek için -->

    <h1 class="form__headline">Login</h1>

    <div v-if="isSuccess" class="form__loginSituation">
      {{ loginSituation }}
    </div>

    <InputEmail v-model:email="email" />
    <InputPassword v-model:password="password" placeholder="Password" />

    <FormButton name="LOGIN" class="signIn" type="submit" />
  </form>
</template>
