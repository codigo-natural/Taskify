<template>
  <q-dialog v-model="showDialog" class="flex items-center">
    <q-card class="w-full md:w-96">
      <q-card-section>
        <div class="text-lg font-semibold mb-4">Editar Tarea</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="taskText" label="Texto de la tarea" dense outlined />
      </q-card-section>
      <q-card-actions align="right" class="mt-6">
        <q-btn flat label="Cancelar" v-close-popup />
        <q-btn color="primary" label="Guardar" @click="saveTask" class="ml-4" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useTaskStore } from "src/stores/modules/tasks";

export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showDialog: false,
      taskText: this.task.text,
    };
  },
  methods: {
    openDialog() {
      this.showDialog = true;
    },
    saveTask() {
      if (!this.task || !this.task.id) {
        console.error("ID de tarea no definida");
        return;
      }
      const taskStore = useTaskStore();
      taskStore.updateTask({ ...this.task, text: this.taskText });
      this.showDialog = false;
    },
    saveEditedTask() {
      // Guardar la tarea editada en el store
      this.$emit("task-updated", { ...this.task, text: this.taskText });
    },
  },
};
</script>
