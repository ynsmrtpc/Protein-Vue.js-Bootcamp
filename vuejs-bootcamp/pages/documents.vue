<script setup>
import Card from "~~/components/Cards/Card.vue";

const { data } = await useFetch(
  () => "https://api.github.com/users/ynsmrtpc/repos"
);

const filteredData = data.value.filter((repo) => repo.id === 538524609)[0]
  .html_url;
console.log(filteredData);

const url = filteredData + "/tree/main/Bootcamp%20Homeworks";
</script>

<template>
  <div>
    <h1>HOMEWORKS</h1>
    <hr />
  </div>

  <div class="container">
    <Card
      name="JSON CHALLANGE"
      :url="url + '/Homework-1%20(JSON-CHALLANGE)'"
      color="black"
    ></Card>
    <Card
      name="JSON CHALLANGE COMPONENTS"
      :url="url + '/Homework-2%20(JSON-CHALLANGE-COMPONENTS)'"
      color="white"
    ></Card>
    <Card
      name="DASHBOARD"
      :url="url + '/Homework-3%20(DASHBOARD)'"
      color="purple"
    ></Card>
    <Card name="POPUP" :url="url + '/Homework-4%20(POPUP)'" color="pink"></Card>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  justify-content: space-between;
  width: 75vw;
  margin: 2rem 0 0 3rem;
}
</style>
