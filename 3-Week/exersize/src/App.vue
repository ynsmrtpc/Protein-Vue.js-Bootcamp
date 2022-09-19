<template>
  <Header />
  <BlogCard :title="objCard.titlesArr" :content="objCard.contentArr" />
</template>

<script setup>
import Header from "@/components/Header/Header.vue";
import BlogCard from "@/components/BlogCard/BlogCard.vue";

const objCard = {
  titlesArr: [
    "What is SCSS?",
    "What is HTML?",
    "What is CSS?",
    "What is JavaScript?",
    "What is Vue?",
    "What is React?",
    "What is Angular?",
    "What is Frontend Developer?",
  ],
  contentArr: [
    "SCSS is a special type of file for SASS , a program written in Ruby that assembles CSS style sheets for a browser, and for information, SASS adds lots of additional functionality to CSS like variables, nesting and more which can make writing CSS easier and faster.",
    "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
    "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
    "JavaScript, often abbreviated to JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
    "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.",
    "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
    "Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS. ",
    "Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.",
  ],
};
</script>
