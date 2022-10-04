<script setup>
import { ref } from "vue";

import RegisterForm from "./components/Forms/RegisterForm.vue";
import LoginForm from "./components/Forms/LoginForm.vue";

const showLogin = ref(true); // login bilgisini gösterir
</script>

<template>
  <template v-if="showLogin">
    <RegisterForm v-model:showLogin="showLogin" />
  </template>

  <template v-else>
    <LoginForm v-model:showLogin="showLogin" />
  </template>

  <a
    class="github"
    href="https://github.com/ynsmrtpc/Protein-Vue.js-Bootcamp/tree/main/5-Week/week-5-exercise"
    target="_blank"
    rel="noopener noreferrer"
    >Go to Github Page</a
  >
</template>
