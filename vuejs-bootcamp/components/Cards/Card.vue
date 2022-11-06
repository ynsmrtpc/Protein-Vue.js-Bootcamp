<script setup>
const props = defineProps(["color", "url", "name"]);
const color = props.color;
</script>

<template>
  <div class="card">
    <a target="_blank" rel="noopener noreferrer" :href="props.url">
      <div class="contentBx">
        <h2>{{ props.name }}</h2>
      </div>
    </a>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  width: 320px;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: v-bind(color);
  clip-path: circle(150px at 80% 20%);
  transition: 0.5s ease-in-out;
}

.card:hover:before {
  clip-path: circle(300px at 80% -20%);
}

.card .contentBx {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 10;

  h2 {
    color: v-bind(color);
  }
}

.card:hover .contentBx {
  height: 210px;
}
</style>
