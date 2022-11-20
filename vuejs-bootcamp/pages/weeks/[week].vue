<script setup>
import { ref } from "vue";
const { data: documents } = await useFetch("/api/documents");
const info = ref(documents);
</script>

<template>
  <div>
    <h1 class="title">{{ info[$route.params.week - 1].title }}</h1>
    <hr />
  </div>
  <div class="content">
    <embed :src="info[$route.params.week - 1].url" />
  </div>
</template>

<style scoped lang="scss">
.title {
  font-size: 50px;
}
.content {
  transform: translateX(3vw);
  margin-right: 5rem !important;
  embed {
    width: 75vw;
    min-height: 100vh;
    margin-top: 1.5rem;
  }
}
</style>
