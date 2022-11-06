<script setup>
import { ref } from "vue";
const showDropdown = ref(false);
</script>

<template>
  <div>
    <aside class="sidebar">
      <nav class="sidebar__nav">
        <ul class="navlist">
          <li class="navlist__item">
            <SidebarItem name="Home" link=""></SidebarItem>
          </li>
          <li class="navlist__item">
            <SidebarItem name="event" link="weeks"></SidebarItem>
          </li>
          <li class="navlist__item">
            <SidebarItem name="picture_as_pdf" link="documents"></SidebarItem>
          </li>
          <!-- <li class="navlist__item">
            <div class="dropdown" @click="showDropdown = !showDropdown">
              <a><span class="material-symbols-outlined"> event</span></a>
              <div class="dropdown__content" v-if="showDropdown">
                <SidebarItem
                  v-for="link in 7"
                  :name="'Week-' + link"
                  :link="'weeks/' + link"
                  size=".7rem"
                  :key="link"
                ></SidebarItem>
              </div>
            </div>
          </li> -->
        </ul>
      </nav>
    </aside>
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
.sidebar {
  position: fixed;
  width: 15vw;
  height: 100vh;
  background: #312450;
  font-size: 0.65em;

  &__nav {
    position: relative;
    margin: 0 15%;
    text-align: right;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;

    .navlist {
      list-style: none;
      &__item {
        position: relative;
        margin: 1.2em 0;

        a {
          line-height: 5em;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.4em;
          color: rgba(#fff, 0.35);
          display: block;
          transition: all ease-out 300ms;
        }

        &:not(.active):hover a {
          color: rgba(#fff, 0.75);
        }

        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 0.2em;
          background: black;
          left: 0;
          bottom: 0;
          background-image: linear-gradient(to right, #5e42a6, #b74e91);
        }
      }
    }
    .active {
      color: #fafafa;
    }
  }
}
.dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;

  &__content {
    padding: 0.6rem 1.2rem;
    position: absolute;
    min-width: 90px;
    box-shadow: 0px 8px 16px 0px rgba(49, 36, 80, 0.2);
    z-index: 1;
    left: 70px;
    top: 0;

    & a {
      color: #fafafa !important;
      padding-right: 1.2rem;

      text-decoration: none;
      display: block;
      &:hover {
        background-color: rgba(49, 36, 80, 0.1);
        color: rgb(49, 36, 80) !important;
      }
    }
  }
}
.navlist__item:hover .dropdown__content {
  display: block;
}
</style>
