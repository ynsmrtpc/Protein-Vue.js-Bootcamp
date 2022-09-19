<template>
  <div class="container">
    <a
      class="github-link"
      href="https://github.com/ynsmrtpc/Protein-Vue.js-Bootcamp/tree/master/3-Week/dog-ceo-app"
      target="_blank"
      rel="noreferrer"
    >
      <div class="card">
        <img class="github-img" src="/github-png.png" alt="github-img" />
        <strong class="text">Open from Github</strong>
      </div>
    </a>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  display: flex;
  justify-content: start;
  margin: 1.2rem 3rem;
  width: 150px;
}
.card {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.4s;
}
.github-link {
  text-decoration: none;
  color: #343434;
  font-size: 13px;
}
.card:hover {
  box-shadow: 0 0 5px #343434;
}
.github-img {
  width: 25px;
  padding: 5px;
}
.text {
  position: relative;
  bottom: 12px;
  padding-right: 5px;
}

@media screen and (max-width: 992px) {
  .container {
    margin: 1rem 1.7rem;
  }
  .github-img {
    width: 35px;
  }
  .text {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .container {
    margin: 1rem 1.7rem;
  }
  .github-img {
    width: 35px;
  }
  .text {
    display: none;
  }
}
</style>
