<script setup>
import Input from "./components/Input/Input.vue";
import Cards from "./components/Cards/Cards.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const data = ref([]);
const character = ref("");

const Characters = async () => {
  const result = await axios
    .get("https://hp-api.herokuapp.com/api/characters")
    .then((res) => res.data);
  return result;
};

const findTheCharacterName = (name) => {
  character.value = data.value.filter(
    (character) => character.name.toLowerCase() === name.toLowerCase()
  );
};

onMounted(async () => {
  data.value = await Characters();
});
</script>

<template>
  <Input @setName="findTheCharacterName" />
  <Cards :character="character" />
</template>
