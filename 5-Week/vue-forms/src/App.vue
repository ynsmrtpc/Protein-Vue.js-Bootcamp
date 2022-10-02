<script setup>
import { ref } from "vue";
import InputText from "./components/InputText.vue";
import InputMail from "./components/InputMail.vue";
import { computed } from "@vue/reactivity";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const reemail = ref("");
const isValid = ref(null);

async function submitHandler() {
  isValid.value = computed(() => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
  });
  if (isValid.value.value === true) {
    // const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name: firstName.value,
    //     lastname: lastName.value,
    //     email: email.value,
    //   }),
    // }).then((res) => console.log(res));

    localStorage.setItem("name", firstName.value);
    localStorage.setItem("lastname", lastName.value);
    localStorage.setItem("email", email.value);

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    reemail.value = "";
    isValid.value = null;
    console.log(
      localStorage.getItem("name"),
      localStorage.getItem("lastname"),
      localStorage.getItem("email")
    );
    // return result;
  }
}
</script>

<template>
  <small v-if="isValid">Geçerli bir mail adresi giriniz!</small>

  <form class="forms" @submit.prevent="submitHandler">
    <InputText v-model:name="firstName" label="First Name"></InputText>
    <InputText v-model:name="lastName" label="Last Name"></InputText>
    <InputMail v-model:email="email" label="Email"></InputMail>
    <InputMail v-model:email="reemail" label="Confirm Email"></InputMail>
    <button type="submit">Gönder</button>
  </form>
</template>

<style scoped lang="scss"></style>
