<template>
  <template v-for="i in props.title.length" :key="i">
    <div class="container">
      <div class="card">
        <div class="card__content">
          <BlogTitle :title="props.title" />
          <hr />
          <BlogContent :content="props.content" />
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
import BlogTitle from "@/components/BlogCard/BlogTitle.vue";
import BlogContent from "@/components/BlogCard/BlogContent.vue";

let props = defineProps(["title", "content"]);
// console.log(props.title);
</script>
