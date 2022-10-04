<script setup>
import { ref } from "vue";

import FormButton from "../Buttons/FormButton.vue";
import InputEmail from "../Inputs/InputEmail.vue";
import InputName from "../Inputs/InputName.vue";
import InputPassword from "../Inputs/InputPassword.vue";
import InputPhone from "../Inputs/InputPhone.vue";
import ChangeMode from "../Buttons/ChangeMode.vue";

const props = defineProps(["showLogin"]);
const emit = defineEmits(["update:showLogin"]);

const fullName = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const confirmPassword = ref("");
const isSuccess = ref(false); // hata ya da başarı mesajını gösterip gizlemek için
const loginSituation = ref(""); // ekrana hata ya da başarı mesajı yazmak için
const pageMode = ref("");

// register form'daki bilgileri kontrol eder ve son validasyon işlemlerini yapar(diğer validasyon işlemleri ilgili componentlerin içinde yapılmıştır)
// eğer bilgiler doğruysa localstorage'a verileri yazar
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

  if (fullName.value === "" || phone.value === "" || email.value === "" || password.value === "") {
    isSuccess.value = true;
    loginSituation.value = "Tüm alanları doldurmalısınız!";
  } else if (password.value !== confirmPassword.value) {
    isSuccess.value = true;
    loginSituation.value = "Parolalar eşleşmiyor!";
  } else {
    localStorage.setItem("userDetails", JSON.stringify(data));
    loginSituation.value = "Kayıt Oluşturuldu!";
    isSuccess.value = true;
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
  <form class="form" @submit.prevent="registerHandler" :class="' ' + pageMode">
    <ChangeMode v-model:mode="pageMode" />

    <h1 class="form__headline">Register</h1>

    <div v-if="isSuccess" class="form__loginSituation">
      {{ loginSituation }}
    </div>

    <InputName v-model:name="fullName" />
    <InputEmail v-model:email="email" />
    <InputPhone v-model:phone="phone" />
    <InputPassword v-model:password="password" placeholder="Password" />
    <InputPassword v-model:password="confirmPassword" placeholder="Confirm Password" />

    <div class="form__divider"></div>
    <!-- buttonlar ve inputlar arasına boşluk koymak için  -->

    <FormButton name="Register" type="submit" />
    <FormButton name="Have account? Sign In" class="signIn" @click="buttonHandler" type="button" />
  </form>
</template>
