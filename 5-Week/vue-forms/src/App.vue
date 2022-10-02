<script setup>
import { ref } from "vue";
import InputText from "./components/InputText.vue";
import InputMail from "./components/InputMail.vue";
import { computed } from "@vue/reactivity";

// const firstName = ref("");
// const lastName = ref("");
// const email = ref("");
// const reemail = ref("");
// const isValid = ref(null);

const registerInfos = ref({
  firstName: ref(""),
  lastName: ref(""),
  email: ref(""),
  reemail: ref(""),
  isValid: ref(null),
});
console.log(registerInfos.value.firstName);
async function submitHandler() {
  registerInfos.value.isValid = computed(() => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      registerInfos.value.email
    );
  });
  if (registerInfos.value.isValid == true) {
    // const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name: firstName.value,
    //     lastname: lastName.value,
    //     email: email.value,
    //   }),
    // }).then((res) => console.log(res));

    localStorage.setItem("name", registerInfos.value.firstName);
    localStorage.setItem("lastname", registerInfos.value.lastName);
    localStorage.setItem("email", registerInfos.value.email);

    registerInfos.value.firstName = "";
    registerInfos.value.lastName = "";
    registerInfos.value.email = "";
    registerInfos.value.reemail = "";
    registerInfos.value.isValid = null;
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
  {{ registerInfos.firstName }} <br />
  {{ registerInfos.lastName }} <br />
  {{ registerInfos.email }} <br />
  {{ registerInfos.reemail }} <br />
  {{ registerInfos.isValid }} <br />
  <small v-if="registerInfos.isValid">Geçerli bir mail adresi giriniz!</small>

  <form class="forms" @submit.prevent="submitHandler">
    <InputText
      v-model:name="registerInfos.firstName"
      label="First Name"
    ></InputText>
    <InputText
      v-model:name="registerInfos.lastName"
      label="Last Name"
    ></InputText>
    <InputMail v-model:email="registerInfos.email" label="Email"></InputMail>
    <InputMail
      v-model:email="registerInfos.reemail"
      label="Confirm Email"
    ></InputMail>
    <button type="submit">Gönder</button>
  </form>
</template>

<style scoped lang="scss"></style>
