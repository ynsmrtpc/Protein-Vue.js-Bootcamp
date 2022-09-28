<script setup>
import { ref } from "vue";
import ExampleButtons from "./ExampleButtons.vue";

const value = ref("");
const emit = defineEmits(["setName"]);
const names = [
  "Harry Potter",
  "Ron Weasley",
  "Hermione Granger",
  "Draco Malfoy",
  "Minerva McGonagall",
];
const inputHandler = (name) => {
  emit("setName", name);
  console.log(name);
};

function useName(name) {
  value.value = name;
}
</script>

<template>
  <div class="inputDiv">
    <input
      placeholder="Search..."
      class="inputDiv__input"
      type="text"
      v-model="value"
      @keydown.enter="
        inputHandler(value);
        value = '';
      "
    />
  </div>
  <ExampleButtons :names="names" @active-name="useName" />
</template>
