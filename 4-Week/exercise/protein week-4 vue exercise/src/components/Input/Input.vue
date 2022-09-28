<script setup>
import { ref } from "vue";
import ExampleButtons from "./ExampleButtons.vue";

const value = ref("");
const emit = defineEmits(["setName"]);
const props = defineProps(["mostCommonCharacters"]);

const inputHandler = (name) => {
  emit("setName", name);
};

function useName(name) {
  inputHandler(name);
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
  <ExampleButtons
    :mostCommonCharacters="mostCommonCharacters"
    @active-name="useName"
  />
</template>
