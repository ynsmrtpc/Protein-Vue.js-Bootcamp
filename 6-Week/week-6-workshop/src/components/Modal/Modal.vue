<script setup>
const props = defineProps(["data"]);
const emit = defineEmits(["close"]);
const num = Math.floor(Math.random() * 25);
const closeHandler = () => {
  emit("close", false);
};
</script>

<template>
  <div class="modal">
    <img
      class="modal__image"
      :src="props?.data?.data[num]?.images?.original?.url"
      alt="gif"
    />
    <div class="close">
      <button class="close__button" @click="closeHandler">&#10006;</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
#app {
  background-color: black;
}
.modal {
  text-align: center;
  border: 2px solid gray;
  border-radius: 5px;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  &__image {
    border-radius: 12px;
  }
}
.close {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &__button {
    border-radius: 50%;
    background-color: rgba(255, 134, 134, 0.95);
    color: #fafafa;
    padding: 0.5rem 0.7rem;
    border: none;
    cursor: pointer;
    margin-top: 12px;
  }
}
</style>
