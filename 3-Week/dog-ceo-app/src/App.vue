<script setup>
import axios from "axios";
import { ref } from "vue";
import Dog from "./components/Dogs/Dogs.vue";
import GithubLink from "./components/Links/GithubLink.vue";

const dogs = ref([]);
const images = ref([]);

async function getBreeds() {
  const species = await axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then((res) => (dogs.value = Object.keys(res.data.message)));
  return species;
}

async function getImage(event) {
  const dogImages = await axios
    .get(`https://dog.ceo/api/breed/${event}/images`)
    .then((res) => (images.value = res.data.message));
  return dogImages;
}
getBreeds();
</script>

<template>
  <div class="dogList">
    <ul class="dogUl">
      <li
        class="dog-list"
        v-for="dog in dogs"
        :key="dog"
        :dog="dog"
        @click="getImage(dog)"
      >
        {{ dog }}
      </li>
      <GithubLink />
    </ul>
    <template class="images">
      <Dog v-for="image in images" :key="image" :image="image" />
    </template>
  </div>
</template>

<style scoped>
.dogList {
  display: flex;
  justify-content: space-between;
}

.images {
  display: block;
  margin: 20px 95px;
}

.dog-list {
  cursor: pointer;
  list-style: none;
  border: 2px solid transparent;
  padding: 3px;
  margin: 5px 12px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
}

.dog-list:hover {
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.8);
}

@media screen and (max-width: 992px) {
  .dogList {
    display: block;
  }
  .dog-list {
    font-size: 8px;
    line-height: 2px;
  }
  .images {
    margin: 0 30px;
  }
  .dogUl {
    -moz-column-count: 4;
    -moz-column-gap: 0px;
    -webkit-column-count: 4;
    -webkit-column-gap: 0px;
    column-count: 4;
    column-gap: 0px;
    padding: 2px;
  }
}

@media screen and (max-width: 600px) {
  .dogList {
    display: block;
  }
  .dog-list {
    font-size: 8px;
    line-height: 2px;
  }
  .images {
    margin: 0 30px;
  }
  .dogUl {
    -moz-column-count: 4;
    -moz-column-gap: 0px;
    -webkit-column-count: 4;
    -webkit-column-gap: 0px;
    column-count: 4;
    column-gap: 0px;
    padding: 2px;
  }
}
</style>
