<template>
  <q-page class="q-pa-md">
    <h4 class="q-mb-md text-center font-extrabold text-3xl">Lista de Tareas</h4>
    <task-list />
  </q-page>
</template>

<script>
import TaskList from "src/components/TaskList.vue";

export default {
  components: {
    TaskList,
  },
};
</script>
