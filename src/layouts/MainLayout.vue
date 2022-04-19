<template>
  <main class="dark">
    <section class="min-h-screen h-auto dark:bg-blacks">
      <Navbar />
      <InputBox />
    </section>
  </main>
</template>
<script setup>
import { ref } from "vue";
import Navbar from "components/Navbar.vue";
import InputBox from "components/InputBox.vue";

let theme = ref("light");
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  theme.value = "light";
} else {
  theme.value = "dark";
}
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    if (event.matches) {
      theme.value = "dark";
    } else {
      theme.value = "light";
    }
  });
</script>
<style scoped></style>
