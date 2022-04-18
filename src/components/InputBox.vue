<template>
  <div
    class="w-full mt-10 flex flex-col justify-center items-center px-3 h-auto pb-12"
  >
    <div class="mt-1 w-full max-w-xl flex justify-start items-center">
      <h1 class="dark:text-light-gray text-light-dark font-bold text-3xl py-2">
        Add a task to do
      </h1>
    </div>
    <main class="w-full lg:w-3/4 flex justify-center items-center">
      <input
        @keyup.enter="addTask"
        type="text"
        v-model="task"
        class="px-3 w-full mb-2 h-12 rounded-xl dark:bg-light-dark dark:border-light-dark dark:text-light-gray bg-gray-50 border max-w-xl outline-none text-gren-900"
      />

      <div class="mt-1 w-full max-w-xl flex justify-end items-center">
        <Datepicker
          class="w-full sm:w-auto"
          inlineWithInput
          v-model="date"
          :startDate="startDate"
          placeholder="Select Date"
          :enableTimePicker="false"
          autoApply
          :closeOnAutoApply="false"
          :clearable="false"
          :minDate="new Date()"
        />
        <div>
          <button
            @click="addTask"
            class="bg-primary sd px-6 py-2 rounded-md ml-5 text-white font-semibold"
          >
            Add
          </button>
        </div>
      </div>
    </main>
    <main class="mt-5 w-full max-w-xl flex justify-center items-center">
      <div
        v-for="items in tasks"
        :key="items.id"
        class="bg-light dark:bg-light-dark text-light-dark dark:text-light-gray p-4 rounded font-semibold w-full relative mt-5"
      >
        <transition
          appear
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated fadeOut"
        >
          <div @dblclick="deleteTask(items.id)">
            {{ items.title }}
            <button
              @click="deleteTask(items.id)"
              class="absolute p-1 rounded-full text-green right-2 -top-3.5"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              class="absolute px-2 rounded bg-red text-white text-xs left-2 -bottom-2"
            >
              {{ items.date }}
            </button>
          </div>
        </transition>
      </div>
    </main>
  </div>
</template>
<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { onMounted, ref } from "vue";
import Localbase from "localbase";

let db = new Localbase("db");
let tasks = ref([]);
const startDate = ref(new Date());
let date = ref(new Date());
let task = ref();

const addTask = () => {
  if (task.value != null) {
    let newTask = {
      id: Date.now(),
      title: task.value,
      date: date.value.toString().slice(4, 15),
    };
    db.collection("tasks").add(newTask);
    tasks.value.push(newTask);
    task.value = "";
  }
};
const getTask = () => {
  db.collection("tasks")
    .get()
    .then((items) => {
      //  push the task to the tasks array
      items.forEach((task) => {
        tasks.value.push(task);
      });
    });
};
const deleteTask = (id) => {
  db.collection("tasks").doc({ id: id }).delete();
  tasks.value = tasks.value.filter((task) => task.id !== id);
};
onMounted(() => {
  getTask();
});
</script>
<style>
.dp__theme_light {
  --dp-primary-color: #1a5cff;
}
</style>
