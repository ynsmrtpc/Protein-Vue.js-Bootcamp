<script setup>
import { ref } from "vue";

import InputEmail from "../Inputs/InputEmail.vue";
import InputPassword from "../Inputs/InputPassword.vue";
import FormButton from "../Buttons/FormButton.vue";
import ChangeMode from "../Buttons/ChangeMode.vue";
import NotificationsList from "../Notification/NotificationList.vue";
import { toast } from "../Notification/Toastify";

const email = ref("");
const password = ref("");
const pageMode = ref("");
const notifications = ref([]);

const props = defineProps(["showLogin"]);
const emit = defineEmits(["update:showLogin"]);

// login form'daki input değerlerini localStroge'daki ilgili veri ile karşılaştırır, başarı veya hata mesajı yazdırır
const loginHandler = () => {
  let user = JSON.parse(localStorage.getItem("userDetails"));

  const userIndex = user.email.indexOf(email.value);
  if (user.email[userIndex] === email.value && user.password[userIndex] === password.value) {
    notifications.value.push(
      toast("Giriş Başarılı", {
        position: "top-left",
        background: "green",
        barActive: true,
        barBackground: "#fafafa",
        icon: "🤓",
        duration: 3000,
      })
    );
  } else {
    notifications.value.push(
      toast("E-mail ya da parolayı kontrol ediniz", {
        position: "top-left",
        background: "red",
        barActive: true,
        barBackground: "#fafafa",
        icon: "🤯",
        duration: 3000,
      })
    );
  }
};

const buttonHandler = () => {
  emit("update:showLogin", !props.showLogin);
};
</script>

<template>
  <Teleport to="#notification">
    <NotificationsList :notifications="notifications"></NotificationsList>
  </Teleport>
  <form class="form" @submit.prevent="loginHandler" :class="' ' + pageMode">
    <ChangeMode v-model:mode="pageMode" />

    <i class="gg-backspace" @click="buttonHandler"></i>
    <!-- register sayfasına geri dönmek için -->

    <h1 class="form__headline">Login</h1>

    <InputEmail v-model:email="email" />
    <InputPassword v-model:password="password" placeholder="Password" />

    <FormButton name="LOGIN" class="signIn" type="submit" />
  </form>
</template>
