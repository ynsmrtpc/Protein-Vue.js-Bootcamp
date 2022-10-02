<script setup>
import Input from "./components/Input/Input.vue";
import Cards from "./components/Cards/Cards.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const data = ref([]);
const mostCommonCharacters = ref([]);
const character = ref("");
// const characterHouse = ref("");

const Characters = async () => {
  const result = await axios
    .get("https://hp-api.herokuapp.com/api/characters")
    .then((res) => res.data);
  return result;
};

const findTheCharacterName = (name) => {
  character.value = data.value.filter(
    (character) => character.name.toLowerCase() === name.toLowerCase().trim()
  );
};

// const findTheCharacterHouse = (name) => {
//   characterHouse.value = data.value.filter(
//     (character) => character.house.toLowerCase() === name.toLowerCase().trim()
//   );
// };

onMounted(async () => {
  data.value = await Characters();
  data.value.forEach((character) => {
    if (mostCommonCharacters.value.length < 15) {
      mostCommonCharacters.value.push(character.name);
    }
  });
});
</script>

<template>
  <Input
    @setName="findTheCharacterName"
    :mostCommonCharacters="mostCommonCharacters"
  />

  <Cards :character="character" />
  <!-- <Cards :character="characterHouse" /> -->
</template>
