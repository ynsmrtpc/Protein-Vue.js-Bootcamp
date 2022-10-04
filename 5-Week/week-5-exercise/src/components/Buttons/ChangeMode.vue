<script setup>
import { ref } from "vue";

// karanlık ve aydınlık mod arasında geçiş yapmak için
const dark_light = ref("🌚");
const pageMode = ref("");

const emit = defineEmits(["update:mode"]);

// karanlık ve aydınlık modu değiştiren fonksiyon
const modeToggle = () => {
  if (dark_light.value === "🌚") {
    dark_light.value = "☀️";
    pageMode.value = "dark";
    emit("update:mode", pageMode.value);
  } else if (dark_light.value === "☀️") {
    dark_light.value = "🌚";
    pageMode.value = "";
    emit("update:mode", pageMode.value);
  }
};
</script>

<template>
  <button class="darkLight" @click="modeToggle" type="button">
    {{ dark_light }}
  </button>
</template>
