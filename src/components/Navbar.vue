<template>
  <nav class="navbar flex items-center justify-between max-w-3xl p-4 mx-auto">
    <router-link
      class="inline-flex items-center text-gren-400 justify-center w-auto h-10 px-4 font-bold rounded-lg"
      to="/"
    >
      <img class="w-12" src="../../public/icons/icon-192x192.png" alt="" />
    </router-link>

    <ul
      class="flex items-center space-x-2 text-sm font-medium text-blacks dark:text-light-gray"
    >
      <li>
        <a
          class="inline-flex items-center px-3 py-2 text-gren-500 rounded-lg"
          href="https://www.github.com/atif0075"
          target="_blank"
        >
          Github
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="ml-1.5 w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { ref } from "vue";
</script>
<style scoped></style>
