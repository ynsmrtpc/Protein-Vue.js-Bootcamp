<script setup>
import Card from "@/components/Cards/Card.vue";
const colors = [
  "white",
  "black",
  "purple",
  "pink",
  "blueviolet",
  "red",
  "orange",
];
</script>

<template>
  <div>
    <h1>WEEKS</h1>
    <hr />
  </div>

  <div class="container">
    <Card
      v-for="i in 7"
      :name="'Week ' + i"
      :url="'/weeks/' + i"
      :color="colors[i - 1]"
    ></Card>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  justify-content: space-between;
  width: 75vw;
  margin: 2rem 0 0 3rem;
}
</style>
