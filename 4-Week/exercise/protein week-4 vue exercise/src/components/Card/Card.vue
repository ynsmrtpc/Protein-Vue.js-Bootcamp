<script setup>
const props = defineProps(["character"]);
</script>

<template>
  <div class="card" v-for="character in props.character">
    <div class="card__title">
      <h3>{{ character.name }}</h3>
    </div>

    <img
      class="card__image"
      :src="character.image"
      :alt="character.name.toLowerCase().replace(' ', '_') + '_photo'"
    />

    <div class="card__footer">
      <li class="items">
        <b>House:</b> <small>{{ character.house.toUpperCase() }}</small>
      </li>

      <li class="items">
        <b>Patronus:</b> <small> {{ character.patronus.toUpperCase() }}</small>
      </li>

      <li class="items">
        <b>House:</b> <small>{{ character.house.toUpperCase() }}</small>
      </li>

      <li class="items">
        <b>Ancestry:</b> <small>{{ character.ancestry.toUpperCase() }}</small>
      </li>

      <small><b>Wand Features</b></small>
      <hr />

      <ul>
        <li class="items">
          <strong>Wood:</strong>
          <small>{{ character.wand.wood.toUpperCase() }}</small>
        </li>

        <li class="items">
          <strong>Core:</strong
          ><small>{{ character.wand.core.toUpperCase() }}</small>
        </li>

        <li class="items">
          <strong>Length: </strong><small>{{ character.wand.length }}</small>
        </li>
      </ul>
    </div>
  </div>
</template>
