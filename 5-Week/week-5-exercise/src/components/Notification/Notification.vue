<script setup>
import { onMounted, ref } from "vue";

const barWidth = ref(100);
const isClose = ref(true);

const props = defineProps(["notification"]);
const emit = defineEmits(["update:id"]);

const position = props.notification.class.position;
const backgroundColor = props.notification.class.background;
const barBackground = props.notification.class.barBackground;

const closeHandler = () => {
  emit("update:id", props.notification.id);
  console.log(position);
};

const startTimer = (time) => {
  const timer = setInterval(() => {
    barWidth.value -= 1;
    console.log(time);
    if (barWidth.value === 0) {
      clearInterval(timer);
    }
  }, time / 120);
};

onMounted(() => {
  setTimeout(() => {
    isClose.value = false;
  }, props.notification.duration);
  startTimer(props.notification.duration);
});
</script>

<template>
  <template v-if="isClose">
    <button class="notification--message__close" @click="closeHandler">
      <div class="notification--message" :class="position" :style="{ backgroundColor: backgroundColor }">
        <div class="notification--message__text">
          <span class="material-symbols-outlined">
            {{ props.notification.icon }}
          </span>
          {{ props.notification.description }}
        </div>
        <div
          v-if="props.notification.barActive"
          class="notification--message__bar"
          :style="{ width: `${barWidth}%`, backgroundColor: barBackground }"
        ></div>
      </div>
    </button>
  </template>
</template>

<style scoped lang="scss">
.notification--message {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  color: white;
  margin: 8px;
  padding: 12px 5px;
  z-index: 99;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 100%;
  &__text {
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-left: 8px;
    span {
      margin: 0px 8px;
      font-size: 18px;
    }
  }
  &__close {
    border: 0;
    background-color: transparent;
    color: #fafafa;
    cursor: pointer;
  }

  &__bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 0px 0px 5px 5px;
  }
}
</style>
